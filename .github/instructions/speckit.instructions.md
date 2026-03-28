---
name: Speckit Workflow Rules
description: Rules for safe-parity spec-driven workflow assets and tasks
applyTo: "specs/**,.specify/**,.opencode/command/speckit*.md"
---

# Speckit workflow rules

- Load `.github/skills/speckit-workflow/SKILL.md` or `.opencode/skills/speckit-workflow/SKILL.md` for spec-driven tasks.
- Keep `.specify/`, `specs/`, and `.opencode/command/` scoped to this repository.
- Never let Speckit automation rewrite home-dir configs or unrelated governance files.
- GitHub issue export for Speckit must use `gh`, not GitHub MCP issue writes.

## Mandatory final code review, cross-validation, and factual integrity

- Apply the canonical final gate from `CLAUDE.md` before marking work complete.
