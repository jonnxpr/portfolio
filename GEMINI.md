# GEMINI.md - Antigravity Entry Point (Portifolio)

Use `CLAUDE.md` as canonical workflow.

## Hard preflight gate (mandatory)

Before any technical response:

1. Read mandatory instruction files for active context.
2. Start response with:
   - `Preflight OK: <file1>, <file2>, ...`

If preflight is incomplete, do not provide technical content. Reply only:

- `BLOCKED: preflight incompleto`

Then include one objective next step.

## Universal optimization guardrails

- Preserve existing instruction content with merge-by-intent.
- Resolve stack/version details from manifests and active configuration.
- Apply capability-based fallback when runtime/IDE support differs.
- Keep critical rules concise and near file top.
- Keep instruction changes idempotent.

## Integral instruction-read policy (mandatory)

- Read mandatory instruction files in full (all lines).
- If runtime output is partial, continue chunked reads until EOF.
- Preflight only completes after full-file reads.

## Mandatory loading order

1. `.copilot/base-instructions.md`
2. `CLAUDE.md`
3. `.github/copilot-instructions.md`
4. `.github/instructions/<category>.instructions.md` (when applicable)
5. `.agent/skills/development-standards/SKILL.md`
6. `.agent/rules/development-standards.md`

## Mandatory rules

- Preserve existing visual language and responsiveness.
- Keep static-first approach (HTML/CSS/JS, no unnecessary frameworks).
- Keep build artifacts aligned when source files change.
- Validate affected pages and interactions before completion.
- For any commit creation or commit message generation task, read and strictly apply `.github/copilot-commit-message-instructions.md`.
- If `tasks/` exists, read `tasks/todo.md` and `tasks/lessons.md` fully before technical output.
- If `tasks/` is missing, create `tasks/todo.md` and `tasks/lessons.md` with usage guidance before technical output.
- Continuously update `tasks/lessons.md` whenever new lessons are learned.
- This is a non-Java workspace; do not run Java/Maven/Gradle builds here.
- For technology decisions, consult Context7 MCP and apply the latest suitable guidance for the active stack.

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

