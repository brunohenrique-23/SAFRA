# Safra · caderno de campo do produtor

Site de apresentação + app (celular e computador) com login e dados na nuvem (Supabase).

## Estrutura

```
safra/
├── index.html          ← site de apresentação (página inicial)
├── app/
│   ├── index.html      ← o app (celular e PC)
│   └── config.js       ← URL e chave pública do Supabase (você preenche)
├── supabase/
│   └── schema.sql      ← script do banco: tabela, segurança e pasta de fotos
└── README.md
```

Links depois de publicar no Render:
- `https://SEU-SITE.onrender.com/` → site de apresentação
- `https://SEU-SITE.onrender.com/app/` → app

## 1. Supabase (banco de dados + login)

1. Crie uma conta em https://supabase.com e clique em **New project**. Escolha um nome (ex.: `safra`), crie uma senha do banco (guarde) e a região **South America (São Paulo)**.
2. Quando o projeto terminar de criar, abra **SQL Editor → New query**, cole todo o conteúdo de `supabase/schema.sql` e clique em **Run**. Deve aparecer "Success".
3. Abra **Project Settings → API** (em projetos novos pode aparecer como **Data API** e **API Keys**) e copie:
   - **Project URL** (ex.: `https://abcd1234.supabase.co`)
   - a chave **anon public** (ou **publishable**)
4. Cole os dois em `app/config.js`. Nunca use a chave `service_role` / `secret`.
5. Em **Authentication → URL Configuration**:
   - **Site URL**: `https://SEU-SITE.onrender.com/app/`
   - **Redirect URLs**: adicione `https://SEU-SITE.onrender.com/app/` e `http://127.0.0.1:5500/app/` (para testar com o Live Server)

Para testar sem precisar confirmar e-mail: **Authentication → Sign In / Providers → Email** → desligue **Confirm email**. Em produção, deixe ligado.

## 2. Testar no computador

Abra a pasta no VS Code e rode o **Live Server** no `index.html` da raiz. O app fica em `http://127.0.0.1:5500/app/`.

Com o `config.js` vazio, o app funciona sem login, só no aparelho.

## 3. Publicar (GitHub + Render)

No VS Code: **Source Control → mensagem → Commit → Sync Changes**. O Render publica sozinho.

Configuração do Static Site no Render: Build Command vazio e **Publish Directory** `.` (ponto).

## Como os dados funcionam

- Cada conta tem uma linha na tabela `safra_dados` com todos os talhões, registros, tarefas e checklist.
- As fotos vão para a pasta privada `fotos/<id-do-usuario>/` no Storage do Supabase.
- As regras de segurança (RLS) garantem que cada usuário só lê e altera os próprios dados.
- Sem internet, o app salva no aparelho e envia quando a conexão volta.
- Quem usava sem conta e cria uma conta depois leva os dados do aparelho junto.
