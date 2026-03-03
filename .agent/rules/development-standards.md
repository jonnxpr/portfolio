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

## Context7 policy (mandatory)

- Consult Context7 MCP for latest framework/library/language guidance before implementation/refactor/review.
- Prefer modern and suitable features when compatibility is verified against project constraints.

## Minimum validation

- `npm run build` when CSS/JS changes.
- Manual smoke test on `index.html` sections affected.

## Mandatory final code review and factual integrity

- At the end of every implementation/refactor/fix, perform a final code review before marking the task complete.
- Review must verify correctness, security, performance, readability, test impact, and compatibility with existing architecture/contracts.
- It is allowed (and encouraged) to use internet sources and up-to-date documentation (including Context7 and official docs) to close knowledge gaps.
- Never invent facts, APIs, versions, behaviors, or references; if uncertain, verify first or explicitly state uncertainty.

## MCP credential discovery and connection consent (mandatory)

- When a task requests a specific MCP server, or when policy requires one (for example Context7), automatically attempt credential discovery before connecting.
- Search credential/config locations in this order:
  1. Workspace/project files: `mcp.json`, `.mcp.json`, `mcp_servers.json`, `.vscode/mcp.json`, `opencode.json`.
  2. OpenCode config: path from `OPENCODE_CONFIG` (if set), then user/global OpenCode config directories for this OS (for example `~/.config/opencode/opencode.json`, `~/.config/opencode/mcp/*.json`).
  3. VS Code user/profile MCP config for this OS: `%APPDATA%/Code/User/mcp.json` (Windows), `~/Library/Application Support/Code/User/mcp.json` (macOS), `~/.config/Code/User/mcp.json` (Linux).
  4. Antigravity/Gemini local config only when files exist and are documented for the active environment/project (for example `~/.gemini/settings.json`).
  5. Environment variables referenced by MCP configuration (`env`, `${VAR}`, `$VAR`, `%VAR%`).
- If credentials are not found, report exactly: `credentials not found for requested MCP`.
- Before connecting to any MCP server, request user confirmation and list the credential source(s) to be used (redacted; never print secret values).
- Never invent credential locations, tokens, API keys, or authentication results.


## Mandatory multi-agent orchestration skill

- For non-trivial tasks (multi-discipline scope, parallelizable work, broad refactor/migration, high inconsistency risk, or audit-heavy requirements), always apply `orchestrate-multi-agents` before implementation.
- OpenCode/Antigravity source of truth: `.agent/skills/orchestrate-multi-agents/SKILL.md`.
- For OpenCode, when `.opencode/skills/` exists in the workspace, mirror this skill in `.opencode/skills/orchestrate-multi-agents/SKILL.md`.
- Minimum flow is mandatory: Execution Plan -> explicit handoffs -> dependency-gated parallelism -> DoD validation -> final consolidation with Decision Log.
- If the task is trivial/single-step, explicitly state why multi-agent orchestration is not required.
