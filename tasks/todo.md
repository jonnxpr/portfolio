# Task Plan

Registre aqui as tarefas nao triviais em execucao neste repositorio ou workspace.

- Objetivo:
- Plano de execucao:
- Evidencias esperadas:
- Status/Resultado:

## Speckit safe parity pilot (2026-03-27)

- [x] Map upstream Speckit assets and safe-parity constraints.
- [x] Integrate global and workspace routing for Speckit workflow.
- [x] Update Portfolio instruction stack to recognize `speckit-workflow`.
- [x] Add repo-local `.specify/`, Speckit skills, and OpenCode command surfaces.
- [x] Validate the pilot and summarize rollout follow-ups.

## 2026-04-12 — Hardening governance routing and audit parity

- Objetivo: Fechar o drift residual de governanca do repositorio, adicionando o roteamento repo-local de `sonarqube-local`, normalizando as superficies `governance-audit-loop` para o estado Linux atual e convertendo o toolkit/documentacao restante para `python3`.
- Plano de execucao:
  1. Reexecutar `audit-compliance.py` e `verify-precedence.py` como baseline deste owner batch.
  2. Atualizar `PRE-FLIGHT.md`, `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `.copilot/base-instructions.md` e `.github/copilot-instructions.md` para rotear `sonarqube-local` contra `http://localhost:9001`.
  3. Normalizar `.opencode/commands/governance-audit-loop.md` e os espelhos `.github/.opencode/.agent/skills/governance-audit-loop/SKILL.md` para a condicao de parada atual e o conjunto real de workspaces.
  4. Trocar referencias restantes do toolkit de governanca para `python3` e reexecutar as auditorias.
- Evidencias esperadas: `python3 tools/governance/audit-compliance.py` em 100; `python3 tools/governance/verify-precedence.py` em 0 findings; roteamento explicito de `sonarqube-local`; skill/command `governance-audit-loop` alinhados ao estado Linux atual.
- Status/Resultado:
  - [x] Baseline reexecutado (`audit-compliance.py=100`, `verify-precedence.py=0`)
  - [x] Roteamento repo-local de `sonarqube-local` aplicado nas superficies raiz
  - [x] Espelhos `governance-audit-loop` normalizados
  - [x] Referencias `python3` consolidadas
  - [x] Reauditoria final verde (`python3 tools/governance/audit-compliance.py` = 100; `python3 tools/governance/verify-precedence.py` = 0)

## 2026-04-12 — Paridade pratica Windows/Linux

- Objetivo: Fechar os gaps reais de execucao multiplataforma do repositorio, adicionando `validate.sh` no Linux e removendo a dependencia de Python para `npm start`.
- Plano de execucao:
  1. Tornar o entrypoint PowerShell tolerante a `py -3`, `python3` ou `python` quando invocar o toolkit Python.
  2. Adicionar `scripts/validate.sh` com o mesmo comportamento de `validate.ps1` para `fast` e `full`.
  3. Substituir o servidor local baseado em `python -m http.server` por um servidor estatico pequeno em Node nativo.
  4. Atualizar `package.json` e `README.md` para refletir o novo entrypoint.
  5. Revalidar `verify-precedence`, `verify-metadata-sync`, `npm run build` e o start local.
- Evidencias esperadas: `./scripts/validate.sh fast` verde, `npm run build` verde, `node scripts/start-static.mjs --host 127.0.0.1` respondendo localmente, e ausencia de dependencia obrigatoria de Python para `npm start`.
- Status/Resultado:
  - [x] `scripts/validate.ps1` passou a aceitar `py -3`, `python3` ou `python`
  - [x] `scripts/validate.sh` criado com paridade `fast/full`
  - [x] `scripts/start-static.mjs` criado e `package.json` migrado para Node nativo
  - [x] `README.md` alinhado com os novos entrypoints locais
  - [x] `bash scripts/validate.sh fast` -> PASS
  - [x] `pwsh -NoProfile -File scripts/validate.ps1 -Mode fast` -> PASS
  - [x] `npm run build` -> PASS
  - [x] `node scripts/start-static.mjs --host 127.0.0.1 --port 8123` -> `200 /`, `404 /does-not-exist.js`
