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
