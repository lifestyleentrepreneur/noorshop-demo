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
- **Noor** — English male voice (ElevenLabs multilingual TTS + Deepgram STT)
- **Layla** — Arabic female voice, Gulf-friendly tone (ElevenLabs multilingual TTS + Deepgram STT)

### Live demo

The full multi-channel demo (voice + chat + WhatsApp) is deployed at:

**https://noorshop-demo.vercel.app**

No setup required. Open the URL and interact directly.

### Local setup (optional — for WhatsApp webhook testing)

```bash
pip install fastapi uvicorn requests python-dotenv

# Terminal 1 — start API locally
cd api
uvicorn index:app --host 0.0.0.0 --port 8000 --reload

# Terminal 2 — expose via ngrok (permanent static domain)
ngrok http --domain=pedagoguish-denticulately-darcey.ngrok-free.dev 8000
```

Set Twilio sandbox webhook to: `https://pedagoguish-denticulately-darcey.ngrok-free.dev/api/whatsapp`

### Recreate voice assistants

```bash
python3 voice_agent.py --recreate   # delete + recreate Noor and Layla
python3 voice_agent.py --list       # list existing NoorShop assistants
```

---

## Files

```
03_chatbot/
├── api/
│   ├── index.py          FastAPI app (chat, WhatsApp, Vapi tools) — Vercel entry point
│   ├── tools.py          Tool schemas + Python implementations
│   ├── mock_data.py      Mock product catalog, orders, policies, promo codes
│   └── static/
│       ├── index.html    Demo page (4 channels)
│       └── vapi.bundle.js Vapi Web SDK (bundled)
├── chatbot.py            CLI prototype (original)
├── voice_agent.py        Creates/recreates Vapi assistants
├── vercel.json           Vercel deployment config
├── requirements.txt      Python dependencies
└── README.md             This file
```

---

## Mock data overview

- **18 products** across electronics, fashion, footwear, home appliances, kitchen, smart home, beauty
- **10 orders** in various states: processing, shipped, out for delivery, delivered, cancelled
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
