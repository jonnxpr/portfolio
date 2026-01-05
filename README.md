# Portfólio - Documentação

Bem-vindo ao meu portfólio! Este é um site single page responsivo que apresenta meus projetos e habilidades como Full Stack Developer.

## 🎨 Características

- **Design Cyberpunk Minimalista**: Tema dark com neons sutis (cian e magenta)
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Single Page**: Navegação fluida e intuitiva com smooth scroll
- **Performance Otimizada**: CSS e JavaScript minificados
- **Lazy Loading**: Imagens carregam sob demanda
- **Acessível**: HTML5 semântico, WCAG compliant

## 📁 Estrutura do Projeto

```
portfolio/
├── index.html              # Arquivo HTML principal
├── css/
│   ├── styles.css         # CSS fonte (non-minificado, para desenvolvimento)
│   └── styles.min.css     # CSS minificado (para produção)
├── js/
│   ├── navigation.js      # Módulo de navegação e smooth scroll
│   ├── projects.js        # Módulo de renderização de projetos
│   ├── main.js            # Módulo principal e inicialização
│   └── main.min.js        # Bundle JavaScript minificado (para produção)
├── data/
│   └── projects.json      # Dados dos projetos
├── assets/
│   └── icons/             # Ícones personalizados (pasta para expansão futura)
├── .github/
│   └── workflows/         # CI/CD para GitHub Pages (pasta vazia - expandir se necessário)
├── README.md              # Este arquivo
└── .gitignore             # Arquivos ignorados pelo Git
```

## 🚀 Como Usar

### 1. Adicionar um Novo Projeto

Para adicionar um novo projeto ao portfólio, edite o arquivo `data/projects.json` e adicione um novo objeto ao array:

```json
{
  "id": 5,
  "title": "Seu Título de Projeto",
  "description": "Descrição completa do seu projeto. Explique o que ele faz e por que é importante.",
  "technologies": ["Tecnologia1", "Tecnologia2", "Tecnologia3"],
  "icon": "<i class='fas fa-código'></i>",
  "links": {
    "github": "https://github.com/seuusuario/seu-projeto",
    "demo": "https://seu-projeto-demo.com"
  }
}
```

### Campos Explicados:
- **id**: Identificador único numérico
- **title**: Nome do projeto (máx. 50 caracteres recomendado)
- **description**: Descrição clara e concisa do projeto
- **technologies**: Array com nomes das tecnologias usadas
- **icon**: Ícone Font Awesome. Veja opções em: https://fontawesome.com/icons
- **links**: Objeto com URLs (apenas GitHub é obrigatório, demo é opcional)

### 2. Personalizar Cores

Abra `css/styles.css` e modifique as variáveis CSS no `:root`:

```css
:root {
  --color-bg-primary: #0a0e27;           /* Fundo primário */
  --color-neon-cian: #00d9ff;            /* Cor neon cian */
  --color-neon-magenta: #ff00ff;         /* Cor neon magenta */
  --color-text-primary: #e0e0e0;         /* Texto primário */
  /* ... outras variáveis */
}
```

Após modificar `styles.css`, regenere `styles.min.css` minificando novamente.

### 3. Tipografia e Espaçamento

Todas as variáveis de tipografia e espaçamento estão no `:root` de `css/styles.css`:

```css
--font-main: /* Fonte principal para textos */
--font-mono: /* Fonte monospace para destaque */
--spacing-base: /* Unidade base de espaçamento (1rem) */
/* ... outras variáveis */
```

## 🔧 Minificação

### CSS
1. Abra um minificador online: https://cssminifier.com
2. Cole o conteúdo de `css/styles.css`
3. Copie o resultado minificado
4. Cole em `css/styles.min.css`

### JavaScript
1. Abra um minificador online: https://javascript-minifier.com
2. Cole o conteúdo de `js/navigation.js`, `js/projects.js` e `js/main.js` em sequência
3. Copie o resultado minificado
4. Cole em `js/main.min.js`

