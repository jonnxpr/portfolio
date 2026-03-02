---
name: Preflight Gate
description: Mandatory preflight gate for all technical prompts
applyTo: "**"
---

# Hard preflight gate

Before any technical response:

1. Read mandatory instruction files for active context.
2. Start response with:
   - `Preflight OK: <file1>, <file2>, ...`

If preflight is incomplete, reply only:

- `BLOCKED: preflight incompleto`

Then include one objective next action.
