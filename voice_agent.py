#!/usr/bin/env python3
"""
voice_agent.py — Create and launch NoorShop voice assistants on Vapi.ai.

Two assistants:
  • Noor  — Arabic-speaking (ElevenLabs AR voice + Deepgram Arabic STT)
  • Layla — English-speaking (ElevenLabs EN voice + Deepgram English STT)

Prerequisites:
  1. Run tool_server.py and expose it via ngrok:
       uvicorn tool_server:app --host 0.0.0.0 --port 8000
       ngrok http 8000
  2. Set TOOL_SERVER_URL in .env (the ngrok https URL)
  3. Fill VAPI_API_KEY, ELEVENLABS_VOICE_ID_AR, ELEVENLABS_VOICE_ID_EN in .env

Usage:
  python3 voice_agent.py                  # Create both assistants + launch web calls
  python3 voice_agent.py --lang ar        # Arabic only
  python3 voice_agent.py --lang en        # English only
  python3 voice_agent.py --list           # List existing NoorShop assistants
  python3 voice_agent.py --call ASST_ID   # Launch a web call for an existing assistant
"""

import argparse
import http.server
import json
import os
import sys
import threading
import webbrowser

import requests
from dotenv import load_dotenv

load_dotenv(dotenv_path=os.path.join(os.path.dirname(os.path.abspath(__file__)), "../../../../.env"))

VAPI_API_KEY = os.getenv("VAPI_API_KEY", "")
VAPI_PUBLIC_KEY = os.getenv("VAPI_PUBLIC_KEY", "")
ELEVENLABS_VOICE_ID_AR = os.getenv("ELEVENLABS_VOICE_ID_AR", "")
ELEVENLABS_VOICE_ID_EN = os.getenv("ELEVENLABS_VOICE_ID_EN", "")
TOOL_SERVER_URL = os.getenv("TOOL_SERVER_URL", "")  # e.g. https://abc123.ngrok.io

VAPI_BASE = "https://api.vapi.ai"

HEADERS = {
    "Authorization": f"Bearer {VAPI_API_KEY}",
    "Content-Type": "application/json",
}

# ─────────────────────────────────────────────
# SYSTEM PROMPTS (voice-optimised — no markdown)
# ─────────────────────────────────────────────

SYSTEM_PROMPT_AR = """أنت ليلى، مساعدة دعم العملاء لمتجر نورشوب للتسوق الإلكتروني في المملكة العربية السعودية.

أسلوبك: ودود، واضح، ومهني. استخدمي اللهجة الخليجية الفصحى المفهومة لجميع عملاء الخليج.

قواعد أساسية:
- تكلمي بجمل قصيرة ومباشرة، لأن هذه محادثة صوتية.
- لا تستخدمي قوائم أو رموز أو تنسيقات نصية.
- قبل الاستعلام عن أي معلومة، قولي مثلاً: "تفضلي، سأتحقق من ذلك الآن."
- إذا طلب العميل التحدث مع موظف بشري، استخدمي أداة escalate_to_human.
- إذا أبدى العميل إحباطاً أو ضيقاً، تعاطفي معه أولاً ثم ساعديه.
- إذا ذكر العميل سعر المنتج أو ترددًا في الشراء، اعرضي عليه كوبون خصم.

قواعد النطق للأرقام (مهم جداً):
- أرقام الطلبات والتتبع: انطقي كل رقم بشكل منفصل. مثال: ORD-1042 تنطق "أوردر، واحد، صفر، أربعة، اثنين".
- الأسعار: انطقيها كاملة بالكلمات. مثال: 4999 ريال تنطق "أربعة آلاف وتسعمائة وتسعة وتسعون ريالاً".
- أرقام الهاتف: انطقي كل رقم بشكل منفصل.
- التواريخ: انطقيها بالكلمات مثل "السادس عشر من مارس".
- لا تنطقي الرموز مثل (-) أو (/) بل تجاهليها أو قولي "شرطة".

الأدوات المتاحة: search_products، track_order، initiate_return، check_stock_and_delivery، apply_discount، escalate_to_human.

ابدئي المحادثة بترحيب قصير ثم اسألي عن طلب العميل مباشرة."""

