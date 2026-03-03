# Skill: Orchestrate Multi-Agents (Orquestracao de Multi Agentes)

## Objective
Orchestrate multiple specialist agents to deliver complex work with: clear decomposition, dependency-aware parallelism, strict quality gates, security-by-default, and auditable final consolidation.

## Activation criteria (use when 2+ signals are true)
- Multi-discipline scope (backend + frontend + infra + docs + data).
- Parallelizable task graph.
- High inconsistency risk (broad change, migration, refactor).
- Auditability/traceability requirement.
- Non-trivial constraints (security, performance, compatibility, standards).

## Inputs required before orchestration
- Project context: stack, architecture boundaries, repository conventions.
- Final objective: what must exist at completion.
- Constraints: versions, libraries, compatibility, scope/time limits.
- Acceptance criteria: build/lint/tests/behavior examples.
- Optional evidence: affected files, logs, errors, issue/PR links.

## Mandatory outputs
- Execution Plan (tasks, owners, dependencies, outputs, acceptance criteria).
- Definition of Done (DoD) and quality gate results.
- Decision Log (initial + deltas).
- Per-agent evidence: what/why/how validated.
- Final consolidation: changes, test commands, risks, next steps.

## Agent roles (instantiate only what is needed)
1. Orchestrator (lead): decomposition, delegation, integration, DoD ownership.
2. Architect/Tech Lead: design, contracts, domain boundaries, trade-offs.
3. Implementer: code changes aligned with repository standards.
4. QA/Tester: validation strategy, reproducibility, regression checks.
5. Security/Compliance: secrets/auth/permissions/sensitive logs/OWASP checks.
6. Docs/Release: docs, changelog, rollout and rollback guidance.

## Orchestration rules (mandatory)

### A) Structured handoff contract
Every handoff must include:
1. Minimum context (what/why).
2. Exact scope + explicit out-of-scope.
3. Inputs (files/classes/endpoints/commands).
4. Acceptance criteria.
5. Output format (patch, checklist, test output, risks).

### B) Dependency-first parallelism
- Represent work as a DAG (T1..Tn with dependencies).
- Run independent tasks in parallel.
- Start dependent tasks only after validated green signal.
- Preserve idempotency (safe to retry without duplicate side effects).

### C) Repository conventions win
- Respect repository standards for architecture, lint, formatting, test style, and commit policy.
- If a convention is unclear, use the most conservative assumption and record it in Decision Log.

### D) Quality, safety, and risk gates
Nothing is done without:
- Build/lint when applicable.
- Tests (at least smoke tests) or explicit evidence-backed justification.
- Security baseline review for auth/secrets/I-O/logging changes.
- Documentation minimum: how to run/test/rollback.

### E) Human-in-the-loop checkpoints
Require explicit human approval before:
- Production-impacting or irreversible actions.
- Security-sensitive changes.
- Changes with critical/unknown blast radius.
Use staged flow: propose -> review -> approve -> execute.

### F) Termination and loop safety
- Define completion and stop conditions before execution.
- Include max iteration / max message guardrails for review loops.
- Escalate when confidence is low or conflicting outputs persist.

### G) Observability and traceability
- Keep Decision Log updated with major assumptions, trade-offs, and reversals.
- Keep command/test evidence concise and reproducible.
- Keep file-level traceability for each agent output.

### H) Tool and permission hygiene
- Principle of least privilege: each agent uses only required tools/data.
- Never expose secrets in outputs.
- Mask sensitive values in logs and summaries.

### I) Validation hierarchy
1. Static checks (lint/types/contracts).
2. Unit/component validation.
3. Integration/smoke validation.
4. Security checks relevant to touched surface.
5. Final consistency review across all touched modules.

### J) Integration policy
- Resolve conceptual conflicts first (contracts, naming, invariants).
- Avoid parallel edits to same file without explicit sequencing.
- Ensure cross-module compatibility before finalization.

## Orchestrator algorithm
1. Restate objective in one paragraph.
2. List constraints and risks.
3. Build DAG plan (owner, dependency, expected output, acceptance criteria per task).
4. Dispatch explicit handoffs.
5. Validate each return; if failed, return delta feedback with exact correction.
6. Integrate approved outputs.
7. Run DoD checklist.
8. Deliver final consolidation package.

## Definition of Done checklist
- [ ] Build/compile passes (or N/A with justification)
- [ ] Lint/format checks pass (or N/A)
- [ ] Tests pass (or justified limitation + risk)
- [ ] Security baseline reviewed for touched surfaces
- [ ] Documentation/run-test instructions updated
- [ ] No undocumented breaking change
- [ ] Decision Log updated
- [ ] Final result includes risks and next steps

## Templates

### Execution Plan
- Objective:
- Constraints:
- Risks:
- Tasks:
  - T1 [Owner]:
    - Depends on:
    - Output:
    - Acceptance criteria:
  - T2 [Owner]:
- Definition of Done:
- Decision Log:
  - D1:

### Handoff
- Task:
- Context:
- Scope (do):
- Out of scope (do not):
- Inputs/References:
- Acceptance criteria:
- Response format:

### Agent return
- What was done:
- Files changed/snippets:
- How to validate:
- Evidence:
- Risks/limitations:

## Anti-patterns (forbidden)
- One-agent execution for broad/high-risk scope without orchestration.
- Task without owner/dependency/acceptance criteria.
- Parallel edits in same file without coordination.
- Completion without objective evidence.
- Decisions not recorded (causes rework).
- Premature irreversible action without approval checkpoint.

## External knowledge policy
- For framework/library decisions, verify current official docs (Context7 and official sources) before final implementation decisions.
- Prefer compatibility-safe modernization over speculative upgrades.
