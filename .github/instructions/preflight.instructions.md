---
name: Preflight Gate
description: Mandatory preflight gate for all technical prompts
applyTo: "**"
---

# Hard preflight gate

- Read the mandatory files for the active context before technical output.
- Start the response with `Preflight OK: <file1>, <file2>, ...`.
- If preflight is incomplete, reply only `BLOCKED: preflight incompleto` and one objective next action.
- For specification-driven work, also load the local `speckit-workflow` skill and keep `.specify/`, `specs/`, and `.opencode/command/` scoped to this repository.

## Speckit safe parity

- Never let Speckit automation rewrite home-dir configs or unrelated governance files.

## Mandatory final code review, cross-validation, and factual integrity

- Apply the canonical final gate from `CLAUDE.md` before marking work complete.
