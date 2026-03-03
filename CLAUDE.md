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
