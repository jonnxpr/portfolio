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
