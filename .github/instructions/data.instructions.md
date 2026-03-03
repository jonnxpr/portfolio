---
name: Data Rules
description: Rules for projects JSON data changes
applyTo: "data/**"
---

# Data rules

- Keep `data/projects.json` valid JSON with stable schema.
- Keep unique numeric `id` values.
- Keep required fields (`title`, `description`, `technologies`, `links.github`).
- Keep URLs valid and avoid placeholder links in final content.
- After data changes, verify cards render correctly on homepage.

## Mandatory final code review, cross-validation, and factual integrity

- At the end of every implementation/refactor/fix, perform a final code review before marking the task complete.
- Cross-validation is mandatory and does not replace code review: validate outputs against at least two independent sources of evidence (for example tests/build logs, contract/docs, runtime behavior, or diff-based verification).
- Final approval requires both gates: (1) technical code review quality and (2) evidence-based cross-validation consistency.
- Review and cross-validation must verify correctness, security, performance, readability, test impact, and compatibility with existing architecture/contracts.
- It is allowed (and encouraged) to use internet sources and up-to-date documentation (including Context7 and official docs) to close knowledge gaps.
- Never invent facts, APIs, versions, behaviors, references, or validation results; if uncertain, verify first or explicitly state uncertainty.