SYSTEM_PROMPT_EN = """You are Noor, a customer support voice assistant for NoorShop, a Saudi e-commerce store.

Your style: warm, clear, and professional. Speak naturally as this is a voice call.

Core rules:
- Use short, direct sentences — no lists, no bullet points, no markdown.
- Before fetching information, say something like: "Sure, let me look that up for you."
- If the customer wants to speak with a human agent, use the escalate_to_human tool.
- If the customer sounds frustrated, acknowledge their feelings before moving to a solution.
- If the customer hesitates about price or asks for a discount, proactively offer a promo code.
- Always confirm order numbers or product IDs before querying to avoid errors.

Number pronunciation rules (critical for voice):
- Order and tracking numbers: read each digit individually. Example: ORD-1042 → "order one zero four two". Tracking number ARAMEX-9948271 → "A R A M E X, nine nine four eight two seven one".
- Prices: read as full words. Example: 4999 SAR → "four thousand nine hundred and ninety-nine Saudi riyals".
- Phone numbers: read each digit individually.
- Dates: read naturally, e.g. "March sixteenth" not "03/16".
- Ignore hyphens and slashes — do not say "dash" or "slash", just pause briefly.

Available tools: search_products, track_order, initiate_return, check_stock_and_delivery, apply_discount, escalate_to_human.

After resolving the customer's issue, ask if there is anything else you can help with."""

# ─────────────────────────────────────────────
# TOOL DEFINITIONS (Vapi format)
# ─────────────────────────────────────────────

def _make_vapi_tools(server_url: str) -> list:
    """Build Vapi tool definitions that point to the tool server."""
    tool_defs = [
        {
            "name": "search_products",
            "description": "Search the product catalog by keyword, category, or product ID.",
            "parameters": {
                "type": "object",
                "properties": {
                    "query": {"type": "string"},
                    "category": {"type": "string"},
                    "product_id": {"type": "string"},
                },
                "required": [],
            },
        },
        {
            "name": "track_order",
            "description": "Look up order status and details by order ID.",
            "parameters": {
                "type": "object",
                "properties": {
                    "order_id": {"type": "string"},
                    "email": {"type": "string"},
                },
                "required": ["order_id"],
            },
        },
        {
            "name": "initiate_return",
            "description": "Check return eligibility and initiate the return process.",
            "parameters": {
                "type": "object",
                "properties": {
                    "order_id": {"type": "string"},
                    "reason": {"type": "string"},
                },
                "required": ["order_id", "reason"],
            },
        },
        {
            "name": "check_stock_and_delivery",
            "description": "Check stock availability and estimated delivery date for a product.",
            "parameters": {
                "type": "object",
                "properties": {
                    "product_id": {"type": "string"},
                    "city": {"type": "string"},
                },
                "required": ["product_id"],
            },
        },
        {
            "name": "apply_discount",
            "description": "Validate a promo code or suggest the best available discount.",
            "parameters": {
                "type": "object",
                "properties": {
                    "cart_value": {"type": "number"},
                    "promo_code": {"type": "string"},
                },
                "required": ["cart_value"],
            },
        },
        {
            "name": "escalate_to_human",
            "description": "Transfer the call to a human support agent.",
            "parameters": {
                "type": "object",
                "properties": {
                    "reason": {"type": "string"},
                    "priority": {
                        "type": "string",
                        "enum": ["low", "normal", "high", "urgent"],
                    },
                },
                "required": ["reason"],
            },
        },
    ]

    return [
        {
            "type": "function",
            "function": td,
            "server": {"url": f"{server_url}/tools"},
        }
        for td in tool_defs
    ]


