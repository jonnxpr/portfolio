---
status: completed
createdAt: 2026-11-24
completedAt: 2026-11-24
repo: portfolio
---

# Plan: Nava | Tech for Business, Skills Standardization & LinkedIn Alignment

## 1. Objective & Scope

Atualizar o portfólio estático (`Portfolio`) com base na nova experiência profissional do usuário (**Nava | Tech for Business** — terceirizado no **Banco Inter**), padronizar a nomenclatura de competências em todos os projetos e seções, e aplicar melhorias identificadas na comparação direta com o perfil autenticado do LinkedIn (`https://www.linkedin.com/in/jonathan-douglas-3014b1b3/`).

### Mandatory Deliverables

1. `data/projects.json`:
   - Adicionar **Nava | Tech for Business — Banco Inter** (`id: 3`, `current: true`) em ordem cronológica reversa (primeiro card).
   - Atualizar **PartnerBank** (`id: 2`) para `current: false`, ajustar verbos para o passado (`pt-BR`, `en`, `es`) e incluir `AWS ECR`.
   - Padronizar **Vetta — Usiminas** (`id: 1`) e adicionar **Preflight Prompt** (`id: 4`, Open Source, `https://github.com/jonnxpr/preflight-prompt`).
   - Incluir `role` e `period` localizados nos cards.
   - Padronizar `technologies` (ex.: `AWS *` em vez de `Amazon *`, `New Relic`, `Git`, `GitLab`, `CI/CD`, `Jenkins`, `Gogs`, `APIs REST`/`REST APIs`, `Microsserviços`/`Microservices`/`Microservicios`) mantendo badges focados na stack técnica e absorvendo tags genéricas de RH (POO, Engenharia de Software, Clean Code, SOLID) na narrativa.
   - Corrigir typo `EKR` -> `AWS EKS` (confirmado com `Kubernetes` e `Amazon EKS` reais do projeto).
2. `data/skills.json`, `data/hero.json`, `data/sections.json`, `data/i18n.json`, `data/chrome.json`, `index.html`:
   - Atualizar `worksFor` para `"Nava | Tech for Business"` e `knowsAbout` com `Micronaut`, `Apache Kafka`, `Kubernetes`, `Grafana`.
   - Alinhar Hero (`Java`, `Spring Boot`, `Micronaut`, `AWS`, `React`, `Angular`), Highlights (incluindo idiomas do LinkedIn), Skills (`Backend` e `Cloud e DevOps`), Educação (ordem reversa + anos/status reais do LinkedIn) e SEO/JSON-LD.
3. `js/projects.js` e `css/styles.css` (+ artefatos `css/styles.min.css` e `js/main.min.js`):
   - Renderizar `role` e `period` nos cards de projeto com acessibilidade e responsividade.
4. Validação completa:
   - `npm run build` (`verify:metadata` + `build:css` + `build:js`)
   - `pwsh -NoProfile -File scripts/validate.ps1 -Mode fast`
   - Smoke test visual em `http://localhost:8000/` (desktop e mobile, troca `PT/EN/ES`).

## 2. Constraints, Alternatives & Rationale

- **Stack estática sem dependências de runtime**: manter HTML semântico, CSS com variáveis e JS vanilla modular (`Projects` IIFE).
- **Alternativa avaliada para competências**: incluir todas as 24 tags do LinkedIn (incluindo `Tecnologia da informação`, `Desenvolvimento de software`, `POO`, `Engenharia de Software`) vs. filtrar badges para stack técnica real e mover conceitos/princípios para a descrição. **Decisão**: manter `tech-badge` focado em stack técnica para preservar equilíbrio visual do grid e legibilidade em mobile.
- **Alternativa avaliada para `EKR`**: manter literal ou substituir por `AWS EKS` / `AWS ECR`. **Decisão**: usar `AWS EKS` na Nava (alinhado a `Amazon EKS` + `Kubernetes`) e incluir `AWS ECR` no PartnerBank (ECS + Docker).
- **Ordem dos projetos**: inverter para cronológica reversa (`Nava -> PartnerBank -> Vetta/Usiminas -> Preflight Prompt`) destacando cargo atual e iniciativa open-source.

