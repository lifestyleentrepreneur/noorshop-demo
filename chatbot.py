#!/usr/bin/env python3
"""
NoorShop AI Support — CLI Prototype
====================================
AI-powered customer support chatbot for a KSA e-commerce store.

Features:
  - Claude claude-sonnet-4-6 as LLM backend with tool use
  - Bilingual support: Arabic + English (auto-detected)
  - 6 tools: product search, order tracking, returns, stock/delivery, discounts, escalation
  - Multi-turn conversation memory
  - Frustration detection → auto-escalation offer
  - CSAT collection at end of session
  - Rich terminal UI

Usage:
    python3 chatbot.py
    python3 chatbot.py --lang ar      # force Arabic
    python3 chatbot.py --demo         # run a scripted demo
"""

import os
import sys
import json
import argparse
import re
from typing import Optional

from dotenv import load_dotenv

# Load env from workspace root
load_dotenv(os.path.join(os.path.dirname(__file__), "../../../../.env"))

try:
    from anthropic import Anthropic
except ImportError:
    print("Error: anthropic package not installed. Run: pip install anthropic")
    sys.exit(1)

try:
    from rich.console import Console
    from rich.panel import Panel
    from rich.text import Text
    from rich.prompt import Prompt
    from rich.rule import Rule
    from rich.markdown import Markdown
    from rich.columns import Columns
    from rich import print as rprint
    RICH_AVAILABLE = True
except ImportError:
    RICH_AVAILABLE = False

from tools import TOOL_SCHEMAS, execute_tool
from mock_data import STORE_INFO

# ─────────────────────────────────────────────
# CONFIG
# ─────────────────────────────────────────────

MODEL = "claude-sonnet-4-6"
MAX_TOKENS = 1024
FRUSTRATION_KEYWORDS = [
    "frustrated", "angry", "terrible", "unacceptable", "ridiculous", "useless",
    "worst", "hate", "disgusting", "stupid", "incompetent", "demand", "lawsuit",
    "مستاء", "غاضب", "سيء", "مشكلة كبيرة", "احتج", "أطالب", "لا أقبل",
]

SYSTEM_PROMPT = """You are NoorShop's AI support assistant — friendly, helpful, and efficient.
NoorShop is a premium e-commerce store based in Saudi Arabia (KSA).

LANGUAGE RULES:
- Detect the customer's language from their message.
- If they write in Arabic, respond ENTIRELY in Arabic (including tool result summaries).
- If they write in English, respond in English.
- If the language switches, follow the switch immediately.
- Never mix languages in the same response.

PERSONALITY:
- Warm, professional, and concise — no unnecessary filler.
- Address customers respectfully. Use "أخي/أختي" for Arabic, first name when known.
- Always end with an offer to help further (unless the conversation is ending).

TOOL USE:
- Use tools proactively. Don't ask the customer for info you can infer.
- Always check stock before recommending a product to buy.
- If order status is "delivered" and >7 days ago, proactively mention the return window.
- If a customer mentions price hesitation, proactively call apply_discount.
- Never make up order statuses or product info — always use the tools.

ESCALATION:
- Escalate immediately if: (1) customer is clearly frustrated, (2) issue cannot be resolved
  with available tools, (3) customer requests a human agent.
- When escalating, provide the ticket ID and wait time, then collect CSAT.

CART ABANDONMENT RECOVERY:
- If a customer asks about a product and then goes quiet or expresses hesitation,
  proactively offer a discount code using the apply_discount tool.

CSAT:
- At the end of the conversation (when the customer says goodbye or the issue is resolved),
  always ask: "Before you go, could you rate your experience today? (1–5 stars)"
- Thank them warmly after they rate.

STORE CONTEXT:
- Store name: NoorShop (نور شوب)
- Location: Saudi Arabia
- Support hours: {support_hours}
- Free shipping on orders over {free_shipping} SAR
""".format(
    support_hours=STORE_INFO["support_hours"],
    free_shipping=STORE_INFO["free_shipping_threshold"],
)

# ─────────────────────────────────────────────
# RICH UI HELPERS
# ─────────────────────────────────────────────

console = Console() if RICH_AVAILABLE else None

