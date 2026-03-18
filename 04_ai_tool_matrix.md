# AI Tool Selection Matrix
**Author:** Farel Vignon Honvoh | LeanScale Case Study
**Date:** March 2026

> For each major activity, 3 AI-driven options were evaluated. The chosen tool is marked ✅.
> Justifications explain both why the tool was chosen and why the others were not.

---

## 1. Requirements Gathering & User Story Identification

| # | Tool / Model | Type |
|---|---|---|
| A | **Claude Opus 4.6** (Anthropic) ✅ | LLM — conversational requirements elicitation |
| B | GPT-4o (OpenAI) | LLM — general-purpose assistant |
| C | Gemini 1.5 Pro (Google) | LLM — long-context document analysis |

**Why Claude Opus 4.6:**
Claude Opus excels at structured reasoning and asking clarifying questions — exactly what requirements gathering requires. When given an ambiguous brief like this case study, Opus proactively identifies what's missing, proposes alternatives, and structures requirements into user stories with acceptance criteria. Its extended thinking capability makes it particularly strong for mapping business problems to technical requirements. For this engagement, Opus was used to generate the initial questions list in the Problem Definition document and to identify the "invisible" cart abandonment problem that wasn't stated in the brief.

**Why not GPT-4o:**
GPT-4o is highly capable but tends to answer what's asked rather than challenge the framing. For requirements work, you want a model that pushes back — Opus does this more reliably. GPT-4o also lacks the extended thinking mode that helps with multi-layered business analysis.

**Why not Gemini 1.5 Pro:**
Gemini's strength is long-context document analysis (1M token context window). That's valuable for reviewing large codebases or docs, but requirements gathering is primarily a conversational, iterative task. Gemini's UX tooling for interactive back-and-forth is weaker than Claude's for this use case.

---

## 2. Test Case Development

| # | Tool / Model | Type |
|---|---|---|
| A | **Claude claude-sonnet-4-6** (Anthropic) ✅ | LLM — test case generation from user stories |
| B | GitHub Copilot (Microsoft / OpenAI) | IDE-integrated code suggestion |
| C | Gemini Code Assist (Google) | IDE-integrated + workspace-aware |

**Why Claude claude-sonnet-4-6:**
Given the tool schemas and mock data defined in this project, Claude claude-sonnet-4-6 can generate comprehensive test cases by reasoning about edge cases from the function signatures and business logic — not just happy paths. For example: What happens if an order ID is formatted wrong? What if the product is out of stock but the customer is in a different city? Claude understands business context and generates tests that reflect real customer behavior, not just unit boundaries.

**Why not GitHub Copilot:**
Copilot is excellent at inline code suggestions and boilerplate but generates test cases by pattern-matching the code it sees — it tends to produce shallow tests that mirror the implementation rather than challenge it. It also lacks business context awareness.

**Why not Gemini Code Assist:**
Strong for workspace-aware code completion, but test case generation quality is below Claude claude-sonnet-4-6 for complex business logic. Its integration with the broader test reasoning (e.g., "what edge cases exist for a COD refund with a partial return?") is weaker.

---

## 3. Code Development IDE / Environment

| # | Tool / Environment | Type |
|---|---|---|
| A | **Claude Code** (Anthropic CLI) ✅ | Agentic coding — multi-file, autonomous |
| B | Cursor (with GPT-4o / Claude backend) | AI-native IDE |
| C | Windsurf (Codeium) | AI-native IDE |

**Why Claude Code:**
Claude Code was used to build this entire submission. Its key advantage over IDE-based tools is that it operates at the **project level**, not the file level. It can plan across multiple files, execute commands, verify output, and self-correct — all in a single workflow. For this case study, that meant building `mock_data.py`, `tools.py`, and `chatbot.py` as a coherent, interdependent system rather than file-by-file. It also ran the demo, identified the search bug, fixed it, and re-verified — without needing a manual loop. The Claude Agent SDK approach reflects exactly the kind of AI-native product engineering mindset LeanScale is looking for.

**Why not Cursor:**
Cursor is excellent for developers who want AI assistance within a familiar IDE. Its tab-completion and inline edits are fast. However, for multi-file agentic tasks (build → run → debug → iterate), Claude Code's CLI loop is faster and requires less manual orchestration. Cursor works best for developers who want to stay in control; Claude Code works best for product engineers who want to delegate execution.

