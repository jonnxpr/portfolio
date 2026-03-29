# Lessons

- Add preventive lessons only after explicit user correction.
- For GitHub Pages workflows, keep `actions/upload-pages-artifact` and `actions/deploy-pages` on current major versions to avoid indirect deprecations from `upload-artifact@v3`.
- Keep `README.md` synchronized with current runtime modules and dynamic data sources (`js/*` and `data/*`) whenever architecture changes.
- For smooth-scroll navigation highlights, keep clicked menu state locked until transition ends to avoid temporary wrong active-link feedback.
- When normalizing Speckit safe-parity repos for OpenCode, use `.opencode/commands/` at the repo or chat root; `.opencode/command/` breaks current command discovery.

- Data: 2026-03-28
- Contexto: normalizacao da descoberta de comandos Speckit/OpenCode no repositorio.
- Correcao recebida: usar `.opencode/commands/` em vez de `.opencode/command/` para discovery atual do OpenCode.
- Regra preventiva: em repositorios safe-parity, manter comandos customizados do OpenCode em `.opencode/commands/` no root dono do workflow.
- Como validar na proxima vez: subir `opencode serve` no root alvo e conferir `/command` com os `speckit.*` esperados.

- Data: 2026-03-29
- Contexto: consolidacao da arquitetura de governanca compartilhada do workspace Portfolio.
- Correcao recebida: manter a memoria de governanca de longo prazo em `portfolio-governance/`, sem transformar o historico do site na casa de templates e notas de rollout cross-workspace.
- Regra preventiva: quando a governanca precisar evoluir independentemente do produto, preferir repositorio irmao dedicado e manter o repo principal como fonte de verdade do site e de assets repo-locais.
- Como validar na proxima vez: confirmar que notas de rollout e templates compartilhados apontam para `portfolio-governance/`, enquanto codigo, conteudo e specs repo-locais continuam em `Portfolio/`.
