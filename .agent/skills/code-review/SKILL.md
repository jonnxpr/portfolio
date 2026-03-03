---
name: code-review
description: Review checklist and quality gates for PR and code-review tasks in the Portifolio workspace.
---

# Skill - code-review (Portifolio)

## Intent

Review checklist for PR and code-review tasks.

## Review checklist

- Verify loading order and preflight evidence are respected.
- Check for regressions in responsiveness and accessibility.
- Confirm JSON schema and links integrity in `data/projects.json` changes.
- Confirm minified artifacts are updated when source CSS/JS changed.
- Confirm no unnecessary dependency or framework was introduced.
- Confirm deploy workflow compatibility with repository changes.