**Why not Windsurf:**
Windsurf (Codeium) offers competitive autocomplete and some agentic capabilities, but its model quality for complex reasoning tasks lags behind Claude-powered alternatives. For a case study that requires both code quality and business reasoning (e.g., designing the cart abandonment recovery flow), model quality matters more than IDE ergonomics.

---

## 4. Code Review

| # | Tool | Type |
|---|---|---|
| A | **Claude Code** (Anthropic CLI) ✅ | Agentic review — reads full project context |
| B | CodeRabbit | GitHub PR bot — automated review comments |
| C | SonarQube + GPT-4o | Static analysis + LLM explanation |

**Why Claude Code:**
Code review benefits from understanding *intent* — not just syntax. Claude Code can review `tools.py` knowing that it's part of a chatbot serving KSA e-commerce customers, and flag issues like "the search function won't match 'Sony headphones' as a two-word query" (an issue that was actually caught and fixed during this build). Static tools catch bugs; context-aware tools catch design flaws.

**Why not CodeRabbit:**
CodeRabbit is excellent for PR review workflows on GitHub — it auto-comments on diffs, checks for common issues, and integrates into CI. But it reviews code in isolation from business logic. It would not have caught the search keyword-splitting issue because it doesn't know the expected user behavior.

**Why not SonarQube + GPT-4o:**
SonarQube is industry-standard for security and code quality scanning — it belongs in the CI pipeline for production. GPT-4o as a reviewer is capable but lacks Claude's ability to reason about business context in code. This combination is better for compliance/security review than for product logic review.

---

## 5. Manual Testing / Automated Testing

| # | Tool | Type |
|---|---|---|
| A | **Pytest + Claude claude-sonnet-4-6** ✅ | Python native test framework + AI-generated cases |
| B | Playwright + AI | Browser automation + LLM-driven test generation |
| C | Jest + GitHub Copilot | JavaScript test framework + IDE autocomplete |

**Why Pytest + Claude claude-sonnet-4-6:**
The chatbot prototype is Python-native. Pytest is the natural choice — zero configuration overhead, excellent fixture support, and readable output. Claude claude-sonnet-4-6 was used to generate the edge case test list (e.g., invalid order IDs, out-of-stock products, non-returnable items, frustrated-user escalation triggers). This combination means tests are generated fast, cover business edge cases, and stay in the same language and runtime as the production code.

For integration tests, Claude claude-sonnet-4-6 was prompted with: *"Given these tool definitions and mock data, what are the 10 most important edge cases to test?"* — producing a comprehensive checklist in under 30 seconds.

**Why not Playwright + AI:**
Playwright is purpose-built for browser automation testing. The prototype is a CLI tool with no browser interface. If the production version ships as a web chat widget, Playwright would become the right choice for end-to-end testing. For the current POC scope, it's the wrong tool.

**Why not Jest + GitHub Copilot:**
Jest is a JavaScript testing framework. The entire codebase is Python. Using Jest would require either rewriting the prototype in JavaScript or maintaining a separate test suite in a different language — both are unnecessary complexity for a POC.

---

## Summary Table

| Activity | Chosen | Runner-up | Rejected |
|---|---|---|---|
| Requirements gathering | Claude Opus 4.6 | GPT-4o | Gemini 1.5 Pro |
| User story identification | Claude Opus 4.6 | GPT-4o | Gemini 1.5 Pro |
| Test case development | Claude claude-sonnet-4-6 | Gemini Code Assist | GitHub Copilot |
| Code development | Claude Code CLI | Cursor | Windsurf |
| Code review | Claude Code CLI | CodeRabbit | SonarQube + GPT-4o |
| Testing | Pytest + Claude claude-sonnet-4-6 | Playwright + AI | Jest + Copilot |

**Pattern:** The entire toolchain is Claude-native. This was a deliberate choice — not because other tools are inferior in all contexts, but because coherence across the workflow reduces context-switching and maximizes the AI's ability to reason about the full system. A single model family that understands the requirements, wrote the code, reviewed it, and generated the tests produces more consistent output than a patchwork of tools with isolated context.

This is the "AI-first" mindset in practice: not using AI for individual tasks, but designing the workflow around AI-native leverage.
