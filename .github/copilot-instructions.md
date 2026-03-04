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

## Context7 documentation policy (mandatory)

- Before technical implementation/refactor/review, consult Context7 MCP for latest docs/examples of technologies in scope.
- Prefer modern and suitable features when compatible with project runtime/build constraints and architecture.

## Frontend design skill (mandatory by context)

- For frontend design-centric tasks (building or redesigning pages/components/interfaces), also apply `.agent/skills/frontend-design/SKILL.md`.

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
- For non-trivial tasks, instantiate the `Template DAG 100% compliance` from `orchestrate-multi-agents`; owners/tasks may be reduced only when not applicable, but mandatory gates cannot be removed.

## Governance automation (mandatory)

- Secret scan: `./tools/governance/scan-secrets.ps1`
- Instruction sync (idempotent): `python ./tools/governance/sync-instructions.py`
- Compliance score/report: `python ./tools/governance/audit-compliance.py`
- Precedence matrix: `./tools/governance/precedence-matrix.md`
