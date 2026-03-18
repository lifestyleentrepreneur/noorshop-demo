# NoorShop AI Support — Chatbot Prototype

> AI-powered customer support chatbot for a KSA e-commerce store.
> Built as part of the LeanScale AI-First Product Engineer case study.

---

## Prerequisites

- Python 3.9+
- `anthropic` package
- `rich` package (optional, for styled terminal UI)
- `python-dotenv` package
- `ANTHROPIC_API_KEY` set in `.env` (workspace root)

```bash
pip install anthropic rich python-dotenv
```

---

## Usage

```bash
# Interactive mode (auto-detects Arabic or English)
python3 chatbot.py

# Force Arabic responses
python3 chatbot.py --lang ar

# Run scripted English demo (6 turns — covers all core features)
python3 chatbot.py --demo

# Run scripted Arabic demo
python3 chatbot.py --demo-ar
```

---

## What it does

### Core capabilities (minimum requirements)
| Feature | Status |
|---|---|
| Product information queries | ✅ |
| Order tracking | ✅ |
| Returns & refunds | ✅ |

### Beyond-minimum features
| Feature | Status |
|---|---|
| Bilingual Arabic / English (auto-detect) | ✅ |
| Real-time stock + delivery ETA by city | ✅ |
| Proactive discount / promo code offer | ✅ |
| Human escalation with ticket ID + wait time | ✅ |
| CSAT collection at end of session | ✅ |
| Frustration signal detection → escalation | ✅ |
| Multi-turn conversation memory | ✅ |

---

## Architecture

```
User Input
    ↓
[Language Detection]  ←  Arabic or English auto-detect
    ↓
[Claude claude-sonnet-4-6 with Tool Use]
    ↓
[Tool Router]
  ├── search_products()
  ├── track_order()
  ├── initiate_return()
  ├── check_stock_and_delivery()   ← beyond minimum
  ├── apply_discount()             ← beyond minimum
  └── escalate_to_human()         ← beyond minimum
    ↓
[Response Generator]  ←  Claude composes bilingual response
    ↓
[CSAT Collector]      ←  end of session
```

---

---

## Voice Agent (Vapi.ai)

Two named voice assistants that share the same tool logic as the chatbot:
- **Noor** — Arabic (Deepgram Arabic STT + ElevenLabs multilingual TTS)
- **Layla** — English (Deepgram English STT + ElevenLabs multilingual TTS)

### Setup

```bash
pip install fastapi uvicorn requests python-dotenv

# Set in .env (workspace root):
# VAPI_API_KEY=...
# ELEVENLABS_VOICE_ID_AR=...
# ELEVENLABS_VOICE_ID_EN=...
# TOOL_SERVER_URL=https://<ngrok-id>.ngrok.io  ← set after step 2
```

### Run

```bash
# Terminal 1 — start tool server
uvicorn tool_server:app --host 0.0.0.0 --port 8000

# Terminal 2 — expose tool server publicly
ngrok http 8000
# Copy the https URL → add to .env as TOOL_SERVER_URL

# Terminal 3 — create assistants + get web call URLs
python3 voice_agent.py              # both Noor and Layla
python3 voice_agent.py --lang ar    # Noor only
python3 voice_agent.py --lang en    # Layla only
```

Open the printed web call URL in any browser to start the voice conversation.

### Other commands

```bash
python3 voice_agent.py --list               # list existing NoorShop assistants
python3 voice_agent.py --call ASSISTANT_ID  # launch new web call for existing assistant
```

---

## Files

```
03_chatbot/
├── chatbot.py        Main CLI chatbot loop
├── tools.py          Tool schemas (Claude) + Python implementations
├── mock_data.py      Mock product catalog, orders, policies, promo codes
├── tool_server.py    FastAPI webhook server for Vapi tool calls
├── voice_agent.py    Creates Vapi assistants (Noor/Layla) + web call URLs
└── README.md         This file
```

---

## Mock data overview

- **10 products** across electronics, fashion, footwear, home, beauty
- **6 orders** in various states: processing, shipped, out for delivery, delivered, cancelled
- **Return policy** with 14-day window, refund timelines per payment method
- **3 promo codes** (SAVE10, WELCOME50, FREESHIP)

---

## Integration path (production)

| Mock layer | Production replacement |
|---|---|
| `mock_data.py` | Shopify REST API / Magento GraphQL |
| `escalate_to_human()` | Zendesk / Freshdesk ticket API |
| CSAT storage | Analytics DB + Metabase dashboard |
| Channels | WhatsApp Business API (primary in KSA) |
