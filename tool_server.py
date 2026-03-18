#!/usr/bin/env python3
"""
tool_server.py — FastAPI server handling:
  POST /tools     — Vapi.ai tool call webhooks
  POST /whatsapp  — Twilio WhatsApp sandbox webhook

Run:
    uvicorn tool_server:app --host 0.0.0.0 --port 8000

Expose publicly:
    ngrok http 8000
"""

import io
import json
import logging
import os
from collections import defaultdict

import anthropic
import openai
import requests as http_requests
from dotenv import load_dotenv
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, Response

from tools import TOOL_SCHEMAS, execute_tool

# Load .env from workspace root (4 levels up from this file)
load_dotenv(dotenv_path=os.path.join(os.path.dirname(os.path.abspath(__file__)), "../../../../.env"))

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
log = logging.getLogger(__name__)

app = FastAPI(title="NoorShop Server", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── WhatsApp session storage (in-memory, per phone number) ──────────────────
_sessions: dict[str, list] = defaultdict(list)  # phone → messages[]

WHATSAPP_SYSTEM = """You are a helpful customer support assistant for NoorShop, a Saudi e-commerce store.
You support both Arabic and English — detect the customer's language and reply in the same language.
Keep replies concise and conversational — this is a WhatsApp chat, not an email.
Use short paragraphs. Avoid long bullet lists. Use emojis sparingly.
You have tools to search products, track orders, handle returns, check stock, apply discounts, and escalate to a human agent."""

_claude = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY", ""))
_openai = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY", ""))
TWILIO_ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID", "")
TWILIO_AUTH_TOKEN  = os.getenv("TWILIO_AUTH_TOKEN", "")


@app.get("/health")
async def health():
    return {"status": "ok", "service": "noorshop-tool-server"}


@app.post("/tools")
async def handle_tool_calls(request: Request):
    """
    Vapi webhook endpoint for tool calls.

    Vapi payload shape:
    {
      "message": {
        "type": "tool-calls",
        "toolCallList": [
          {
            "id": "call_xxx",
            "type": "function",
            "function": {
              "name": "track_order",
              "arguments": "{\"order_id\": \"ORD-1042\"}"
            }
          }
        ]
      }
    }

    Expected response:
    {
      "results": [
        {
          "toolCallId": "call_xxx",
          "result": "<json string or plain text>"
        }
      ]
    }
    """
    body = await request.json()
    log.info("Incoming Vapi payload: %s", json.dumps(body, ensure_ascii=False))

    message = body.get("message", {})
    tool_calls = message.get("toolCallList", [])

    if not tool_calls:
        return JSONResponse({"results": []})

    results = []
    for call in tool_calls:
        call_id = call.get("id", "")
        fn = call.get("function", {})
        tool_name = fn.get("name", "")
        raw_args = fn.get("arguments", "{}")

        try:
            tool_input = json.loads(raw_args) if isinstance(raw_args, str) else raw_args
        except json.JSONDecodeError:
            tool_input = {}

        log.info("Executing tool '%s' with input: %s", tool_name, tool_input)

        try:
            tool_result = execute_tool(tool_name, tool_input)
            result_str = json.dumps(tool_result, ensure_ascii=False)
        except Exception as exc:
            log.error("Tool '%s' raised: %s", tool_name, exc)
            result_str = json.dumps({"error": str(exc)})

        log.info("Tool '%s' result: %s", tool_name, result_str)
        results.append({"toolCallId": call_id, "result": result_str})

    return JSONResponse({"results": results})


# ─────────────────────────────────────────────
# WHATSAPP WEBHOOK (Twilio sandbox)
# ─────────────────────────────────────────────

def _run_claude(phone: str, user_text: str) -> str:
    """Run Claude with full tool-use loop. Returns final text reply."""
    history = _sessions[phone]
    history.append({"role": "user", "content": user_text})

    while True:
        resp = _claude.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=1024,
            system=WHATSAPP_SYSTEM,
            tools=TOOL_SCHEMAS,
            messages=history,
        )

        # Append assistant turn
        history.append({"role": "assistant", "content": resp.content})

        if resp.stop_reason == "end_turn":
            # Extract text from response
            text = " ".join(
                block.text for block in resp.content
                if hasattr(block, "text")
            ).strip()
            return text or "Sorry, I didn't understand that. Can you rephrase?"

        if resp.stop_reason == "tool_use":
            # Execute each tool call and collect results
            tool_results = []
            for block in resp.content:
                if block.type != "tool_use":
                    continue
                log.info("WhatsApp tool call: %s(%s)", block.name, block.input)
                try:
                    result = execute_tool(block.name, block.input)
                except Exception as exc:
                    result = {"error": str(exc)}
                tool_results.append({
                    "type": "tool_result",
                    "tool_use_id": block.id,
                    "content": json.dumps(result, ensure_ascii=False),
                })

            history.append({"role": "user", "content": tool_results})
            continue

        # Unexpected stop reason
        return "Something went wrong. Please try again."


