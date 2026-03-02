---
trigger: always_on
---

# Development Standards Rule - Portifolio

## Minimum hierarchy

1. `.copilot/base-instructions.md`
2. `CLAUDE.md`
3. `.github/copilot-instructions.md`
4. `.agent/skills/development-standards/SKILL.md`
5. `.agent/rules/development-standards.md`

## Validated stack

- HTML5, CSS3, vanilla JavaScript
- Build: `clean-css-cli`, `terser`
- Local serve: Python http.server via `npm start`

## Critical rules

- Preserve semantic structure and accessibility.
- Preserve responsive behavior (desktop/tablet/mobile).
- Preserve existing design system and CSS variable usage.
- Keep JS modular and avoid introducing frameworks for simple changes.
- Keep minified artifacts synchronized with source changes.

## Execution rules

- Plan non-trivial tasks.
- Re-plan on blockers or contradictory evidence.
- Do not mark complete without verification evidence.
- If `tasks/` exists, read `tasks/todo.md` and `tasks/lessons.md` before technical tasks.
- If `tasks/` is missing, create `tasks/todo.md` and `tasks/lessons.md` with usage guidance before technical tasks.
- Continuously update `tasks/lessons.md` whenever new lessons are learned.

## Minimum validation

- `npm run build` when CSS/JS changes.
- Manual smoke test on `index.html` sections affected.