## 3. Execution DAG (`orchestrate-multi-agents`)

- **T1 [Orchestrator]**: registrar plano e `tasks/todo.md` (atual).
- **T2 [Architect/Tech Lead]**: validar ícones Font Awesome 6 via Context7 (`/websites/fontawesome_web`) e contrato de dados/metadados.
- **T3 [Implementer Data/SEO]**: atualizar `data/*.json` e `index.html`. *(Depende: T1, T2)*
- **T4 [Implementer Frontend]**: atualizar `js/projects.js` e `css/styles.css`. *(Depende: T2; paralelo seguro com T3 sem tocar mesmos arquivos)*
- **T5 [Security & Code Review]**: auditar links (`sanitizeLinkUrl`), JSON válido, XSS safety (`textContent`), responsividade e coerência `pt-BR`/`en`/`es`. *(Depende: T3, T4)*
- **T6 [QA/Tester]**: executar `npm run build`, `validate.ps1 -Mode fast` e smoke test no navegador em `http://localhost:8000/`. *(Depende: T5)*
- **T7 [Docs/Release]**: atualizar `plans/*.prompt.md` (`completed`) e `tasks/todo.md` com evidências. *(Depende: T6)*

## 4. Decision Log

- **D1**: Aprovado pelo usuário em 2026-11-24 — Nava assume `current: true` e `worksFor`; PartnerBank passa para `current: false` no passado e recebe `AWS ECR`.
- **D2**: Aprovado pelo usuário em 2026-11-24 — Ordem cronológica reversa nos projetos; corrigir `EKR` para `AWS EKS`; manter badges focados em stack técnica.
- **D3**: Aprovado pelo usuário em 2026-11-24 — Aplicar todas melhorias identificadas no LinkedIn, incluindo `Preflight Prompt` e excluindo `Snake SDD`.
- **D4**: Consentimento explícito do usuário concedido em 2026-11-24 para uso do MCP Context7 (`~/.gemini/antigravity/mcp_config.json`, `CONTEXT7_API_KEY`).

## 5. Completion Update (Append-Only)

- **Status**: `completed` (2026-11-24)
- **Alterações aplicadas**:
  - `data/projects.json`: adicionado projeto Nava | Tech for Business — Banco Inter (`id: 3`, `current: true`, `AWS EKS` corrigido, links Nava e Banco Inter), atualizado PartnerBank (`id: 2`, `current: false`, passado, `AWS ECR`), padronizado Vetta/Usiminas (`id: 1`) e adicionado Preflight Prompt (`id: 4`, GitHub `jonnxpr/preflight-prompt`), todos com `role` e `period` em `pt-BR`/`en`/`es`.
  - `data/skills.json`, `data/hero.json`, `data/sections.json`, `data/i18n.json`, `data/chrome.json`, `index.html`: alinhados ao LinkedIn (`worksFor: Nava | Tech for Business`, `Micronaut`, `Apache Kafka`, `Kubernetes`, `Grafana`, `AWS`, idiomas nos destaques, datas/status na educação, SEO e `#person-schema`).
  - `js/projects.js` e `css/styles.css` (+ minificados `js/main.min.js` e `css/styles.min.css`): renderização segura (`textContent`) de `.project-card__meta` (`role` e `period`) responsiva.
- **Evidências de validação**:
  - `npm.cmd run build` (`verify:metadata`, `cleancss`, `terser`): PASS.
  - `py -3 tools/governance/verify-precedence.py` = `0`; `py -3 tools/governance/audit-compliance.py` = `100`.
  - Smoke test no navegador em `http://localhost:8000/` (1280×800 e 375×812, `pt-BR`/`en`/`es`): 0 erros de console, 19/19 HTTP 200, 0 overflow horizontal, 4 cards renderizados na ordem esperada.
  - Ajuste pós-smoke test: removido `"Open Source"` duplicado de `role` no card 4 (`Autor` / `Author` / `Autor`) + revalidação pós-edição.
