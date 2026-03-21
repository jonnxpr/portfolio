---
name: Portifolio Instructions
description: Global instructions for portfolio static-site workflows
applyTo: "**"
---

# GitHub Copilot Instructions - Portifolio

## Mandatory loading order

1. `.copilot/base-instructions.md`
2. `CLAUDE.md`
3. `.github/copilot-instructions.md`
4. `.github/instructions/*.instructions.md`
5. `.agent/skills/development-standards/SKILL.md`
6. `.agent/rules/development-standards.md`

## Hard preflight gate (mandatory)

Before any technical response:

1. Read every mandatory file for the active context.
2. Start the response with:
   - `Preflight OK: <file1>, <file2>, ...`

If preflight is incomplete, reply only:

- `BLOCKED: preflight incompleto`

and include one single objective action to unblock.

## Integral instruction read (mandatory)

- Read all mandatory files from first line through last line.
- If the runtime returns partial content, continue chunked reads until EOF.

## Project context

- Static site with `index.html` entrypoint.
- Source CSS/JS changes must keep minified artifacts aligned.
- Keep payload small, semantic HTML strong, and responsiveness intact.
- This is a non-Java workspace.

## Context7 documentation policy (mandatory)

- Use Context7 before implementation, refactor, and review work.

## Frontend design skill (mandatory by context)

- For design-centric work, also apply `.opencode/skills/frontend-design/SKILL.md`.

## MCP credential discovery and connection consent (mandatory)

- Before connecting to any MCP server, request user confirmation and list the credential source(s) to be used (redacted; never print secret values).
- Discovery must cover workspace/project files, OpenCode config, `.copilot/mcp-config.json`, VS Code `profiles/*/mcp.json`, `~/.gemini/antigravity/mcp_config.json`, and referenced environment variables such as `CONTEXT7_API_KEY`.
- If credentials are not found, report exactly: `credentials not found for requested MCP`.

## Mandatory multi-agent orchestration skill

- For non-trivial tasks, apply `orchestrate-multi-agents` before implementation and keep the `Template DAG 100% compliance`.

## Mandatory final code review, cross-validation, and factual integrity

- Use the canonical final gate from `CLAUDE.md`; no technical work is done without review plus independent validation evidence.

## Governance automation (mandatory)

- Secret scan: `./tools/governance/scan-secrets.ps1`
- Instruction sync: `python ./tools/governance/sync-instructions.py`
- Compliance audit: `python ./tools/governance/audit-compliance.py`
