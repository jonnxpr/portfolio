# CLAUDE.md - Canonical Workflow (Portifolio)

This file defines the shared workflow for Copilot, OpenCode, and Antigravity runtimes.

## Workflow Orchestration

### 1) Plan mode by default
- For non-trivial tasks (3+ steps, investigation, architecture, refactor), start with a plan.
- Include verification in the plan.

### 2) Immediate re-planning
- If blockers, repeated failures, or contradictory evidence appear, stop and re-plan.

### 3) Verify before done
- Do not mark work complete without evidence (build, tests, logs, behavior diff).
- For UI changes, validate desktop and mobile behavior.

### 4) Root-cause and minimal impact
- Prefer root-cause fixes over cosmetic patches.
- Touch only required files and preserve existing design language.

## Task Management

1. Plan non-trivial tasks in `tasks/todo.md`.
2. Update progress during execution.
3. Record final review/results.
4. If `tasks/` exists, read `tasks/lessons.md` before technical work.
5. Continuously update `tasks/lessons.md` whenever new lessons are learned.
6. If `tasks/` is missing, create `tasks/todo.md` and `tasks/lessons.md` with usage instructions.

## Workspace technical context

- Site type: static single-page portfolio (`index.html`).
- Frontend stack: HTML5, CSS3, vanilla JavaScript modules.
- Data source: `data/projects.json`.
- Build scripts: `npm run build:css`, `npm run build:js`, `npm run build`.
- Local run: `npm start` (`python -m http.server 8000`).
- Deploy: GitHub Pages workflow at `.github/workflows/deploy.yml`.

Manifest and source files are authoritative over instruction files.
