#!/usr/bin/env python3
"""
Tool definitions for NoorShop AI Support chatbot.

Two layers:
  1. TOOL_SCHEMAS — JSON schemas passed to Claude (tells it what tools exist)
  2. Python functions — execute the actual logic against mock_data

In production, the Python functions would call Shopify/Magento REST APIs,
Zendesk for escalation tickets, and an analytics DB for CSAT storage.
"""

from mock_data import PRODUCTS, ORDERS, RETURN_POLICY, PROMO_CODES, STORE_INFO

# ─────────────────────────────────────────────
# TOOL SCHEMAS (passed to Claude API)
# ─────────────────────────────────────────────

TOOL_SCHEMAS = [
    {
        "name": "search_products",
        "description": (
            "Search the product catalog by keyword, category, or product ID. "
            "Returns matching products with price, stock, and delivery info."
        ),
        "input_schema": {
            "type": "object",
            "properties": {
                "query": {
                    "type": "string",
                    "description": "Search keyword (e.g. 'headphones', 'Samsung', 'shoes')",
                },
                "category": {
                    "type": "string",
                    "description": "Optional filter: electronics, footwear, fashion, home_appliances, kitchen, smart_home, beauty",
                },
                "product_id": {
                    "type": "string",
                    "description": "Optional exact product ID (e.g. P001)",
                },
            },
            "required": [],
        },
    },
    {
        "name": "track_order",
        "description": (
            "Look up the status and details of a customer order by order ID. "
            "Returns order status, items, estimated delivery, and tracking number."
        ),
        "input_schema": {
            "type": "object",
            "properties": {
                "order_id": {
                    "type": "string",
                    "description": "Order ID (e.g. ORD-1042 or 1042)",
                },
                "email": {
                    "type": "string",
                    "description": "Customer email for verification (optional)",
                },
            },
            "required": ["order_id"],
        },
    },
    {
        "name": "initiate_return",
        "description": (
            "Check if an order is eligible for return and initiate the return process. "
            "Returns eligibility status, instructions, and refund timeline."
        ),
        "input_schema": {
            "type": "object",
            "properties": {
                "order_id": {
                    "type": "string",
                    "description": "Order ID to return",
                },
                "reason": {
                    "type": "string",
                    "description": "Reason for return: wrong_item, damaged, not_as_described, changed_mind, other",
                },
            },
            "required": ["order_id", "reason"],
        },
    },
    {
        "name": "check_stock_and_delivery",
        "description": (
            "Check real-time stock availability and estimated delivery date for a product "
            "in a specific city. Useful for pre-purchase questions."
        ),
        "input_schema": {
            "type": "object",
            "properties": {
                "product_id": {
                    "type": "string",
                    "description": "Product ID (e.g. P001)",
                },
                "city": {
                    "type": "string",
                    "description": "Delivery city (e.g. Riyadh, Jeddah, Dammam)",
                },
            },
            "required": ["product_id"],
        },
    },
    {
        "name": "apply_discount",
        "description": (
            "Validate a promo code or suggest an available discount for a given cart value. "
            "Use this proactively when a customer seems hesitant to purchase or mentions price concerns."
        ),
        "input_schema": {
            "type": "object",
            "properties": {
                "cart_value": {
                    "type": "number",
                    "description": "Total cart value in SAR",
                },
                "promo_code": {
                    "type": "string",
                    "description": "Optional promo code to validate",
                },
            },
            "required": ["cart_value"],
        },
    },
    {
        "name": "escalate_to_human",
        "description": (
            "Transfer the conversation to a human support agent. "
            "Use when: customer is frustrated, issue is complex/sensitive, "
            "customer explicitly requests a human, or the chatbot cannot resolve the issue."
        ),
        "input_schema": {
            "type": "object",
            "properties": {
                "reason": {
                    "type": "string",
                    "description": "Why escalation is needed",
                },
                "priority": {
                    "type": "string",
                    "enum": ["low", "normal", "high", "urgent"],
                    "description": "Ticket priority level",
                },
            },
            "required": ["reason"],
        },
    },
]


# ─────────────────────────────────────────────
# PYTHON TOOL IMPLEMENTATIONS
# ─────────────────────────────────────────────

