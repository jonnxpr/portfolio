---
name: Context7 Documentation Policy
description: Mandatory use of Context7 MCP for up-to-date technology guidance
applyTo: "**"
---

# Context7 policy (mandatory)

Before proposing, generating, refactoring, or reviewing code that uses any framework, library, language feature, or API:

1. Use Context7 MCP to retrieve the latest relevant documentation and examples.
2. Resolve the library ID first, then query docs with the exact scenario.
3. Prefer modern and suitable features when compatible with current project constraints.

## Decision guidance

- Favor current, stable capabilities only when they fit project runtime/build constraints.
- Validate compatibility with manifests and existing architecture before adoption.
- Do not force modernization when it breaks compatibility or increases risk.

## Example criteria

- Java: decide between `record` and DTO class based on mutability, serialization needs, and API contract stability.
- Java concurrency: consider Virtual Threads for I/O-bound workloads only when JDK/framework compatibility is verified.

## Fallback

If Context7 is unavailable, explicitly report fallback and use repository manifests plus official documentation sources.

## MCP credential discovery and connection consent (mandatory)

- When a task requests a specific MCP server, or when policy requires one (for example Context7), automatically attempt credential discovery before connecting.
- Search credential/config locations in this order:
  1. Workspace/project files: `mcp.json`, `.mcp.json`, `mcp_servers.json`, `.vscode/mcp.json`, `opencode.json`.
  2. OpenCode config: path from `OPENCODE_CONFIG` (if set), then user/global OpenCode config directories for this OS (for example `~/.config/opencode/opencode.json`, `~/.config/opencode/mcp/*.json`).
  3. VS Code user/profile MCP config for this OS: `%APPDATA%/Code/User/mcp.json` (Windows), `~/Library/Application Support/Code/User/mcp.json` (macOS), `~/.config/Code/User/mcp.json` (Linux).
  4. Antigravity/Gemini local config only when files exist and are documented for the active environment/project (for example `~/.gemini/settings.json`).
  5. Environment variables referenced by MCP configuration (`env`, `${VAR}`, `$VAR`, `%VAR%`).
- If credentials are not found, report exactly: `credentials not found for requested MCP`.
- Before connecting to any MCP server, request user confirmation and list the credential source(s) to be used (redacted; never print secret values).
- Never invent credential locations, tokens, API keys, or authentication results.

