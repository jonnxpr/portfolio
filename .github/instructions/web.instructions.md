---
name: Web UI Rules
description: Rules for HTML, CSS, and JavaScript edits
applyTo: "index.html,css/**,js/**"
---

# Web UI rules

- Keep the existing cyberpunk-minimal identity and tone.
- Preserve responsive breakpoints and mobile-first behavior.
- Keep semantic HTML structure and accessible labels/roles.
- Keep vanilla JS modular and avoid unnecessary abstractions.
- Prefer CSS variables over hardcoded repeated values.
- Keep animation subtle and meaningful.

## Minimum validation

- `npm run build`
- Manual smoke test in `http://localhost:8000` for changed sections.

## Mandatory final code review, cross-validation, and factual integrity

- At the end of every implementation/refactor/fix, perform a final code review before marking the task complete.
- Cross-validation is mandatory and does not replace code review: validate outputs against at least two independent sources of evidence (for example tests/build logs, contract/docs, runtime behavior, or diff-based verification).
- Final approval requires both gates: (1) technical code review quality and (2) evidence-based cross-validation consistency.
- Review and cross-validation must verify correctness, security, performance, readability, test impact, and compatibility with existing architecture/contracts.
- It is allowed (and encouraged) to use internet sources and up-to-date documentation (including Context7 and official docs) to close knowledge gaps.
- Never invent facts, APIs, versions, behaviors, references, or validation results; if uncertain, verify first or explicitly state uncertainty.
