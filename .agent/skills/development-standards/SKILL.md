---
name: development-standards
description: Canonical technical memory for implementation, refactor, and review in the Portifolio workspace.
---

# Skill - development-standards (Portifolio)

## When to use

- Code generation
- Refactor
- Review
- Data, HTML, CSS, or JS changes

## Canonical hierarchy

1. `.copilot/base-instructions.md`
2. `CLAUDE.md`
3. `.github/copilot-instructions.md`
4. `.agent/skills/development-standards/SKILL.md`
5. `.agent/rules/development-standards.md`

## Stack and architecture

- Static single-page site.
- Source CSS: `css/styles.css`; minified output: `css/styles.min.css`.
- Source JS: `js/navigation.js`, `js/projects.js`, `js/main.js`; minified output: `js/main.min.js`.
- Data source: `data/projects.json`.

## Mandatory rules

- Preserve the existing UI language and interaction patterns.
- Keep semantic HTML, accessibility, and responsive behavior.
- Keep JS modular and framework-free unless explicitly required.
- Keep `data/projects.json` schema stable.
- Regenerate minified assets when source CSS/JS changes.

## Verification

- `npm run build` for source asset changes.
- Smoke test the affected sections on desktop and mobile.

## Context7 documentation policy (mandatory)

- Use Context7 before implementation, refactor, and review decisions.

## Mandatory final code review, cross-validation, and factual integrity

- Final approval requires code review plus evidence-backed validation.

## MCP credential discovery and connection consent (mandatory)

- Before connecting to any MCP server, request user confirmation and list the credential source(s) to be used (redacted; never print secret values).

## Mandatory multi-agent orchestration skill

- For non-trivial tasks, apply `orchestrate-multi-agents` before implementation and keep the `Template DAG 100% compliance`.
