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

## Inventory

- `.copilot/base-instructions.md`
- `.github/copilot-instructions.md`
- `.github/copilot-commit-message-instructions.md`
- `.github/instructions/preflight.instructions.md`
- `.github/instructions/web.instructions.md`
- `.github/instructions/data.instructions.md`
- `.agent/skills/development-standards/SKILL.md`
- `.agent/skills/code-review/SKILL.md`
- `.agent/rules/development-standards.md`
- `CLAUDE.md`, `GEMINI.md`, `PRE-FLIGHT.md`