**Alternativa com Node.js:**
```bash
npm install -g terser clean-css-cli
terser js/navigation.js js/projects.js js/main.js -o js/main.min.js -c -m
cleancss css/styles.css -o css/styles.min.css
```

## 📱 Responsividade

O site é totalmente responsivo com breakpoints otimizados:
- **Mobile**: < 480px
- **Tablet**: 480px - 767px
- **Desktop**: 768px+

Teste em diferentes tamanhos usando o DevTools do navegador (F12).

## 🌐 Deploy no GitHub Pages

### Opção 1: Repositório `username.github.io`
1. Crie um repositório com nome `jonnxpr.github.io`
2. Clone para sua máquina
3. Copie os arquivos do portfólio para a raiz
4. Execute:
```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
```
5. O site estará disponível em `https://jonnxpr.github.io`

### Opção 2: Repositório com nome customizado
1. Crie um repositório `portfolio` (ou outro nome)
2. Adicione ao `index.html` antes de `</head>`:
```html
<base href="/portfolio/">
```
3. Configure GitHub Pages em: Settings → Pages → Deploy from branch → main
4. O site estará disponível em `https://jonnxpr.github.io/portfolio`

### Atualizar o site
```bash
# Faça suas alterações
git add .
git commit -m "Sua mensagem de commit"
git push origin main
# O site será atualizado automaticamente!
```

## 📚 Stack Tecnológico

- **HTML5**: Semântico e acessível
- **CSS3**: Grid, Flexbox, Variáveis CSS, Media Queries
- **JavaScript Vanilla**: Sem dependências externas (exceto Bootstrap e Font Awesome via CDN)
- **Bootstrap 5**: Via CDN para componentes responsivos
- **Font Awesome 6**: Via CDN para ícones
- **JSON**: Para dados dinâmicos de projetos

## ♿ Acessibilidade

O portfólio segue boas práticas de acessibilidade:
- HTML semântico com `<nav>`, `<main>`, `<section>`, `<footer>`
- Atributos ARIA quando necessário
- Contraste adequado de cores
- Navegação por teclado completa
- Alt text para imagens (quando adicionadas)

## 🎯 Seções do Site

### Navbar
Navegação fixa no topo com:
- Logo/marca pessoal (JDT)
- Links de navegação (Sobre, Habilidades, Projetos)
- Ícones de contato (Email, LinkedIn, GitHub)
- Menu responsivo (hambúrguer em mobile)

### Hero Section
Apresentação profissional com:
- Nome completo
- Subtítulo e descrição
- Stack principal com ícones
- Botões CTA (Ver Projetos / Entre em Contato)

### Skills Section
Grid com 4 categorias:
- Backend (Java, Spring Boot, etc)
- Frontend (React, Angular, JavaScript)
- Databases (MySQL, PostgreSQL, MongoDB, Firebase)
- Cloud (AWS Services)

### Projects Section
Grid dinâmica carregada de `data/projects.json`:
- Ícone do projeto
- Título e descrição
- Badges de tecnologias
- Links (GitHub e Demo)
- Animações ao scroll

### Footer
Rodapé minimalista com:
- Copyright
- Ícones de contato (repetidos)
- Links funcionais

## 🎨 Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Fundo Primário | #0a0e27 | Background |
| Fundo Secundário | #1a1f3a | Cards, componentes |
| Texto Primário | #e0e0e0 | Textos principais |
| Texto Secundário | #a0a0a0 | Descrições, labels |
| Neon Cian | #00d9ff | Destaque, hover |
| Neon Magenta | #ff00ff | Acentos secundários |

## 📧 Dados de Contato

- **Email**: joninf95@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/jonathan-douglas-3014b1b3/
- **GitHub**: https://github.com/jonnxpr

## 🔒 Privacidade

Este portfólio não coleta dados de visitantes. É um site estático hospedado no GitHub Pages.

## 📄 Licença

Este projeto é open source. Sinta-se livre para usá-lo como referência ou base para seu próprio portfólio.

---

**Última atualização**: Janeiro 2026

**Autor**: Jonathan Douglas Diego Tavares

**Versão**: 1.0.0
