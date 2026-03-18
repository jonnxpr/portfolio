# OpenCode Instructions - Portifolio

This file aligns OpenCode behavior with Copilot and Antigravity for this workspace.

## Scope

- Applies to the full `Portifolio/` tree.
- Use active files as source of truth.
- Ignore generated/minified artifacts unless task explicitly targets them.
- This workspace is non-Java; JDK switching is not applicable.

## Instruction loading strategy

- Keep `opencode.json` minimal: `PRE-FLIGHT.md`, `CLAUDE.md`, `AGENTS.md`.
- Use `.agent/skills` for technical memory and review behavior.
- Keep semantics aligned across `.copilot`, `.github`, `.agent`, and `GEMINI.md`.

## Universal optimization guardrails

- Preserve existing instruction content with merge-by-intent.
- Do not guess stack/version details; manifests and active config are authoritative.
- Use capability-based fallback when runtime/IDE support differs.
- Keep critical rules concise and near file top.
- Keep instruction updates idempotent.

## Integral instruction-read policy (mandatory)

- Every required instruction file must be read from first to last line.
- If output is truncated by runtime/UI, continue sequential reads until EOF.
- Partial reads never satisfy preflight.

## Hard preflight gate (mandatory)

Before any technical response:

1. Read mandatory files in active context.
2. Start response with:
   - `Preflight OK: <file1>, <file2>, ...`

If preflight is incomplete, reply only:

- `BLOCKED: preflight incompleto`

and include one objective next action.

## Mandatory loading order

1. `.copilot/base-instructions.md`
2. `CLAUDE.md`
3. `.github/copilot-instructions.md`
4. `.github/instructions/*.instructions.md` (path-specific)
5. `.agent/skills/development-standards/SKILL.md`
6. `.agent/rules/development-standards.md`
7. `.agent/skills/code-review/SKILL.md` (review/PR only)

## Skills auto-loading

- Implementation/refactor: `development-standards`.
- Frontend design-centric tasks: `development-standards` + `frontend-design`.
- Review/PR: `development-standards` + `code-review`.

## Task knowledge policy (mandatory)

- If `tasks/` exists, read `tasks/todo.md` and `tasks/lessons.md` before technical tasks.
- If `tasks/` is missing, create `tasks/todo.md` and `tasks/lessons.md` with usage guidance before technical tasks.
- Continuously update `tasks/lessons.md` whenever new lessons are learned.
- Apply learned lessons immediately in ongoing work.
- Apply existing lessons from `tasks/lessons.md` to the current plan before coding.

## Commit-message rule in OpenCode (mandatory)

For any commit creation or commit message generation task, it is mandatory to apply:

- `.github/copilot-commit-message-instructions.md`

This rule is strict and non-optional: Conventional Commits with message content in pt-BR, exactly as defined in that file.

## Context7 documentation policy (mandatory)

- For implementation, refactor, and review tasks, consult Context7 MCP for up-to-date docs/examples of technologies being changed.
- Prefer modern and appropriate features when compatible with project constraints and architecture.

## Inventory

- `.copilot/base-instructions.md`
- `.github/copilot-instructions.md`
- `.github/copilot-commit-message-instructions.md`
- `.github/instructions/preflight.instructions.md`
- `.github/instructions/web.instructions.md`
- `.github/instructions/data.instructions.md`
- `.agent/skills/development-standards/SKILL.md`
- `.agent/skills/frontend-design/SKILL.md`
- `.agent/skills/code-review/SKILL.md`
- `.agent/rules/development-standards.md`
- `CLAUDE.md`, `GEMINI.md`, `PRE-FLIGHT.md`

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
  1. Workspace/project files: `mcp.json`, `.mcp.json`, `mcp_servers.json`, `.vscode/mcp.json`, `opencode.json`, `.copilot/mcp-config.json`.
  2. OpenCode config: path from `OPENCODE_CONFIG` (if set), then user/global OpenCode config directories for this OS (for example `~/.config/opencode/opencode.json`, `~/.config/opencode/mcp/*.json`).
  3. VS Code user/profile MCP config for this OS: `%APPDATA%/Code/User/mcp.json` and `%APPDATA%/Code/User/profiles/*/mcp.json` (Windows), `~/Library/Application Support/Code/User/mcp.json` and `~/Library/Application Support/Code/User/profiles/*/mcp.json` (macOS), `~/.config/Code/User/mcp.json` and `~/.config/Code/User/profiles/*/mcp.json` (Linux).
  4. Antigravity/Gemini local config only when files exist and are documented for the active environment/project (for example `~/.gemini/settings.json`, `~/.gemini/antigravity/mcp_config.json`).
  5. Environment variables referenced by MCP configuration (`env`, `${VAR}`, `$VAR`, `%VAR%`).
- If credentials are not found, report exactly: `credentials not found for requested MCP`.
- Before connecting to any MCP server, request user confirmation and list the credential source(s) to be used (redacted; never print secret values).
- Never invent credential locations, tokens, API keys, or authentication results.
- Treat user environment variables as valid fallback credential sources, especially `CONTEXT7_API_KEY`.


## Mandatory multi-agent orchestration skill

- For non-trivial tasks (multi-discipline scope, parallelizable work, broad refactor/migration, high inconsistency risk, or audit-heavy requirements), always apply `orchestrate-multi-agents` before implementation.
- OpenCode/Antigravity source of truth: `.agent/skills/orchestrate-multi-agents/SKILL.md`.
- For OpenCode, when `skill/` exists in the workspace, mirror this skill in `skill/orchestrate-multi-agents/SKILL.md`.
- Minimum flow is mandatory: Execution Plan -> explicit handoffs -> dependency-gated parallelism -> DoD validation -> final consolidation with Decision Log.
- If the task is trivial/single-step, explicitly state why multi-agent orchestration is not required.
- For non-trivial tasks, instantiate the `Template DAG 100% compliance` from `orchestrate-multi-agents`; owners/tasks may be reduced only when not applicable, but mandatory gates cannot be removed.

## Governance automation (mandatory)

- Secret scan: `./tools/governance/scan-secrets.ps1`
- Instruction sync (idempotent): `python ./tools/governance/sync-instructions.py`
- Compliance score/report: `python ./tools/governance/audit-compliance.py`
- Precedence matrix: `./tools/governance/precedence-matrix.md`

## Skill runtime fallback (mandatory)

- Preferred source for runtime skill loading: skill/*/SKILL.md.
- Fallback source (if runtime reports Available skills: none): .agent/skills/*/SKILL.md.
- If Skill not found occurs, continue by reading required SKILL.md files directly and apply them in the same task.