BRAND_COLOR = "bright_cyan"
USER_COLOR = "bright_white"
BOT_COLOR = "bright_green"
TOOL_COLOR = "dim cyan"
WARN_COLOR = "yellow"
ERROR_COLOR = "red"


def print_header():
    if RICH_AVAILABLE:
        console.print()
        console.print(Panel.fit(
            f"[bold {BRAND_COLOR}]🛍️  NoorShop AI Support[/bold {BRAND_COLOR}]\n"
            f"[dim]نور شوب — مساعد الدعم الذكي[/dim]\n"
            f"[dim]Type 'exit' or 'خروج' to end the session[/dim]",
            border_style=BRAND_COLOR,
        ))
        console.print()
    else:
        print("\n" + "="*50)
        print("  NoorShop AI Support | نور شوب")
        print("  Type 'exit' to end")
        print("="*50 + "\n")


def print_bot(message: str):
    if RICH_AVAILABLE:
        console.print(f"\n[bold {BOT_COLOR}]NoorShop[/bold {BOT_COLOR}]  {message}\n")
    else:
        print(f"\nNoorShop: {message}\n")


def print_tool_call(tool_name: str, tool_input: dict):
    if RICH_AVAILABLE:
        args_str = ", ".join(f"{k}={v!r}" for k, v in tool_input.items())
        console.print(f"  [{TOOL_COLOR}]⚙ {tool_name}({args_str})[/{TOOL_COLOR}]")
    else:
        print(f"  [tool] {tool_name}({tool_input})")


def print_separator():
    if RICH_AVAILABLE:
        console.print(Rule(style="dim"))
    else:
        print("-" * 40)


def get_user_input(prompt_text: str = "You") -> str:
    if RICH_AVAILABLE:
        return Prompt.ask(f"\n[bold {USER_COLOR}]{prompt_text}[/bold {USER_COLOR}]")
    else:
        return input(f"\n{prompt_text}: ")


def print_csat_prompt():
    if RICH_AVAILABLE:
        console.print(f"\n[bold {BRAND_COLOR}]⭐ Rate your experience[/bold {BRAND_COLOR}]")
        console.print(f"[dim]  1 = Poor  |  2 = Fair  |  3 = Good  |  4 = Great  |  5 = Excellent[/dim]\n")
    else:
        print("\n⭐ Rate your experience (1-5):")
        print("  1=Poor  2=Fair  3=Good  4=Great  5=Excellent\n")


def print_csat_thanks(score: int, lang: str):
    if lang == "ar":
        messages = {
            5: "شكراً جزيلاً! سعداء جداً بخدمتك! 🌟",
            4: "شكراً! يسعدنا أننا ساعدناك. 😊",
            3: "شكراً على تقييمك! نعمل دائماً على التحسين.",
            2: "نعتذر عن تجربتك. سنعمل على تحسين خدمتنا.",
            1: "نعتذر بشدة عن تجربتك السيئة. سيتواصل معك فريقنا قريباً.",
        }
    else:
        messages = {
            5: "Thank you so much! Thrilled we could help! 🌟",
            4: "Thanks for the kind words! Glad we could assist. 😊",
            3: "Thanks for the feedback! We're always working to improve.",
            2: "Sorry we didn't meet your expectations. We'll do better.",
            1: "We sincerely apologize. Our team will follow up with you shortly.",
        }
    msg = messages.get(score, "Thank you for your feedback!")
    if RICH_AVAILABLE:
        console.print(f"\n[bold {BRAND_COLOR}]{msg}[/bold {BRAND_COLOR}]\n")
    else:
        print(f"\n{msg}\n")


# ─────────────────────────────────────────────
# LANGUAGE DETECTION
# ─────────────────────────────────────────────

ARABIC_PATTERN = re.compile(r'[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]+')

def detect_language(text: str) -> str:
    """Return 'ar' if Arabic characters detected, else 'en'."""
    arabic_chars = len(ARABIC_PATTERN.findall(text))
    return "ar" if arabic_chars > 0 else "en"


def is_frustrated(text: str) -> bool:
    """Detect frustration signals in user message."""
    lower = text.lower()
    return any(kw in lower for kw in FRUSTRATION_KEYWORDS)


