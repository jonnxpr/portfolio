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
