# Copilot Base Instructions - Portifolio

## Purpose

Universal standards for this repository across Copilot, OpenCode, and Antigravity.

## Mandatory hierarchy

1. `.copilot/base-instructions.md`
2. `CLAUDE.md`
3. `.github/copilot-instructions.md`
4. `.github/instructions/*.instructions.md` (path-specific)
5. `.agent/skills/development-standards/SKILL.md`
6. `.agent/rules/development-standards.md`

If rules conflict, this order wins.

## Cross-tool contract

- Keep semantic consistency across Copilot, OpenCode, and Antigravity.
- Do not create parallel rules when canonical files already define behavior.
- Prefer short, reusable instructions over long repeated text.

## Project behavior standards

- Preserve cyberpunk-minimal visual identity already established.
- Keep accessibility and semantic HTML.
- Keep vanilla JS modular structure (`js/navigation.js`, `js/projects.js`, `js/main.js`).
- Keep data schema consistency in `data/projects.json`.
- Prefer smallest safe change and verify in desktop/mobile.

## Operational compatibility

- Copilot: `.github/copilot-instructions.md` + `.github/instructions/*.instructions.md`.
- OpenCode: `AGENTS.md` + `CLAUDE.md` + `opencode.json`.
- Antigravity: `GEMINI.md` + `CLAUDE.md`.
- Mandatory instruction files must be read in full; if output windows are partial, continue chunked reads until EOF.
- If `tasks/` exists, read `tasks/todo.md` and `tasks/lessons.md` before technical tasks.
- If `tasks/` is missing, create `tasks/todo.md` and `tasks/lessons.md` with usage guidance before technical tasks.
- Continuously update `tasks/lessons.md` whenever new lessons are learned.
