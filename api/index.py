#!/usr/bin/env python3
"""
NoorShop API — Vercel-compatible FastAPI app.

Routes:
  GET  /                → demo page (index.html)
  GET  /vapi.bundle.js  → Vapi SDK bundle
  POST /api/tools       → Vapi tool call webhook
  POST /api/chat        → In-page chat (stateless — history sent by browser)
  POST /api/whatsapp    → Twilio WhatsApp webhook
"""

import io
import json
import logging
import os
import sys

# Ensure local imports work both on Vercel and locally
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import anthropic
import openai
import requests as http_requests
from dotenv import load_dotenv
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse, Response
from fastapi.staticfiles import StaticFiles

from tools import TOOL_SCHEMAS, execute_tool

# Load .env locally; on Vercel env vars are injected directly
load_dotenv(dotenv_path=os.path.join(os.path.dirname(os.path.abspath(__file__)), "../../../../.env"))
load_dotenv()  # also try local .env

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
log = logging.getLogger(__name__)

STATIC_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "static")

_claude = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY", ""))
_openai_client = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY", ""))

TWILIO_ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID", "")
TWILIO_AUTH_TOKEN  = os.getenv("TWILIO_AUTH_TOKEN", "")

SYSTEM_PROMPT = """You are a helpful customer support assistant for NoorShop, a Saudi e-commerce store.
You support both Arabic and English — detect the customer's language and reply in the same language.
Keep replies concise and conversational — this is a chat interface.
Use short paragraphs. Avoid excessive bullet lists. Use emojis sparingly.
You have tools to search products, track orders, handle returns, check stock, apply discounts, and escalate to a human agent.

Identity verification rule: before looking up any order, return, or account-specific information, collect the following:
- If the customer has their order ID: ask for the order ID + their email address or phone number on file.
- If the customer does NOT have their order ID: ask for their full name and email address to locate the account.
Do not call track_order, initiate_return, or any account tool until identity is confirmed."""

# ─────────────────────────────────────────────
# APP
# ─────────────────────────────────────────────

app = FastAPI(title="NoorShop API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# ─────────────────────────────────────────────
# CLAUDE HELPER
# ─────────────────────────────────────────────

def _run_claude(messages: list) -> tuple[str, list]:
    """
    Run Claude with full tool-use loop.
    messages: list of {"role": ..., "content": ...} dicts (JSON-safe)
    Returns: (reply_text, updated_messages)
    """
    history = list(messages)

    while True:
        resp = _claude.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=1024,
            system=SYSTEM_PROMPT,
            tools=TOOL_SCHEMAS,
            messages=history,
        )

        # Convert content blocks to dicts for JSON-serializability
        assistant_content = [
            b.model_dump() if hasattr(b, "model_dump") else b
            for b in resp.content
        ]
        history.append({"role": "assistant", "content": assistant_content})

        if resp.stop_reason == "end_turn":
            text = " ".join(
                b.text for b in resp.content if hasattr(b, "text")
            ).strip()
            return text or "Sorry, I didn't understand. Can you rephrase?", history

        if resp.stop_reason == "tool_use":
            tool_results = []
            for b in resp.content:
                if b.type != "tool_use":
                    continue
                log.info("Tool call: %s(%s)", b.name, b.input)
                try:
                    result = execute_tool(b.name, b.input)
                except Exception as exc:
                    result = {"error": str(exc)}
                tool_results.append({
                    "type": "tool_result",
                    "tool_use_id": b.id,
                    "content": json.dumps(result, ensure_ascii=False),
                })
            history.append({"role": "user", "content": tool_results})
            continue

        return "Something went wrong. Please try again.", history


# ─────────────────────────────────────────────
# STATIC FILES
# ─────────────────────────────────────────────

@app.get("/")
async def index():
    return FileResponse(os.path.join(STATIC_DIR, "index.html"))


@app.get("/vapi.bundle.js")
async def vapi_bundle():
    return FileResponse(os.path.join(STATIC_DIR, "vapi.bundle.js"))


@app.get("/health")
async def health():
    return {"status": "ok"}


