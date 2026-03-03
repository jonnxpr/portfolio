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

## Context7 policy (mandatory)

- Before implementation/refactor/review, consult Context7 MCP for latest docs/examples in scope.
- Prefer modern and suitable features only when compatible with project constraints.

## Mandatory final code review, cross-validation, and factual integrity

- At the end of every implementation/refactor/fix, perform a final code review before marking the task complete.
- Cross-validation is mandatory and does not replace code review: validate outputs against at least two independent sources of evidence (for example tests/build logs, contract/docs, runtime behavior, or diff-based verification).
- Final approval requires both gates: (1) technical code review quality and (2) evidence-based cross-validation consistency.
- Review and cross-validation must verify correctness, security, performance, readability, test impact, and compatibility with existing architecture/contracts.
- It is allowed (and encouraged) to use internet sources and up-to-date documentation (including Context7 and official docs) to close knowledge gaps.
- Never invent facts, APIs, versions, behaviors, references, or validation results; if uncertain, verify first or explicitly state uncertainty.

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