def _transcribe_voice_note(media_url: str) -> str:
    """Download Twilio voice note and transcribe with Whisper."""
    log.info("Downloading voice note: %s", media_url)
    audio_resp = http_requests.get(
        media_url,
        auth=(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN),
        timeout=30,
    )
    audio_resp.raise_for_status()

    # Whisper needs a file-like object with a name hint for format detection
    audio_file = io.BytesIO(audio_resp.content)
    audio_file.name = "voice.ogg"

    result = _openai.audio.transcriptions.create(
        model="whisper-1",
        file=audio_file,
    )
    log.info("Transcribed voice note: %s", result.text)
    return result.text


@app.post("/whatsapp")
async def whatsapp_webhook(request: Request):
    """
    Twilio WhatsApp sandbox webhook.
    Handles both text messages and voice notes.
    """
    form = await request.form()
    user_text = form.get("Body", "").strip()
    from_number = form.get("From", "unknown")
    num_media = int(form.get("NumMedia", "0"))

    log.info("WhatsApp from %s | text=%r | media=%d", from_number, user_text, num_media)

    # Handle voice note (or any audio media)
    if num_media > 0:
        media_url          = form.get("MediaUrl0", "")
        media_content_type = form.get("MediaContentType0", "")
        if "audio" in media_content_type and media_url:
            try:
                user_text = _transcribe_voice_note(media_url)
                log.info("Voice note transcribed to: %s", user_text)
            except Exception as exc:
                log.error("Transcription failed: %s", exc)
                reply = "Sorry, I couldn't process your voice note. Please send a text message instead."
                twiml = f'<?xml version="1.0" encoding="UTF-8"?><Response><Message>{reply}</Message></Response>'
                return Response(content=twiml, media_type="application/xml")

    if not user_text:
        reply = "Hi! I'm NoorShop's support assistant. How can I help you? 😊"
    else:
        try:
            reply = _run_claude(from_number, user_text)
        except Exception as exc:
            log.error("Claude error: %s", exc)
            reply = "Sorry, something went wrong on our end. Please try again in a moment."

    # Keep session to last 20 turns to avoid token overflow
    if len(_sessions[from_number]) > 40:
        _sessions[from_number] = _sessions[from_number][-20:]

    twiml = f"""<?xml version="1.0" encoding="UTF-8"?>
<Response><Message>{reply}</Message></Response>"""

    log.info("WhatsApp reply to %s: %s", from_number, reply[:100])
    return Response(content=twiml, media_type="application/xml")


# ─────────────────────────────────────────────
# IN-PAGE CHAT ENDPOINT
# ─────────────────────────────────────────────

@app.post("/chat")
async def chat_endpoint(request: Request):
    """
    In-page chat widget endpoint.
    Receives JSON: {"session_id": "...", "message": "..."}
    Returns JSON: {"reply": "..."}
    """
    body = await request.json()
    session_id = f"web-{body.get('session_id', 'default')}"
    message = body.get("message", "").strip()

    if not message or message == "__init__":
        return JSONResponse({"reply": "Hi! 👋 I'm your NoorShop support assistant. I can help you track orders, find products, handle returns, and more. How can I help you today?\n\nمرحباً! أنا مساعد نورشوب. كيف يمكنني مساعدتك اليوم؟"})

    log.info("Web chat [%s]: %s", session_id, message)

    try:
        reply = _run_claude(session_id, message)
    except Exception as exc:
        log.error("Chat error: %s", exc)
        reply = "Sorry, something went wrong. Please try again."

    if len(_sessions[session_id]) > 40:
        _sessions[session_id] = _sessions[session_id][-20:]

    log.info("Web chat reply [%s]: %s", session_id, reply[:100])
    return JSONResponse({"reply": reply})