# ─────────────────────────────────────────────
# ASSISTANT CONFIGS
# ─────────────────────────────────────────────

def _build_assistant_config(
    name: str,
    lang: str,
    system_prompt: str,
    first_message: str,
    voice_id: str,
    tool_server_url: str,
) -> dict:
    # nova-2 supports "multi" for Arabic; "en" for English
    deepgram_lang = "multi" if lang == "ar" else "en"

    config = {
        "name": name,
        "model": {
            "provider": "anthropic",
            "model": "claude-sonnet-4-6",
            "messages": [{"role": "system", "content": system_prompt}],
            "tools": _make_vapi_tools(tool_server_url) if tool_server_url else [],
            "temperature": 0.3,
        },
        "voice": {
            "provider": "11labs",
            "voiceId": voice_id,
            "model": "eleven_multilingual_v2",
            "stability": 0.5,
            "similarityBoost": 0.75,
        },
        "transcriber": {
            "provider": "deepgram",
            "model": "nova-2",
            "language": deepgram_lang,
        },
        "firstMessage": first_message,
        "endCallMessage": (
            "شكراً لتواصلك مع نورشوب. إلى اللقاء!" if lang == "ar"
            else "Thank you for calling NoorShop. Have a great day!"
        ),
        "silenceTimeoutSeconds": 30,
        "maxDurationSeconds": 600,
        "backgroundSound": "off",
        "backchannelingEnabled": False,
        "metadata": {"store": "NoorShop", "lang": lang},
    }

    return config


ASSISTANTS = {
    "ar": {
        "name": "Layla",
        "lang": "ar",
        "system_prompt": SYSTEM_PROMPT_AR,
        "first_message": "مرحبًا، أنا ليلى من متجر نورشوب. كيف يمكنني مساعدتك اليوم؟",
        "voice_id_env": "ELEVENLABS_VOICE_ID_AR",
    },
    "en": {
        "name": "Noor",
        "lang": "en",
        "system_prompt": SYSTEM_PROMPT_EN,
        "first_message": "Hello! I'm Noor from NoorShop. How can I help you today?",
        "voice_id_env": "ELEVENLABS_VOICE_ID_EN",
    },
}


# ─────────────────────────────────────────────
# VAPI API HELPERS
# ─────────────────────────────────────────────

def create_assistant(lang: str) -> dict:
    """Create or update a Vapi assistant. Returns the assistant object."""
    cfg = ASSISTANTS[lang]
    voice_id = os.getenv(cfg["voice_id_env"], "")

    if not voice_id:
        print(f"  ⚠  {cfg['voice_id_env']} not set in .env — skipping voice config")

    payload = _build_assistant_config(
        name=cfg["name"],
        lang=lang,
        system_prompt=cfg["system_prompt"],
        first_message=cfg["first_message"],
        voice_id=voice_id,
        tool_server_url=TOOL_SERVER_URL,
    )

    resp = requests.post(f"{VAPI_BASE}/assistant", headers=HEADERS, json=payload)
    resp.raise_for_status()
    return resp.json()


def list_assistants() -> list:
    resp = requests.get(f"{VAPI_BASE}/assistant", headers=HEADERS)
    resp.raise_for_status()
    return resp.json()


def delete_assistant(assistant_id: str) -> None:
    resp = requests.delete(f"{VAPI_BASE}/assistant/{assistant_id}", headers=HEADERS)
    resp.raise_for_status()