def is_goodbye(text: str) -> bool:
    """Detect conversation-ending messages."""
    goodbyes = ["bye", "goodbye", "thanks bye", "that's all", "that's it", "no more",
                "مع السلامة", "باي", "شكراً وباي", "هذا كل شيء", "انتهيت"]
    lower = text.lower()
    return any(g in lower for g in goodbyes)


# ─────────────────────────────────────────────
# CORE CHAT LOGIC
# ─────────────────────────────────────────────

def process_response(client: Anthropic, messages: list) -> tuple[str, bool]:
    """
    Send messages to Claude, handle tool calls in a loop, return final text.
    Returns (response_text, escalated_flag).
    """
    escalated = False

    while True:
        response = client.messages.create(
            model=MODEL,
            max_tokens=MAX_TOKENS,
            system=SYSTEM_PROMPT,
            tools=TOOL_SCHEMAS,
            messages=messages,
        )

        # If Claude wants to use tools
        if response.stop_reason == "tool_use":
            # Collect all tool calls in this response turn
            tool_results = []
            assistant_content = response.content

            for block in response.content:
                if block.type == "tool_use":
                    print_tool_call(block.name, block.input)
                    result = execute_tool(block.name, block.input)
                    tool_results.append({
                        "type": "tool_result",
                        "tool_use_id": block.id,
                        "content": json.dumps(result),
                    })
                    if block.name == "escalate_to_human":
                        escalated = True

            # Append assistant message with tool calls
            messages.append({"role": "assistant", "content": assistant_content})
            # Append all tool results in one user message
            messages.append({"role": "user", "content": tool_results})
            # Loop to get Claude's final response
            continue

        # End turn — extract text
        text = ""
        for block in response.content:
            if hasattr(block, "text"):
                text += block.text

        messages.append({"role": "assistant", "content": response.content})
        return text.strip(), escalated


def collect_csat(lang: str, demo_score: Optional[int] = None) -> Optional[int]:
    """Ask for CSAT rating and return score 1-5."""
    print_csat_prompt()
    try:
        if demo_score is not None:
            if RICH_AVAILABLE:
                console.print(f"\n[bold {USER_COLOR}]Rating (1-5)[/bold {USER_COLOR}]  [dim](demo)[/dim]  {demo_score}")
            else:
                print(f"\nRating (1-5) (demo): {demo_score}")
            print_csat_thanks(demo_score, lang)
            return demo_score
        raw = get_user_input("Rating (1-5)")
        score = int(raw.strip())
        if 1 <= score <= 5:
            print_csat_thanks(score, lang)
            return score
    except (ValueError, KeyboardInterrupt, EOFError):
        pass
    return None


# ─────────────────────────────────────────────
# DEMO MODE
# ─────────────────────────────────────────────

DEMO_SCRIPT = [
    "Hi, I want to know about the Sony headphones you have",
    "Is it available in Riyadh? How long will delivery take?",
    "My order ORD-1042 — where is it?",
    "Can I return my order ORD-0987?",
    "I've been waiting forever and nobody is helping me, this is ridiculous",
    "Thanks, that's all for now, goodbye",
]

DEMO_SCRIPT_AR = [
    "مرحباً، أريد معرفة حالة طلبي رقم ORD-1105",
    "هل يمكنني إرجاع الطلب؟",
    "شكراً، مع السلامة",
]


# ─────────────────────────────────────────────
# MAIN
# ─────────────────────────────────────────────

