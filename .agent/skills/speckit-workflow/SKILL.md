---
name: speckit-workflow
description: Local Antigravity-compatible skill for safe-parity Speckit workflow in the Portfolio repository.
---

# Skill - speckit-workflow (Portfolio - Antigravity)

## When to use

- `/speckit.*` workflows
- specification authoring, clarification, constitution, planning, tasks, analysis, checklist, or implementation from `specs/`

## Repository model

- `.specify/` stores templates, scripts, and constitution.
- `specs/<feature-branch>/` stores feature artifacts.
- OpenCode command entrypoints live in `.opencode/commands/`.
- GitHub Copilot discovery surfaces live in `.github/prompts/` and `.github/agents/`.
- Antigravity discovery surfaces live in `.gemini/commands/`.

## Safe parity rules

- Keep all writes inside this repository.
- Never let Speckit automation rewrite home-dir configs or unrelated governance files.
- Generated context summaries belong in `.specify/context/` and should remain repo-local.
- GitHub issue export for Speckit must use `gh`.

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
