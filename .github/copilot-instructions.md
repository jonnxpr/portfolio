---
name: Portifolio Instructions
description: Global instructions for portfolio static site workflows
applyTo: "**"
---

# GitHub Copilot Instructions - Portifolio

## Mandatory loading order

1. `.copilot/base-instructions.md`
2. `CLAUDE.md`
3. `.github/copilot-instructions.md` (this file)
4. `.github/instructions/*.instructions.md` (path-specific)
5. `.agent/skills/development-standards/SKILL.md`
6. `.agent/rules/development-standards.md`

## Hard preflight gate (mandatory)

Before any technical response (investigation, generation, refactor, review, build guidance):

1. Read mandatory files for active context.
2. Start response with:
   - `Preflight OK: <file1>, <file2>, ...`

If preflight is incomplete, respond only:

- `BLOCKED: preflight incompleto`

and include one objective next step.

## Universal optimization guardrails

- Preserve existing instruction files with merge-by-intent, not blind replacement.
- Do not infer stack/version details without manifest evidence.
- Use capability-based fallback when behavior differs across IDEs/runtimes.
- Keep critical rules short and near the top of central instruction files.
- Keep instruction edits idempotent.

## Integral instruction read (mandatory)

- All required instruction files must be read completely (first line to last line).
- If Copilot/runtime loads partial excerpts, continue reading additional ranges until EOF.
- Do not begin technical output or code generation before full-file reads complete.
- If `tasks/` exists, read `tasks/todo.md` and `tasks/lessons.md` completely before technical output.
- If `tasks/` is missing, create `tasks/todo.md` and `tasks/lessons.md` with usage guidance before technical output.
- Continuously update `tasks/lessons.md` whenever new lessons are learned.

## Project context

- Static site with `index.html` as entrypoint.
- Styles in `css/styles.css` and production artifact `css/styles.min.css`.
- JS modules in `js/navigation.js`, `js/projects.js`, `js/main.js` and production bundle `js/main.min.js`.
- Dynamic project cards from `data/projects.json`.
- Build scripts in `package.json`.
- GitHub Pages deploy workflow at `.github/workflows/deploy.yml`.
- Non-Java workspace: Java/Maven/Gradle builds are not applicable.

## Quality constraints

- Preserve current visual identity and responsive behavior.
- Keep semantic HTML and keyboard-friendly navigation.
- Keep payload small; avoid adding heavy dependencies for simple tasks.
- When source CSS/JS changes, regenerate matching minified artifacts.
- Validate changed flows locally (`npm start`) and run `npm run build` when relevant.
