<!--
Sync Impact Report
Version change: template -> 1.0.0
Modified principles: initial adoption
Added sections: Core Principles, Delivery Constraints, Workflow And Quality Gates, Governance
Removed sections: none
Templates requiring updates:
- .specify/templates/plan-template.md ✅ aligned via safe-parity pilot
- .specify/templates/spec-template.md ✅ aligned via safe-parity pilot
- .specify/templates/tasks-template.md ✅ aligned via safe-parity pilot
- .opencode/commands/speckit*.md ✅ aligned via safe-parity pilot
Follow-up TODOs: none
-->
# Portfolio Constitution

## Core Principles

### I. Brand Continuity
Every feature MUST preserve the existing visual identity, information architecture,
and premium presentation quality of the Portfolio site unless the specification
explicitly redefines them. Changes that alter tone, layout language, or narrative
emphasis MUST be intentional and traceable to the active spec.

### II. Semantic And Accessible Web
All delivered experiences MUST keep semantic HTML, keyboard-accessible
interactions, responsive layouts, and readable content hierarchy. Accessibility
regressions are not acceptable tradeoffs for visual polish.

### III. Minimal Surface Area
New work MUST prefer the existing static-site stack and avoid unnecessary
dependencies, frameworks, or build complexity. If a feature can be implemented
with the current HTML, CSS, vanilla JS, and JSON data model, that path is
mandatory.

### IV. Asset Synchronization
Source edits to CSS or JS MUST leave minified artifacts aligned before work is
considered complete. Generated assets are part of the release surface and must
stay consistent with the source files they represent.

### V. Incremental Value
Specifications, plans, and tasks MUST describe independently valuable slices that
can be verified incrementally. User value, measurable outcomes, and repo-local
ownership MUST stay clear from specification through implementation.

## Delivery Constraints

- `data/projects.json` remains the canonical data contract for project cards and
  related UI binding unless a spec explicitly changes it.
- Features MUST remain compatible with desktop and mobile layouts.
- Spec-driven workflow artifacts live only inside this repository under
  `.specify/` and `specs/`.
- OpenCode command surfaces live only inside `.opencode/commands/`.

## Workflow And Quality Gates

- Use `Context7` before implementation, refactor, and review decisions when
  external library or tool guidance is needed.
- Build verification for source CSS or JS changes is `npm run build`.
- Manual smoke validation remains mandatory for affected desktop and mobile
  flows.
- Speckit automation MUST stay inside the owning repo and MUST NOT rewrite
  home-dir configs or unrelated governance files.
- GitHub issue export for Speckit, when used, MUST go through `gh`.

## Governance

This constitution governs spec-driven workflow decisions for the Portfolio
repository. Amendments require a documented rationale, synchronized updates to
dependent templates or command prompts, and a semantic version bump that matches
the scope of the change. All specs, plans, tasks, and implementation reviews
must verify compliance with these principles before work is treated as complete.

**Version**: 1.0.0 | **Ratified**: 2026-03-27 | **Last Amended**: 2026-03-27