def search_products(query: str = "", category: str = None, product_id: str = None) -> dict:
    """Search product catalog."""
    results = []

    if product_id:
        results = [p for p in PRODUCTS if p["id"].upper() == product_id.upper()]
    else:
        terms = [t for t in query.lower().split() if len(t) > 2]
        for p in PRODUCTS:
            searchable = " ".join([
                p["name"].lower(),
                p["description"].lower(),
                p["category"].lower(),
                p.get("name_ar", "").lower(),
            ])
            match = not terms or any(t in searchable for t in terms)
            if category:
                match = match and p["category"] == category
            if match:
                results.append(p)

    if not results:
        return {"found": False, "message": "No products found matching your search."}

    output = []
    for p in results[:5]:  # cap at 5 results
        item = {
            "id": p["id"],
            "name": p["name"],
            "name_ar": p.get("name_ar", ""),
            "price": f"{p['price']} {p['currency']}",
            "category": p["category"],
            "in_stock": p["stock"] > 0,
            "stock_qty": p["stock"],
            "description": p["description"],
        }
        if p["stock"] == 0 and "restock_date" in p:
            item["restock_date"] = p["restock_date"]
        output.append(item)

    return {"found": True, "count": len(output), "products": output}


def track_order(order_id: str, email: str = None) -> dict:
    """Look up order status."""
    # Normalize order ID
    normalized = order_id.upper().replace("ORD", "ORD-").replace("--", "-")
    if not normalized.startswith("ORD-"):
        normalized = f"ORD-{order_id}"

    order = next((o for o in ORDERS if o["id"] == normalized), None)

    if not order:
        return {
            "found": False,
            "message": f"No order found with ID {order_id}. Please double-check the order number.",
        }

    result = {
        "found": True,
        "order_id": order["id"],
        "status": order["status"],
        "status_ar": order.get("status_ar", ""),
        "items": order["items"],
        "total": f"{order['total']} {order['currency']}",
        "payment_method": order["payment_method"],
        "order_date": order["order_date"],
        "delivery_city": order["delivery_city"],
    }

    if order["status"] == "delivered":
        result["delivered_date"] = order.get("delivered_date")
        result["return_eligible"] = order.get("return_window_days", 0) > 0
        result["return_deadline"] = order.get("return_deadline")
    elif order["status"] in ("shipped", "out_for_delivery"):
        result["estimated_delivery"] = order.get("estimated_delivery")
        result["tracking_number"] = order.get("tracking_number")
    elif order["status"] == "cancelled":
        result["refund_status"] = order.get("refund_status")
        result["refund_date"] = order.get("refund_date")
    else:
        result["estimated_delivery"] = order.get("estimated_delivery")

    return result


def initiate_return(order_id: str, reason: str) -> dict:
    """Check return eligibility and initiate return."""
    order = track_order(order_id)

    if not order["found"]:
        return order

    if order["status"] not in ("delivered",):
        return {
            "eligible": False,
            "reason": f"Order is currently '{order['status']}'. Returns can only be initiated after delivery.",
        }

    # Check non-returnable items
    raw_order = next((o for o in ORDERS if o["id"] == order["order_id"]), None)
    non_returnable = []
    for item in raw_order.get("items", []):
        product = next((p for p in PRODUCTS if p["id"] == item["product_id"]), None)
        if product and not product.get("return_eligible", True):
            non_returnable.append(item["name"])

    if non_returnable:
        return {
            "eligible": False,
            "reason": f"The following item(s) are non-returnable: {', '.join(non_returnable)}. "
                      f"Cosmetics and personal care products cannot be returned.",
        }

    if raw_order.get("return_window_days", 0) == 0:
        return {"eligible": False, "reason": "This order is not eligible for returns."}

    return {
        "eligible": True,
        "order_id": order["order_id"],
        "return_reason": reason,
        "instructions": RETURN_POLICY["process"],
        "conditions": RETURN_POLICY["conditions"],
        "refund_timeline": RETURN_POLICY["refund_timeline"].get(
            raw_order.get("payment_method", "credit_card"),
            "3-5 business days",
        ),
        "next_step": "A return label will be emailed to you within 30 minutes. "
                     "Drop the package at any SMSA or Aramex location.",
    }


