# 🚀 Start Here - Comece Aqui

Bem-vindo ao seu portfólio! Este arquivo contém tudo que você precisa saber para começar.

## ⚡ Quick Start (5 minutos)

### 1. Executar Localmente
```bash
# Abra Terminal/Prompt na pasta do portfólio
python -m http.server 8000

# Acesse no navegador:
# http://localhost:8000
```

### 2. Adicionar Seu Primeiro Projeto
Edite `data/projects.json` e adicione:
```json
{
  "id": 5,
  "title": "Seu Projeto",
  "description": "Descrição aqui",
  "technologies": ["Tech1", "Tech2"],
  "icon": "<i class='fas fa-code'></i>",
  "links": { "github": "seu-link" }
}
```

### 3. Deploy no GitHub Pages
Siga: [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 📁 Estrutura Essencial

```
├── index.html           ← Arquivo principal (abra este!)
├── data/projects.json   ← Edite aqui seus projetos
├── css/styles.min.css   ← Estilos (não edite - use styles.css)
├── js/main.min.js       ← Scripts (não edite - use js/*)
├── README.md            ← Documentação completa
└── DEPLOYMENT.md        ← Guia GitHub Pages
```

---

## 🎨 Personalizações Comuns

### Mudar Cores
Edite `css/styles.css`:
```css
:root {
  --color-neon-cian: #00d9ff;      /* Azul cian */
  --color-neon-magenta: #ff00ff;   /* Rosa/magenta */
  --color-bg-primary: #0a0e27;     /* Fundo */
  --color-text-primary: #e0e0e0;   /* Texto */
}
```

### Atualizar Informações Pessoais
Edite `index.html` e busque:
- `Jonathan Douglas Diego Tavares` → seu nome
- `joninf95@gmail.com` → seu email
- `linkedin.com/in/...` → seu LinkedIn
- `github.com/jonnxpr` → seu GitHub

### Adicionar Ícone Font Awesome
Copie o ícone de: https://fontawesome.com/icons
Exemplo: `<i class="fas fa-heart"></i>`

---

## ⚙️ Ferramentas

### Minificar CSS (opcional)
```bash
# Online: https://cssminifier.com
# Ou comando: terser, cleancss-cli (veja package.json)
```

### Minificar JS (opcional)
```bash
# Online: https://javascript-minifier.com
# Ou: npm run build (após instalar dependências)
```

---

## ✅ Checklist Inicial

- [ ] Editei `data/projects.json` com meus projetos?
- [ ] Atualizei nome/email/links no `index.html`?
- [ ] Testei localmente com `python -m http.server 8000`?
- [ ] Criei repositório GitHub `jonnxpr.github.io`?
- [ ] Fiz push do código para GitHub?
- [ ] GitHub Pages está habilitado em Settings?
- [ ] Site está live em `https://jonnxpr.github.io`?

---

## 📞 Contatos Rápidos

**Email**: joninf95@gmail.com  
**LinkedIn**: https://www.linkedin.com/in/jonathan-douglas-3014b1b3/  
**GitHub**: https://github.com/jonnxpr

---

## 📚 Próximos Passos

1. ✅ **Agora**: Editar seus dados (projetos, nome, contato)
2. ⏭️ **Depois**: Deploy no GitHub Pages
3. 🎯 **Futuro**: Adicionar mais projetos, otimizar SEO, analytics

---

## 🎓 Aprenda Mais

- CSS Variables: https://developer.mozilla.org/en-US/docs/Web/CSS/--*
- CSS Grid: https://css-tricks.com/snippets/css/complete-guide-grid/
- Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- GitHub Pages: https://docs.github.com/en/pages

---

**Última atualização**: Janeiro 2026  
**Versão**: 1.0.0

Boa sorte! 🚀
