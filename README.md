# Safra · caderno de campo do produtor

Site de apresentação + app (celular e computador) com login e dados na nuvem (Firebase, do Google).

## Estrutura

```
safra/
├── index.html              ← site de apresentação
├── app/
│   ├── index.html          ← o app (celular e PC)
│   └── config.js           ← configuração do Firebase (você preenche)
├── firebase/
│   └── firestore.rules     ← regras de segurança do banco
└── README.md
```

- `https://safra-07nh.onrender.com/` → site
- `https://safra-07nh.onrender.com/app/` → app

## 1. Criar o projeto no Firebase (grátis, sem cartão)

1. Entre em https://console.firebase.google.com com sua conta Google → **Criar um projeto** → nome `safra` → pode desativar o Google Analytics → **Criar projeto**.
2. Na tela do projeto, clique no ícone **</>** (Web) → apelido `safra-web` → **Registrar app** (não marque Firebase Hosting). Copie o bloco `firebaseConfig` que aparece.
3. Cole os valores em `app/config.js`, dentro de `firebase: { ... }`.

## 2. Ativar o login

1. Menu **Criação → Authentication → Vamos começar**.
2. Aba **Método de login**:
   - **E-mail/senha** → Ativar → Salvar. Aceita qualquer e-mail: Gmail, Outlook, Hotmail, iCloud, Yahoo…
   - **Google** → Ativar → escolha o e-mail de suporte → Salvar. Não precisa de mais nada.
3. Aba **Configurações → Domínios autorizados → Adicionar domínio**:
   - `safra-07nh.onrender.com`
   - `127.0.0.1` (para testar com o Live Server; `localhost` já vem na lista)

### Outros botões (opcionais)

O endereço de retorno pedido por esses serviços aparece na própria tela do provedor no Firebase. É algo como `https://SEU-PROJETO.firebaseapp.com/__/auth/handler`.

- **Microsoft (Outlook/Hotmail)**: portal.azure.com → Microsoft Entra ID → Registros de aplicativo → Novo registro → "contas em qualquer diretório organizacional e contas Microsoft pessoais" → URI de redirecionamento (Web) = endereço de retorno do Firebase. Em "Certificados e segredos" crie um segredo. No Firebase, ative **Microsoft** e cole o ID do aplicativo e o segredo.
- **GitHub**: github.com → Settings → Developer settings → OAuth Apps → New OAuth App → Authorization callback URL = endereço de retorno do Firebase. No Firebase, ative **GitHub** e cole Client ID e Client Secret.
- **Apple**: exige Apple Developer Program (US$ 99/ano).

Depois, liste em `app/config.js` só os que você ativou:

```js
provedores: ["google", "microsoft", "github"]
```

## 3. Criar o banco (Firestore)

1. Menu **Criação → Firestore Database → Criar banco de dados**.
2. Local: `southamerica-east1 (São Paulo)` → **Iniciar no modo de produção** → Criar.
3. Aba **Regras**: apague tudo, cole o conteúdo de `firebase/firestore.rules` e clique em **Publicar**.

As fotos do diário ficam dentro do próprio Firestore, comprimidas. Assim não é preciso o Cloud Storage, que hoje exige plano pago.

## 4. Publicar

No VS Code: **Source Control → mensagem → Commit → Sync Changes**. O Render publica sozinho.