def check_stock_and_delivery(product_id: str, city: str = "Riyadh") -> dict:
    """Check stock and delivery estimate for a product."""
    product = next((p for p in PRODUCTS if p["id"].upper() == product_id.upper()), None)

    if not product:
        return {"found": False, "message": f"Product {product_id} not found."}

    city_key = city.capitalize() if city.capitalize() in product["delivery_days"] else "other"
    delivery_days = product["delivery_days"].get(city_key, product["delivery_days"]["other"])

    result = {
        "found": True,
        "product_id": product["id"],
        "name": product["name"],
        "price": f"{product['price']} {product['currency']}",
        "in_stock": product["stock"] > 0,
        "stock_qty": product["stock"],
        "city": city,
        "estimated_delivery_days": delivery_days,
        "shipping_fee": (
            "Free" if product["price"] >= STORE_INFO["free_shipping_threshold"]
            else f"{STORE_INFO['shipping_fee']} SAR"
        ),
    }

    if product["stock"] == 0:
        result["restock_date"] = product.get("restock_date", "Unknown")
        result["message"] = "Currently out of stock."

    return result


def apply_discount(cart_value: float, promo_code: str = None) -> dict:
    """Validate promo code or suggest best available discount."""
    if promo_code:
        code = next(
            (c for c in PROMO_CODES if c["code"].upper() == promo_code.upper() and c["active"]),
            None,
        )
        if not code:
            return {"valid": False, "message": f"Promo code '{promo_code}' is invalid or expired."}

        if cart_value < code["min_order"]:
            return {
                "valid": False,
                "message": f"Minimum order of {code['min_order']} SAR required for this code. "
                           f"Your cart is {cart_value} SAR.",
            }

        if code["discount_type"] == "percentage":
            savings = round(cart_value * code["discount_value"] / 100, 2)
        elif code["discount_type"] == "fixed":
            savings = code["discount_value"]
        else:
            savings = 0

        return {
            "valid": True,
            "code": code["code"],
            "description": code["description"],
            "savings": f"{savings} SAR" if savings else "Free shipping",
            "new_total": f"{max(0, cart_value - savings):.0f} SAR",
        }

    # Suggest best discount for cart value
    eligible = [c for c in PROMO_CODES if c["active"] and cart_value >= c["min_order"]]
    if eligible:
        best = eligible[0]
        return {
            "suggestion": True,
            "code": best["code"],
            "description": best["description"],
            "message": f"You qualify for promo code '{best['code']}' — {best['description']}!",
        }

    return {
        "suggestion": True,
        "message": (
            f"Orders over {STORE_INFO['free_shipping_threshold']} SAR get free shipping. "
            f"You're {max(0, STORE_INFO['free_shipping_threshold'] - cart_value):.0f} SAR away!"
        ),
    }


def escalate_to_human(reason: str, priority: str = "normal") -> dict:
    """Escalate conversation to a human agent."""
    ticket_id = f"TKT-{hash(reason) % 100000:05d}"
    wait_times = {"low": "2–4 hours", "normal": "30–60 minutes", "high": "15–20 minutes", "urgent": "< 5 minutes"}

    return {
        "escalated": True,
        "ticket_id": ticket_id,
        "priority": priority,
        "estimated_wait": wait_times.get(priority, "30–60 minutes"),
        "contact_options": {
            "whatsapp": STORE_INFO["whatsapp"],
            "phone": STORE_INFO["support_phone"],
            "email": STORE_INFO["support_email"],
        },
        "message": (
            f"I've created a support ticket ({ticket_id}) for you. "
            f"A human agent will reach out within {wait_times.get(priority, '30–60 minutes')}."
        ),
    }


# ─────────────────────────────────────────────
# DISPATCHER — routes tool name → function
# ─────────────────────────────────────────────

def execute_tool(tool_name: str, tool_input: dict) -> dict:
    """Route a tool call from Claude to the correct Python function."""
    dispatch = {
        "search_products": search_products,
        "track_order": track_order,
        "initiate_return": initiate_return,
        "check_stock_and_delivery": check_stock_and_delivery,
        "apply_discount": apply_discount,
        "escalate_to_human": escalate_to_human,
    }
    fn = dispatch.get(tool_name)
    if not fn:
        return {"error": f"Unknown tool: {tool_name}"}
    return fn(**tool_input)