# ─────────────────────────────────────────────
# VAPI TOOL CALLS
# ─────────────────────────────────────────────

@app.post("/api/tools")
async def handle_tool_calls(request: Request):
    body = await request.json()
    tool_calls = body.get("message", {}).get("toolCallList", [])

    if not tool_calls:
        return JSONResponse({"results": []})

    results = []
    for call in tool_calls:
        call_id  = call.get("id", "")
        fn       = call.get("function", {})
        name     = fn.get("name", "")
        raw_args = fn.get("arguments", "{}")
        try:
            tool_input = json.loads(raw_args) if isinstance(raw_args, str) else raw_args
        except json.JSONDecodeError:
            tool_input = {}
        try:
            result_str = json.dumps(execute_tool(name, tool_input), ensure_ascii=False)
        except Exception as exc:
            result_str = json.dumps({"error": str(exc)})
        results.append({"toolCallId": call_id, "result": result_str})

    return JSONResponse({"results": results})


# ─────────────────────────────────────────────
# IN-PAGE CHAT  (stateless — history lives in browser localStorage)
# ─────────────────────────────────────────────

@app.post("/api/chat")
async def chat_endpoint(request: Request):
    body    = await request.json()
    message = body.get("message", "").strip()
    history = body.get("messages", [])   # Full conversation history from browser

    if not message or message == "__init__":
        return JSONResponse({
            "reply": "Hi! 👋 I'm your NoorShop support assistant. I can help you track orders, find products, handle returns, and more.\n\nمرحباً! أنا مساعد نورشوب. كيف يمكنني مساعدتك اليوم؟",
            "messages": [],
        })

    history.append({"role": "user", "content": message})

    try:
        reply, updated = _run_claude(history)
    except Exception as exc:
        log.error("Chat error: %s", exc)
        return JSONResponse({
            "reply": "Sorry, something went wrong. Please try again.",
            "messages": history,
        })

    # Cap history to avoid token overflow
    if len(updated) > 40:
        updated = updated[-20:]

    return JSONResponse({"reply": reply, "messages": updated})


# ─────────────────────────────────────────────
# WHATSAPP WEBHOOK (Twilio)
# ─────────────────────────────────────────────

def _transcribe_voice_note(media_url: str) -> str:
    resp = http_requests.get(
        media_url,
        auth=(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN),
        timeout=30,
    )
    resp.raise_for_status()
    buf = io.BytesIO(resp.content)
    buf.name = "voice.ogg"
    return _openai_client.audio.transcriptions.create(model="whisper-1", file=buf).text


@app.get("/api/whatsapp")
async def whatsapp_ping():
    return {"status": "whatsapp webhook is live"}


@app.post("/api/whatsapp")
async def whatsapp_webhook(request: Request):
    form       = await request.form()
    user_text  = form.get("Body", "").strip()
    from_num   = form.get("From", "unknown")
    num_media  = int(form.get("NumMedia", "0"))

    log.info("WhatsApp from %s: %r (media=%d)", from_num, user_text, num_media)

    if num_media > 0:
        media_url  = form.get("MediaUrl0", "")
        media_type = form.get("MediaContentType0", "")
        if "audio" in media_type and media_url:
            try:
                user_text = _transcribe_voice_note(media_url)
            except Exception as exc:
                log.error("Transcription error: %s", exc)
                twiml = '<?xml version="1.0"?><Response><Message>Sorry, I couldn\'t process the voice note. Please send text.</Message></Response>'
                return Response(content=twiml, media_type="application/xml")

    if not user_text:
        reply = "Hi! I'm NoorShop's support assistant. How can I help you? 😊"
    else:
        try:
            reply, _ = _run_claude([{"role": "user", "content": user_text}])
        except Exception as exc:
            log.error("Claude error: %s", exc)
            reply = "Sorry, something went wrong. Please try again in a moment."

    safe = reply.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    twiml = f'<?xml version="1.0" encoding="UTF-8"?><Response><Message>{safe}</Message></Response>'
    log.info("WhatsApp reply: %s", reply[:80])
    return Response(content=twiml, media_type="application/xml")