def serve_demo(html_path: str, port: int = 3000) -> None:
    """Serve demo.html on localhost and open it in the browser."""
    directory = os.path.dirname(html_path)

    class Handler(http.server.SimpleHTTPRequestHandler):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=directory, **kwargs)

        def log_message(self, fmt, *args):
            pass  # silence request logs

    server = http.server.HTTPServer(("", port), Handler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    url = f"http://localhost:{port}/demo.html"
    print(f"\n  Serving demo at: {url}")
    webbrowser.open(url)


def generate_demo_html(assistants: dict, public_key: str, chat_api_url: str = "http://localhost:8000") -> str:
    """
    Generate the NoorShop support demo page with channel selector:
      - WhatsApp chat (opens wa.me)
      - Voice call EN (Noor)
      - Voice call AR (Layla)
    assistants: {"ar": {"name": ..., "id": ...}, "en": {...}}
    Returns the path to the written HTML file.
    """
    en = assistants.get("en", {})
    ar = assistants.get("ar", {})
    en_id = en.get("id", "")
    ar_id = ar.get("id", "")
    en_name = en.get("name", "Noor")
    ar_name = ar.get("name", "Layla")

    from mock_data import STORE_INFO
    whatsapp_number = STORE_INFO["whatsapp"].replace("+", "").replace("-", "").replace(" ", "")
    session_id = "demo-" + os.urandom(4).hex()

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NoorShop Support</title>
  <style>
    *, *::before, *::after {{ box-sizing: border-box; margin: 0; padding: 0; }}
    body {{
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      color: #f1f5f9; min-height: 100vh;
      display: flex; flex-direction: column; align-items: center;
      justify-content: center; padding: 2rem;
    }}
    .logo {{ font-size: 2.4rem; margin-bottom: 0.3rem; }}
    h1 {{ font-size: 1.6rem; font-weight: 700; letter-spacing: -0.5px; }}
    .tagline {{ color: #94a3b8; font-size: 0.9rem; margin-top: 0.3rem; margin-bottom: 2.8rem; }}

    /* ── Cards ── */
    .channels {{ display: flex; gap: 1.2rem; flex-wrap: wrap; justify-content: center; }}
    .card {{
      background: #1e293b; border: 1px solid #334155; border-radius: 18px;
      padding: 1.8rem 1.5rem; width: 185px; text-align: center;
      cursor: pointer; transition: transform 0.15s, border-color 0.15s, box-shadow 0.15s;
      text-decoration: none; color: inherit;
      display: flex; flex-direction: column; align-items: center; gap: 0.65rem;
    }}
    .card:hover {{ transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.4); }}
    .card.whatsapp:hover  {{ border-color: #25D366; }}
    .card.livechat:hover  {{ border-color: #f59e0b; }}
    .card.voice-en:hover  {{ border-color: #3b82f6; }}
    .card.voice-ar:hover  {{ border-color: #a855f7; }}
    .card.active   {{ border-color: #22c55e; box-shadow: 0 0 0 3px rgba(34,197,94,0.2); }}
    .card.disabled {{ opacity: 0.4; cursor: not-allowed; pointer-events: none; }}
    .card-icon  {{ font-size: 2.2rem; }}
    .card-title {{ font-size: 1rem; font-weight: 700; }}
    .card-sub   {{ font-size: 0.75rem; color: #94a3b8; line-height: 1.5; }}
    .card-sub-ar {{ font-size: 0.72rem; color: #64748b; direction: rtl; }}
    .badge {{
      display: inline-block; font-size: 0.63rem; font-weight: 700;
      padding: 2px 8px; border-radius: 99px;
    }}
    .badge-green  {{ background: #14532d; color: #4ade80; }}
    .badge-amber  {{ background: #451a03; color: #fbbf24; }}
    .badge-blue   {{ background: #1e3a5f; color: #93c5fd; }}
    .badge-purple {{ background: #3b0764; color: #d8b4fe; }}

    /* ── Voice status bar ── */
    #call-status {{
      margin-top: 2rem; padding: 0.65rem 1.6rem;
      background: #1e293b; border: 1px solid #334155; border-radius: 10px;
      font-size: 0.88rem; color: #94a3b8; min-width: 300px; text-align: center;
    }}
    #call-status.hidden {{ display: none; }}
    #stop-btn {{
      margin-top: 0.8rem; padding: 0.55rem 1.4rem;
      background: #dc2626; color: #fff; border: none; border-radius: 10px;
      font-size: 0.88rem; font-weight: 600; cursor: pointer; display: none;
    }}
    #stop-btn:hover {{ background: #b91c1c; }}
    .dot {{
      display: inline-block; width: 7px; height: 7px; border-radius: 50%;
      background: #22c55e; margin-right: 5px; animation: blink 1.2s infinite;
    }}
    @keyframes blink {{ 0%,100%{{opacity:1}} 50%{{opacity:0.2}} }}

    /* ── Chat panel ── */
    #chat-panel {{
      display: none; flex-direction: column;
      width: 100%; max-width: 420px; height: 480px;
      background: #1e293b; border: 1px solid #334155; border-radius: 18px;
      margin-top: 1.8rem; overflow: hidden;
    }}
    #chat-panel.open {{ display: flex; }}
    .chat-header {{
      display: flex; justify-content: space-between; align-items: center;
      padding: 1rem 1.2rem; border-bottom: 1px solid #334155; flex-shrink: 0;
    }}
    .chat-header-title {{ font-weight: 700; font-size: 0.95rem; }}
    .chat-header-sub   {{ font-size: 0.72rem; color: #94a3b8; }}
    .chat-close {{
      background: none; border: none; color: #94a3b8;
      font-size: 1.2rem; cursor: pointer; padding: 4px 8px; border-radius: 6px;
    }}
    .chat-close:hover {{ background: #334155; color: #f1f5f9; }}
    #chat-messages {{
      flex: 1; overflow-y: auto; padding: 1rem; display: flex;
      flex-direction: column; gap: 0.6rem;
    }}
    .msg {{
      max-width: 80%; padding: 0.55rem 0.9rem;
      border-radius: 14px; font-size: 0.88rem; line-height: 1.5; word-break: break-word;
    }}
    .msg.bot  {{ background: #0f172a; color: #e2e8f0; align-self: flex-start; border-bottom-left-radius: 4px; }}
    .msg.user {{ background: #1d4ed8; color: #fff; align-self: flex-end; border-bottom-right-radius: 4px; }}
    .msg.typing {{ color: #64748b; font-style: italic; }}
    .chat-input-row {{
      display: flex; gap: 0.5rem; padding: 0.8rem 1rem;
      border-top: 1px solid #334155; flex-shrink: 0;
    }}
    #chat-input {{
      flex: 1; background: #0f172a; border: 1px solid #334155; border-radius: 10px;
      color: #f1f5f9; padding: 0.55rem 0.9rem; font-size: 0.88rem; outline: none;
    }}
    #chat-input:focus {{ border-color: #f59e0b; }}
    #chat-send {{
      background: #f59e0b; color: #0f172a; border: none; border-radius: 10px;
      padding: 0.55rem 1rem; font-weight: 700; cursor: pointer; font-size: 0.88rem;
    }}
    #chat-send:hover {{ background: #d97706; }}
    #chat-send:disabled {{ opacity: 0.5; cursor: not-allowed; }}

    footer {{ margin-top: 2.5rem; font-size: 0.72rem; color: #475569; }}
  </style>
</head>
<body>

  <div class="logo">🛍</div>
  <h1>NoorShop Customer Support</h1>
  <p class="tagline">Choose how you'd like to reach us · اختر طريقة التواصل</p>

  <div class="channels">

    <!-- WhatsApp -->
    <a class="card whatsapp"
       href="https://wa.me/{whatsapp_number}?text=Hello%2C%20I%20need%20help%20with%20my%20order"
       target="_blank">
      <div class="card-icon">💬</div>
      <div class="card-title">WhatsApp</div>
      <div class="card-sub">Chat with us on WhatsApp</div>
      <div class="card-sub-ar">تواصل معنا عبر واتساب</div>
      <span class="badge badge-green">EN · عربي</span>
    </a>

    <!-- Live Chat -->
    <div class="card livechat" id="card-chat">
      <div class="card-icon">🖥️</div>
      <div class="card-title">Live Chat</div>
      <div class="card-sub">Chat here on this page</div>
      <div class="card-sub-ar">تحدث معنا هنا مباشرة</div>
      <span class="badge badge-amber">EN · عربي</span>
    </div>

    <!-- Voice EN -->
    <div class="card voice-en btn-lang" data-assistant-id="{en_id}" id="card-en">
      <div class="card-icon">🎙</div>
      <div class="card-title">{en_name}</div>
      <div class="card-sub">Voice support in English</div>
      <span class="badge badge-blue">English</span>
    </div>

    <!-- Voice AR -->
    <div class="card voice-ar btn-lang" data-assistant-id="{ar_id}" id="card-ar">
      <div class="card-icon">🎙</div>
      <div class="card-title">{ar_name}</div>
      <div class="card-sub-ar" style="direction:rtl">دعم صوتي بالعربية</div>
      <span class="badge badge-purple">عربي</span>
    </div>

  </div>

  <!-- Voice status -->
  <div id="call-status" class="hidden"></div>
  <button id="stop-btn">⏹ End Call</button>

  <!-- Chat panel -->
  <div id="chat-panel">
    <div class="chat-header">
      <div>
        <div class="chat-header-title">🛍 NoorShop Support</div>
        <div class="chat-header-sub">Typically replies instantly · يرد فوراً</div>
      </div>
      <button class="chat-close" id="chat-close-btn">✕</button>
    </div>
    <div id="chat-messages"></div>
    <div class="chat-input-row">
      <input id="chat-input" type="text" placeholder="Type a message... / اكتب رسالة..." autocomplete="off" />
      <button id="chat-send">Send</button>
    </div>
  </div>

  <footer>NoorShop · support@noorshop.sa · 920-000-1234</footer>

  <script src="vapi.bundle.js"></script>
  <script>
    /* ── Config ── */
    const VAPI_PUBLIC_KEY = "{public_key}";
    const CHAT_API = "{chat_api_url}";  // empty = same origin
    let vapi = null;
    let chatHistory = JSON.parse(localStorage.getItem("noorshop_chat") || "[]");

    /* ── Voice ── */
    const statusEl = document.getElementById("call-status");
    const stopBtn  = document.getElementById("stop-btn");

    function setStatus(msg, live) {{
      statusEl.classList.remove("hidden");
      statusEl.innerHTML = live ? '<span class="dot"></span>' + msg : msg;
    }}
    function resetVoiceUI() {{
      document.querySelectorAll(".btn-lang").forEach(c => c.classList.remove("active","disabled"));
      stopBtn.style.display = "none";
      statusEl.classList.add("hidden");
    }}
    function startCall(assistantId, cardEl) {{
      if (vapi) vapi.stop();
      try {{ vapi = new (VapiSDK.default || VapiSDK.Vapi || Object.values(VapiSDK)[0])(VAPI_PUBLIC_KEY); }}
      catch(e) {{ setStatus("Init error: " + e.message); return; }}
      vapi.on("call-start",   () => setStatus("Connected — speak now", true));
      vapi.on("call-end",     () => {{ setStatus("Call ended"); setTimeout(resetVoiceUI, 1500); }});
      vapi.on("error",        (e) => {{ setStatus("Error: " + (e?.message || JSON.stringify(e))); resetVoiceUI(); }});
      vapi.on("speech-start", () => setStatus("Listening...", true));
      vapi.on("speech-end",   () => setStatus("Processing...", true));
      document.querySelectorAll(".btn-lang").forEach(c => c.classList.add("disabled"));
      cardEl.classList.remove("disabled"); cardEl.classList.add("active");
      stopBtn.style.display = "inline-block";
      setStatus("Connecting...", true);
      vapi.start(assistantId);
    }}
    document.querySelectorAll("[data-assistant-id]").forEach(card => {{
      card.addEventListener("click", () => startCall(card.dataset.assistantId, card));
    }});
    stopBtn.addEventListener("click", () => {{ if (vapi) vapi.stop(); }});

    /* ── Chat panel ── */
    const panel     = document.getElementById("chat-panel");
    const messages  = document.getElementById("chat-messages");
    const input     = document.getElementById("chat-input");
    const sendBtn   = document.getElementById("chat-send");
    let chatReady   = false;

    function addMsg(text, role) {{
      const div = document.createElement("div");
      div.className = "msg " + role;
      div.textContent = text;
      messages.appendChild(div);
      messages.scrollTop = messages.scrollHeight;
      return div;
    }}

    async function openChat() {{
      panel.classList.add("open");
      document.getElementById("card-chat").classList.add("active");
      if (!chatReady) {{
        chatReady = true;
        // Restore history from localStorage
        if (chatHistory.length > 0) {{
          // Re-render stored messages (user messages only for simplicity)
          chatHistory.forEach(m => {{
            if (m.role === "user" && typeof m.content === "string") addMsg(m.content, "user");
          }});
        }} else {{
          const typing = addMsg("Connecting...", "bot typing");
          const res = await fetch(CHAT_API + "/api/chat", {{
            method: "POST", headers: {{"Content-Type": "application/json"}},
            body: JSON.stringify({{message: "__init__", messages: []}})
          }}).catch(() => null);
          typing.remove();
          addMsg(res ? (await res.json()).reply : "Hi! How can I help you today? 😊", "bot");
        }}
      }}
      input.focus();
    }}

    async function sendMessage() {{
      const text = input.value.trim();
      if (!text) return;
      input.value = "";
      sendBtn.disabled = true;
      addMsg(text, "user");
      const typing = addMsg("Typing...", "bot typing");
      try {{
        const res  = await fetch(CHAT_API + "/api/chat", {{
          method: "POST",
          headers: {{"Content-Type": "application/json"}},
          body: JSON.stringify({{message: text, messages: chatHistory}})
        }});
        const data = await res.json();
        typing.remove();
        addMsg(data.reply, "bot");
        chatHistory = data.messages || chatHistory;
        localStorage.setItem("noorshop_chat", JSON.stringify(chatHistory));
      }} catch(e) {{
        typing.remove();
        addMsg("Sorry, something went wrong. Please try again.", "bot");
      }}
      sendBtn.disabled = false;
      input.focus();
    }}

    document.getElementById("card-chat").addEventListener("click", openChat);
    document.getElementById("chat-close-btn").addEventListener("click", () => {{
      panel.classList.remove("open");
      document.getElementById("card-chat").classList.remove("active");
    }});
    sendBtn.addEventListener("click", sendMessage);
    input.addEventListener("keydown", e => {{ if (e.key === "Enter") sendMessage(); }});
  </script>
</body>
</html>"""

    path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "demo.html")
    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
    return path


# ─────────────────────────────────────────────
# MAIN
# ─────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="NoorShop Vapi voice agent manager")
    parser.add_argument("--lang", choices=["ar", "en"], help="Language to create (default: both)")
    parser.add_argument("--list", action="store_true", help="List existing Vapi assistants")
    parser.add_argument("--call", metavar="ASSISTANT_ID", help="Launch web call for an assistant")
    parser.add_argument("--recreate", action="store_true", help="Delete existing NoorShop assistants and recreate with current .env settings")
    args = parser.parse_args()

    if not VAPI_API_KEY:
        print("ERROR: VAPI_API_KEY not set in .env")
        sys.exit(1)

    # ── Recreate mode — delete existing NoorShop assistants first ──
    if args.recreate:
        print("Deleting existing NoorShop assistants...")
        existing = list_assistants()
        noorshop = [a for a in existing if a.get("metadata", {}).get("store") == "NoorShop"]
        if not noorshop:
            print("  No existing NoorShop assistants found.")
        for a in noorshop:
            try:
                delete_assistant(a["id"])
                print(f"  ✓ Deleted: {a['name']} ({a['id']})")
            except requests.HTTPError as e:
                print(f"  ✗ Could not delete {a['id']}: {e.response.status_code}")
        print()

    # ── List mode ──
    if args.list:
        assistants = list_assistants()
        noorshop = [a for a in assistants if a.get("metadata", {}).get("store") == "NoorShop"]
        if not noorshop:
            print("No NoorShop assistants found.")
            return
        print(f"\n{'Name':<12} {'ID':<40} {'Lang'}")
        print("─" * 60)
        for a in noorshop:
            print(f"{a['name']:<12} {a['id']:<40} {a.get('metadata', {}).get('lang', '?')}")
        return

    # ── Generate demo page for an existing assistant ──
    if args.call:
        pub_key = VAPI_PUBLIC_KEY or "SET_VAPI_PUBLIC_KEY_IN_ENV"
        html_path = generate_demo_html({"custom": {"name": "Assistant", "id": args.call}}, pub_key)
        print(f"\n  Demo page generated: {html_path}")
        print("  Open demo.html in your browser to start the voice call.")
        return

    # ── Create assistants ──
    if not TOOL_SERVER_URL:
        print(
            "\n⚠  TOOL_SERVER_URL not set in .env.\n"
            "   Tools (order tracking, search, etc.) will NOT work.\n"
            "   To enable tools:\n"
            "     1. Run: uvicorn tool_server:app --host 0.0.0.0 --port 8000\n"
            "     2. Run: ngrok http 8000\n"
            "     3. Add the ngrok URL to .env as TOOL_SERVER_URL=https://...\n"
            "   Continuing without tool server...\n"
        )

    langs = [args.lang] if args.lang else ["ar", "en"]

    created = {}
    for lang in langs:
        cfg = ASSISTANTS[lang]
        print(f"\nCreating assistant '{cfg['name']}' ({lang.upper()})...")
        try:
            asst = create_assistant(lang)
            created[lang] = asst
            print(f"  ✓ Created: {asst['name']} (ID: {asst['id']})")
        except requests.HTTPError as e:
            print(f"  ✗ Failed: {e.response.status_code} — {e.response.text}")
            continue

    if not created:
        print("\nNo assistants created.")
        return

    # ── Generate HTML demo ──
    asst_map = {lang: {"name": a["name"], "id": a["id"]} for lang, a in created.items()}
    pub_key = VAPI_PUBLIC_KEY or "SET_VAPI_PUBLIC_KEY_IN_ENV"
    # Use relative /api/chat so the HTML works both locally and on Vercel
    html_path = generate_demo_html(asst_map, pub_key, chat_api_url="")

    print("\n" + "─" * 60)

    if not VAPI_PUBLIC_KEY:
        print("\n  ⚠  VAPI_PUBLIC_KEY not set — the demo page won't connect.")
        print("     Get it from: https://dashboard.vapi.ai → Account → API Keys → Public Key")
        print("     Add to .env:  VAPI_PUBLIC_KEY=...")
    else:
        serve_demo(html_path)
        print("  (Press Ctrl+C to stop the server when done)\n")

    print("  Tip: Use --recreate to delete and recreate assistants with updated voice/settings.")
    if not TOOL_SERVER_URL:
        print("\n  Remember to set TOOL_SERVER_URL and re-run to enable tool use.")

    # Keep process alive so the HTTP server keeps running
    if VAPI_PUBLIC_KEY:
        try:
            import time
            while True:
                time.sleep(1)
        except KeyboardInterrupt:
            print("\n  Server stopped.")


if __name__ == "__main__":
    main()
