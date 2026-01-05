# Guia de Deployment - GitHub Pages

Este documento fornece instruções detalhadas para fazer deploy do portfólio no GitHub Pages.

## 📋 Pré-requisitos

- Conta GitHub (gratuita em https://github.com)
- Git instalado na máquina (https://git-scm.com)
- Terminal/Prompt de Comando

## 🚀 Método 1: Repositório com nome de usuário (RECOMENDADO)

Este método cria um site em `https://jonnxpr.github.io` (seu domínio padrão).

### Passo 1: Criar Repositório no GitHub

1. Acesse https://github.com/new
2. Nome do repositório: **jonnxpr.github.io** (importante: use exatamente este nome com seu usuário)
3. Descrição (opcional): "Meu Portfólio Profissional"
4. Selecione: **Public** (essencial para GitHub Pages)
5. Clique em **Create repository**

### Passo 2: Configurar Git Localmente

Abra o Terminal/Prompt de Comando na pasta do portfólio:

```bash
# Inicializar repositório Git (se não existir)
git init

# Adicionar repositório remoto
git remote add origin https://github.com/jonnxpr/jonnxpr.github.io.git

# Adicionar todos os arquivos
git add .

# Criar primeiro commit
git commit -m "Initial portfolio commit"

# Enviar para GitHub (branch main ou master, conforme configurado)
git branch -M main
git push -u origin main
```

### Passo 3: Ativar GitHub Pages

1. Vá para: https://github.com/jonnxpr/jonnxpr.github.io
2. Clique em **Settings** (Configurações)
3. Navegue para **Pages** (no menu esquerdo)
4. Em "Build and deployment", selecione:
   - Source: **Deploy from a branch**
   - Branch: **main** (ou master)
   - Folder: **/ (root)**
5. Clique em **Save**

### Passo 4: Verificar Deployment

1. Aguarde 1-2 minutos
2. Acesse: **https://jonnxpr.github.io**
3. Seu portfólio deve estar live! 🎉

### Atualizar o Site (após mudanças)

```bash
# Após fazer alterações nos arquivos
git add .
git commit -m "Descrição da alteração"
git push origin main

# GitHub Pages será atualizado automaticamente em 1-2 minutos
```

---

## 🌐 Método 2: Repositório com Nome Customizado

Use este método se desejar um repositório com nome diferente (ex: `portfolio`).

### Passo 1: Criar Repositório no GitHub

1. Acesse https://github.com/new
2. Nome do repositório: **portfolio** (ou qualquer outro nome)
3. Descrição (opcional): "Meu Portfólio Profissional"
4. Selecione: **Public**
5. Clique em **Create repository**

### Passo 2: Adicionar Base URL ao `index.html`

Edite `index.html` e adicione esta linha dentro de `<head>`:

```html
<base href="/portfolio/">
```

**Localização completa:**
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <base href="/portfolio/">  <!-- ADICIONE ESTA LINHA -->
    <title>Jonathan Douglas Diego Tavares - Full Stack Developer</title>
    ...
</head>
```

### Passo 3: Enviar para GitHub

```bash
git init
git remote add origin https://github.com/jonnxpr/portfolio.git
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git push -u origin main
```

### Passo 4: Ativar GitHub Pages

1. Vá para: https://github.com/jonnxpr/portfolio
2. Clique em **Settings**
3. Navegue para **Pages**
4. Source: **Deploy from a branch**
5. Branch: **main**
6. Folder: **/ (root)**
7. Clique em **Save**

### Passo 5: Acessar o Site

Seu portfólio estará em: **https://jonnxpr.github.io/portfolio**

---

## 🔄 Workflow de Atualização Diário

Após fazer qualquer mudança nos arquivos:

```bash
# 1. Ver quais arquivos foram alterados
git status

# 2. Adicionar as mudanças
git add .

# 3. Criar um commit descritivo
git commit -m "Descrição clara da mudança"

# 4. Enviar para GitHub
git push origin main

# 5. Aguardar 1-2 minutos para GitHub Pages processar
# Verificar: https://jonnxpr.github.io (ou seu URL customizado)
```

### Exemplos de Commits Descritivos

```bash
git commit -m "Add new project: E-commerce Platform"
git commit -m "Update skills section with AWS"
git commit -m "Fix responsive design on mobile"
git commit -m "Optimize images and minify CSS"
git commit -m "Update contact information"
```

---

## ✅ Checklist Pré-Deploy

Antes de fazer push para GitHub:

- [ ] Todos os arquivos CSS/JS minificados estão em lugar
- [ ] `projects.json` contém seus projetos atualizados
- [ ] Links de contato (Email, LinkedIn, GitHub) estão corretos
- [ ] Testou em mobile, tablet e desktop localmente
- [ ] Sem erros no console do navegador (F12)
- [ ] Imagens/ícones carregam corretamente
- [ ] Links internos (smooth scroll) funcionam
- [ ] Links externos abrem em nova aba

---

## 🐛 Troubleshooting

### Site não aparece em GitHub Pages

- [ ] Verificar se repositório é **Public**
- [ ] Ir para Settings → Pages e confirmar configurações
- [ ] Aguardar 5 minutos (às vezes demora mais na primeira vez)
- [ ] Limpar cache do navegador (Ctrl+Shift+Delete)

### Estilo CSS não está aplicando

- [ ] Verificar se `styles.min.css` está na pasta `/css`
- [ ] Verificar caminho relativo em `index.html`: `<link rel="stylesheet" href="css/styles.min.css">`
- [ ] Verificar console do navegador (F12 → Console)

### Projetos não aparecem

- [ ] Verificar se `projects.json` está em `/data`
- [ ] Verificar se JSON está com sintaxe válida
- [ ] Abrir console do navegador para ver erros
- [ ] Verificar se URL `fetch('data/projects.json')` está correta

### Navegação com Fetch não funciona em file://

Isso é normal! Use sempre um servidor local:
```bash
python -m http.server 8000
# ou
npx http-server
# ou acesse direto no GitHub Pages
```

---

## 📊 Monitorar Tráfego

Após deployment:

1. Acesse: https://github.com/jonnxpr/jonnxpr.github.io (ou seu repo)
2. Clique em **Insights** → **Traffic**
3. Veja quantas pessoas visitaram seu portfólio

---

## 🔐 Segurança

- ✅ Nenhuma informação sensível em arquivos públicos
- ✅ Nenhuma chave/token no repositório
- ✅ Repository é público, mas contém apenas código portfolio
- ✅ Email está protegido (aberta em client de email apenas)

---

## 📞 Suporte

Se tiver dúvidas com GitHub Pages:
- Documentação oficial: https://docs.github.com/en/pages
- Status: https://www.githubstatus.com

---

**Última atualização**: Janeiro 2026
