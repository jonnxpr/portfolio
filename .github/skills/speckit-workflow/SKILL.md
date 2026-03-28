---
name: speckit-workflow
description: Local Copilot CLI skill for safe-parity Speckit workflow in the Portfolio repository.
---

# Skill - speckit-workflow (Portfolio - Copilot CLI)

## When to use

- `/speckit.*` workflows
- specification authoring, clarification, constitution, planning, tasks, analysis, checklist, or implementation from `specs/`

## Repository model

- `.specify/` stores templates, scripts, and constitution.
- `specs/<feature-branch>/` stores feature artifacts.
- `.opencode/command/` stores OpenCode command entrypoints.

## Safe parity rules

- Keep all writes inside this repository.
- Never let Speckit automation rewrite home-dir configs or unrelated governance files.
- Use `gh` for GitHub issue creation when `taskstoissues` is available.

## Workflow order

1. `/speckit.constitution`
2. `/speckit.specify`
3. `/speckit.clarify`
4. `/speckit.plan`
5. `/speckit.tasks`
6. `/speckit.analyze` and `/speckit.checklist`
7. `/speckit.implement`

## Mandatory final code review, cross-validation, and factual integrity

- Apply the canonical final gate from `CLAUDE.md` before marking work complete.
