# Portfólio - Documentação

Site single page responsivo para apresentar projetos, habilidades e informações profissionais de Jonathan Douglas Diego Tavares. O conteúdo principal é carregado dinamicamente de arquivos JSON e a experiência visual é construída com HTML, CSS e JavaScript vanilla.

## Governanca compartilhada

- A memoria compartilhada de governanca, templates reutilizaveis e notas de rollout que precisam evoluir fora do historico do site agora possuem repositorio irmao dedicado: `~/Documentos/portfolio-governance` (`https://github.com/jonnxpr/portfolio-governance`).
- Este repositorio `Portfolio/` continua sendo a fonte de verdade para codigo, conteudo, assets, specs repo-locais e instrucoes que precisam permanecer junto do produto.

## Características

- Single page responsiva com navegação suave
- Conteúdo orientado a dados em `data/*.json`
- CSS e JavaScript minificados para publicação
- Módulos JavaScript separados por responsabilidade
- Metadados públicos sincronizados a partir de `data/chrome.json`
- HTML semântico com foco em acessibilidade

## Estrutura do projeto

```text
portfolio/
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── LICENSE
├── AGENTS.md
├── CLAUDE.md
├── PRE-FLIGHT.md
├── PROJECT_STRUCTURE.txt
├── opencode.json
├── assets/
│   ├── icons/
│   └── illustrations/
├── css/
│   ├── styles.css
│   └── styles.min.css
├── data/
│   ├── chrome.json
│   ├── hero.json
│   ├── i18n.json
│   ├── projects.json
│   ├── sections.json
│   └── skills.json
├── js/
│   ├── animations.js
│   ├── chrome.js
│   ├── hero.js
│   ├── i18n.js
│   ├── main.js
│   ├── main.min.js
│   ├── navigation.js
│   ├── projects.js
│   ├── sections.js
│   └── skills.js
├── scripts/
│   ├── discover-git-repo.sh
│   ├── prepare-pages-artifact.mjs
│   ├── start-static.mjs
│   ├── validate.ps1
│   ├── validate.sh
│   └── verify-metadata-sync.mjs
├── tasks/
└── tools/
```

## Scripts disponíveis

```bash
npm start              # servidor Node local em http://localhost:8000
npm run start:localhost
npm run start:127      # servidor Node local em http://127.0.0.1:8000
npm run start:all      # servidor em todas as interfaces da máquina
npm run verify:metadata
npm run build:css
npm run watch:css
npm run build:js
npm run build
npm run prepare:pages
npm run verify:metadata:artifact
```

## Desenvolvimento local

### 1. Instalar dependências

```bash
npm install
```

### 2. Iniciar o servidor local

Uso padrão:

```bash
npm start
```

Os scripts de start usam o servidor estatico em `scripts/start-static.mjs`, sem depender de Python local.

Validacoes rapidas multiplataforma:

```bash
bash scripts/validate.sh fast
pwsh -NoProfile -File scripts/validate.ps1 -Mode fast
```

Outras opções úteis:

```bash
npm run start:localhost
npm run start:127
npm run start:all
```

### 3. Trabalhar no CSS com minificação contínua

O `index.html` usa `css/styles.min.css`. Por isso, durante alterações de estilo, o fluxo recomendado é manter o watcher ativo:

```bash
npm run watch:css
```

Esse comando observa `css/styles.css` e regenera `css/styles.min.css` automaticamente.

## Build e minificação

### CSS

```bash
npm run build:css
```

Minifica `css/styles.css` em `css/styles.min.css`.

### JavaScript

```bash
npm run build:js
```

Concatena e minifica os módulos JavaScript em `js/main.min.js`.

### Build completo

```bash
npm run build
```

Executa, nesta ordem:

1. Validação de metadados com `npm run verify:metadata`
2. Minificação do CSS
3. Minificação do JavaScript

## Publicação no GitHub Pages

### Configuração atual

- Repositório: `https://github.com/jonnxpr/portfolio.git`
- URL pública: `https://jonnxpr.github.io/portfolio/`
- Os caminhos de assets são relativos, então não é necessário usar `<base>`
- Canonical, Open Graph, Twitter Card e JSON-LD são derivados de `data/chrome.json`

### Preparar artefato de publicação

```bash
npm run prepare:pages
```

Esse comando cria `.pages-artifact/` apenas com os arquivos necessários para o deploy.

### Validar o artefato final

```bash
npm run verify:metadata:artifact
```

### Fluxo recomendado antes de publicar

```bash
npm run build
npm run prepare:pages
npm run verify:metadata:artifact
```

## Fonte dos dados

- `data/chrome.json`: perfil público, links globais, contatos e metadados
- `data/hero.json`: conteúdo principal da hero e CTAs
- `data/i18n.json`: dicionário de textos localizados
- `data/projects.json`: lista de projetos
- `data/sections.json`: highlights, educação, blocos auxiliares e CTAs finais
- `data/skills.json`: grupos de habilidades

## Como atualizar conteúdo

### Adicionar ou editar projetos

Atualize `data/projects.json` com a estrutura já usada pelos demais itens. Cada projeto deve manter os mesmos campos esperados pelo renderizador, incluindo título, descrição, tecnologias, ícone e links.

### Atualizar contatos e metadados públicos

Edite `data/chrome.json`. Esse arquivo centraliza:

- links de contato globais
- dados de perfil
- URL pública do site
- imagens sociais
- metadados reutilizados no `index.html`

### Atualizar textos multilíngues

Edite `data/i18n.json` e mantenha as chaves coerentes com o código existente.

## Convenção de layout

- Wrappers visuais com borda, fundo ou raio devem ficar dentro de um `.container`, nunca combinar a classe visual com o próprio `container`
- Para esses casos, prefira um painel interno com a classe utilitária `.section-panel`

## Arquitetura da interface

### Navbar

- Navegação fixa com links de seção
- Seletor de idioma visual customizado, sincronizado com um `select` nativo oculto para semântica e estado
- Ícones de contato globais renderizados a partir de `data/chrome.json`
- Menu colapsável em mobile

### Hero

- Nome, subtítulo e descrição
- Stack principal renderizado de `data/hero.json`
- CTAs vindos de `data/hero.json`

### Education

- Linha do tempo derivada de `data/sections.json`

### Skills

- Grid dinâmico renderizado de `data/skills.json`

### Projects

- Grid de cards renderizado de `data/projects.json`

### Opportunities e Footer

- Blocos finais e contatos reaproveitando dados de `data/chrome.json` e `data/sections.json`

## Stack tecnológica

- HTML5 semântico
- CSS3 com variáveis, Grid, Flexbox e media queries
- JavaScript vanilla modular
- Bootstrap 5 via CDN
- Font Awesome via CDN
- JSON como fonte de conteúdo dinâmico
- `clean-css-cli` para minificação de CSS
- `terser` para minificação de JavaScript
- `chokidar-cli` para observar mudanças no CSS durante o desenvolvimento

## Acessibilidade e responsividade

- Estrutura semântica com `nav`, `main`, `section` e `footer`
- Navegação por teclado
- Contraste visual planejado para leitura e foco
- Comportamento responsivo para mobile, tablet e desktop

## Privacidade

Este projeto é um site estático e não coleta dados de visitantes.

## Licença

Projeto disponibilizado sob licença MIT.

---

Última atualização: Janeiro de 2026

Autor: Jonathan Douglas Diego Tavares

Versão: 1.0.0

Licença: MIT
