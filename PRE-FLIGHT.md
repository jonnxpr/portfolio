# PRE-FLIGHT - Portifolio

Hard gate before any technical answer.

## Mandatory checklist

1. Read `.copilot/base-instructions.md`.
2. Read `CLAUDE.md`.
3. Read `.github/copilot-instructions.md`.
4. Read `.github/instructions/*.instructions.md` applicable to active context.
5. Read `.agent/skills/development-standards/SKILL.md`.
6. Read `.agent/rules/development-standards.md`.
7. If task is review/PR, also read `.agent/skills/code-review/SKILL.md`.
8. For commit creation or commit message generation tasks, read `.github/copilot-commit-message-instructions.md` and apply it strictly.
9. If `tasks/` exists, read `tasks/todo.md` and `tasks/lessons.md` fully before technical output.
10. This workspace is non-Java; do not run Java/Maven/Gradle builds here.
11. If `tasks/` is missing, create `tasks/todo.md` and `tasks/lessons.md` with clear usage instructions before technical work.
12. Before technical implementation/refactor/review, consult Context7 MCP for the technologies involved and apply the latest suitable guidance.

## Universal optimization guardrails

- Preserve existing instruction content and prefer merge over replacement.
- Resolve stack/version details from manifests and active config files only.
- Apply capability-based fallback when runtime/IDE support differs.
- Keep preflight and hierarchy rules concise and near file top.
- Keep instruction changes idempotent.

## Integral read requirement (mandatory)

- Read all mandatory instruction files fully (all lines, no truncation).
- If the runtime/IDE returns partial content, continue chunked reads until EOF.
- Preflight remains incomplete while any mandatory file is partially read.
- Apply the same full-read requirement to `tasks/todo.md` and `tasks/lessons.md` when `tasks/` exists.

## Proof line format (mandatory)

Start the response with exactly:

- `Preflight OK: <file1>, <file2>, ...`

## Failure behavior (mandatory)

If checklist is incomplete, do not provide technical content. Reply only:

- `BLOCKED: preflight incompleto`

Then include one single objective next action to unblock.

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
