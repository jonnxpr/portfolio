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
