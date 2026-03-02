# Skill - development-standards (Portifolio)

## Intent

Technical memory for implementation and refactor in this workspace.

## Stack and architecture

- Static single-page site (`index.html`).
- CSS source: `css/styles.css`; artifact: `css/styles.min.css`.
- JS source modules: `js/navigation.js`, `js/projects.js`, `js/main.js`; artifact: `js/main.min.js`.
- Data source: `data/projects.json`.

## Rules

- Preserve existing UI language and interaction patterns.
- Keep semantic HTML and accessibility good practices.
- Keep JS simple, modular, and framework-free unless explicitly required.
- Avoid unnecessary dependencies.
- For CSS/JS source updates, regenerate minified files.

## Verification

- Run `npm run build` for CSS/JS changes.
- Run `npm start` and smoke-test affected sections on desktop and mobile viewport.

## Task knowledge

- If `tasks/` exists, read `tasks/todo.md` and `tasks/lessons.md` before technical tasks.
- If `tasks/` is missing, create `tasks/todo.md` and `tasks/lessons.md` with usage guidance before technical tasks.
- Continuously update `tasks/lessons.md` whenever new lessons are learned.