def run_chatbot(force_lang: Optional[str] = None, demo: bool = False, demo_ar: bool = False):
    api_key = os.getenv("ANTHROPIC_API_KEY")
    if not api_key:
        print("Error: ANTHROPIC_API_KEY not set in .env")
        sys.exit(1)

    client = Anthropic(api_key=api_key)
    messages = []
    session_lang = force_lang or "en"
    escalated = False
    csat_collected = False
    turn = 0

    print_header()

    # Greeting
    greeting_en = (
        f"Hello! 👋 Welcome to **{STORE_INFO['name']}** support.\n"
        f"I can help you with product information, order tracking, returns, and more.\n"
        f"How can I assist you today?"
    )
    greeting_ar = (
        f"مرحباً! 👋 أهلاً وسهلاً بك في دعم **{STORE_INFO['name_ar']}**.\n"
        f"يمكنني مساعدتك في معلومات المنتجات، تتبع الطلبات، الإرجاع، والمزيد.\n"
        f"كيف يمكنني مساعدتك اليوم؟"
    )
    greeting = greeting_ar if session_lang == "ar" else greeting_en
    print_bot(greeting)

    demo_inputs = []
    if demo:
        demo_inputs = DEMO_SCRIPT[:]
        if RICH_AVAILABLE:
            console.print(f"[dim]── Running in DEMO mode ({len(demo_inputs)} scripted turns) ──[/dim]\n")
    elif demo_ar:
        demo_inputs = DEMO_SCRIPT_AR[:]
        session_lang = "ar"
        if RICH_AVAILABLE:
            console.print(f"[dim]── وضع العرض التجريبي ({len(demo_inputs)} محادثات) ──[/dim]\n")

    while True:
        turn += 1

        # Get input
        if demo_inputs:
            user_input = demo_inputs.pop(0)
            if RICH_AVAILABLE:
                console.print(f"\n[bold {USER_COLOR}]You[/bold {USER_COLOR}]  [dim](demo)[/dim]  {user_input}")
            else:
                print(f"\nYou (demo): {user_input}")
        else:
            user_input = get_user_input("You")

        if not user_input.strip():
            continue

        # Exit commands
        if user_input.lower().strip() in ("exit", "quit", "خروج", "q"):
            if not csat_collected:
                collect_csat(session_lang)
            if RICH_AVAILABLE:
                console.print(f"\n[bold {BRAND_COLOR}]Thank you for contacting NoorShop! شكراً 🌟[/bold {BRAND_COLOR}]\n")
            else:
                print("\nThank you for contacting NoorShop! 🌟\n")
            break

        # Detect language
        detected = detect_language(user_input)
        if not force_lang:
            session_lang = detected

        # Frustration detection — flag for Claude to handle
        frustrated = is_frustrated(user_input)
        if frustrated and RICH_AVAILABLE:
            console.print(f"  [{WARN_COLOR}]⚠ Frustration signal detected — escalation may be triggered[/{WARN_COLOR}]")

        # Add to conversation
        messages.append({"role": "user", "content": user_input})

        # Get response
        response_text, just_escalated = process_response(client, messages)
        if just_escalated:
            escalated = True

        print_bot(response_text)

        # Check if conversation is ending
        if is_goodbye(user_input) or (demo_inputs == [] and demo):
            if not csat_collected:
                demo_score = 5 if (demo or demo_ar) else None
                score = collect_csat(session_lang, demo_score=demo_score)
                csat_collected = True
            print_separator()
            if RICH_AVAILABLE:
                console.print(f"\n[bold {BRAND_COLOR}]Session ended. Thank you for shopping with NoorShop! 🌟[/bold {BRAND_COLOR}]\n")
            else:
                print("\nSession ended. Thank you! 🌟\n")
            break

        # After escalation, collect CSAT
        if escalated and not csat_collected:
            demo_score = 4 if (demo or demo_ar) else None
            score = collect_csat(session_lang, demo_score=demo_score)
            csat_collected = True


def main():
    parser = argparse.ArgumentParser(
        description="NoorShop AI Support — KSA E-commerce Chatbot POC",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python3 chatbot.py                 # Interactive mode (English default)
  python3 chatbot.py --lang ar       # Force Arabic
  python3 chatbot.py --demo          # Run English demo script
  python3 chatbot.py --demo-ar       # Run Arabic demo script
        """,
    )
    parser.add_argument("--lang", choices=["en", "ar"], help="Force response language")
    parser.add_argument("--demo", action="store_true", help="Run scripted English demo")
    parser.add_argument("--demo-ar", action="store_true", help="Run scripted Arabic demo")
    args = parser.parse_args()

    try:
        run_chatbot(
            force_lang=args.lang,
            demo=args.demo,
            demo_ar=args.demo_ar,
        )
    except KeyboardInterrupt:
        if RICH_AVAILABLE:
            console.print(f"\n\n[dim]Session interrupted. Goodbye! 👋[/dim]\n")
        else:
            print("\n\nSession interrupted. Goodbye!")


if __name__ == "__main__":
    main()
