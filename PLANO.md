# 📋 Plano do projeto: SK-Juridico-1.7.1-C

_Gerado em 30/10/2026, 15:35:35 — sem IA, lendo os arquivos._

## 📊 Visão geral
| Item | Valor |
|---|---|
| Arquivos | 382 |
| Linhas | 64.470 |
| Telas/páginas | 64 |
| Rotas do backend | 202 |
| Chamadas do app | 150 |
| Tabelas do banco | 20 |
| Variáveis de ambiente | 45 |

**Linguagens:** TypeScript (React) (222), TypeScript (74), Outros (21), JSON (15), JavaScript (13), YAML (10), Imagem (6), Imagem SVG (5), CSS (5), Shell (4), Markdown (4), HTML (3)

## 🧩 Apps dentro deste projeto
- _sobras-do-replit/lib/db (@workspace/db)
- electron (sk-juridico-desktop)

## 💡 O que fazer (em ordem)
1. 🧹 Tirar a Replit de 20 arquivo(s) (🏗️ Preparar → Fazer tudo)
2. 🖥️ O projeto tem backend próprio: para funcionar fora da Replit ele precisa ficar ligado num servidor (Render, Railway, Vercel) ou virar funções
3. 🔐 Criar um .env.example com: AI_INTEGRATIONS_OPENAI_API_KEY, AI_INTEGRATIONS_OPENAI_BASE_URL, API_URL, APP_PASSWORD, BASE_PATH, BASE_URL, BIRDID_CLIENT_ID, BIRDID_CLIENT_SECRET, DATABASE_URL, DATAJUD_API_KEY, ELECTRON_DATA_PATH, ELECTRON_MODE… (os valores você coloca no servidor, nunca no código)
4. 🗄️ Precisa de banco de dados (20 tabela(s)) — Neon ou Supabase servem, grátis
5. 📝 Criar um README.md explicando como rodar

## 🚀 Por onde começa
- `_sobras-do-replit/mockup-sandbox/files/index.html`
- `client/index.html`
- `client/src/App.tsx`
- `client/src/main.tsx`
- `electron/main.js`
- `server/app.ts`
- `server/index.ts`
- `server/routes/index.ts`

## ⌨️ Comandos (package.json)
| Pasta | Comando | O que roda |
|---|---|---|
| _sobras-do-replit/lib/db | `npm run push` | `drizzle-kit push --config ./drizzle.config.ts` |
| _sobras-do-replit/lib/db | `npm run push-force` | `drizzle-kit push --force --config ./drizzle.config.ts` |
| electron | `npm run start` | `electron .` |
| electron | `npm run dev` | `concurrently "node server.js" "electron . --dev"` |
| electron | `npm run build:win` | `electron-builder --win --x64` |
| electron | `npm run build:mac` | `electron-builder --mac` |
| electron | `npm run build:linux` | `electron-builder --linux AppImage deb` |
| electron | `npm run build:all` | `electron-builder --win --mac --linux` |
| . | `npm run dev` | `node iniciar.mjs` |
| . | `npm run tela` | `vite --host 0.0.0.0 --port 5173` |
| . | `npm run servidor` | `node build-server.mjs && node --enable-source-maps dist/server/index.mjs` |
| . | `npm run build` | `vite build && node build-server.mjs` |
| . | `npm run start` | `node --enable-source-maps dist/server/index.mjs` |
| . | `npm run index` | `vite build --mode index` |
| . | `npm run banco` | `drizzle-kit push --config drizzle.config.ts` |
| . | `npm run verificar` | `tsc --noEmit -p tsconfig.json` |

## 📱 Telas e páginas
| Endereço | Arquivo |
|---|---|
| `/` | _sobras-do-replit/react-vite/files/src/App.tsx |
| `/` | client/src/App.tsx |
| `/jurisprudencia` | client/src/App.tsx |
| `/assistente` | client/src/App.tsx |
| `/playground` | client/src/App.tsx |
| `/token` | client/src/App.tsx |
| `/comparador` | client/src/App.tsx |
| `/auditoria` | client/src/App.tsx |
| `/consulta` | client/src/App.tsx |
| `/painel` | client/src/App.tsx |
| `/corporativo` | client/src/App.tsx |
| `/pdpj` | client/src/App.tsx |
| `/tramitacao` | client/src/App.tsx |
| `/filtrador` | client/src/App.tsx |
| `/previdenciario` | client/src/App.tsx |
| `/robo-djen` | client/src/App.tsx |
| `/codigo` | client/src/App.tsx |
| `/comunicacoes` | client/src/App.tsx |
| `/configuracoes` | client/src/App.tsx |
| `/settings` | client/src/App.tsx |
| `/ementas` | client/src/App.tsx |
| `/historico` | client/src/App.tsx |
| `/admin` | client/src/App.tsx |
| `/prazos` | client/src/App.tsx |
| `/assinatura` | client/src/App.tsx |
| `/pje` | client/src/App.tsx |
| `/escritorio` | client/src/App.tsx |
| `/status` | client/src/App.tsx |
| `/templates` | client/src/App.tsx |
| `/colaborativo` | client/src/App.tsx |
| `/` | _sobras-do-replit/expo/files/app/(tabs)/index.tsx |
| `_sobras-do-replit/expo/files/server/templates/landing-page.html` | _sobras-do-replit/expo/files/server/templates/landing-page.html |
| `_sobras-do-replit/mockup-sandbox/files/index.html` | _sobras-do-replit/mockup-sandbox/files/index.html |
| `/not-found` | _sobras-do-replit/react-vite/files/src/pages/not-found.tsx |
| `client/index.html` | client/index.html |
| `/admin` | client/src/pages/admin.tsx |
| `/assinatura` | client/src/pages/assinatura.tsx |
| `/auditoria-financeira` | client/src/pages/auditoria-financeira.tsx |
| `/codigo` | client/src/pages/codigo.tsx |
| `/colaborativo` | client/src/pages/colaborativo.tsx |
| `/comparador-juridico` | client/src/pages/comparador-juridico.tsx |
| `/comunicacoes-cnj` | client/src/pages/comunicacoes-cnj.tsx |
| `/configuracoes` | client/src/pages/configuracoes.tsx |
| `/consulta-corporativo` | client/src/pages/consulta-corporativo.tsx |
| `/consulta-pdpj` | client/src/pages/consulta-pdpj.tsx |
| `/consulta-processual` | client/src/pages/consulta-processual.tsx |
| `/ementas` | client/src/pages/ementas.tsx |
| `/escritorio` | client/src/pages/escritorio.tsx |
| `/filtrador` | client/src/pages/filtrador.tsx |
| `/historico` | client/src/pages/historico.tsx |
| `/jurisprudencia` | client/src/pages/jurisprudencia.tsx |
| `/legal-assistant` | client/src/pages/legal-assistant.tsx |
| `/login` | client/src/pages/login.tsx |
| `/not-found` | client/src/pages/not-found.tsx |
| `/painel-processos` | client/src/pages/painel-processos.tsx |
| `/pje` | client/src/pages/pje.tsx |
| `/playground` | client/src/pages/playground.tsx |
| `/prazos` | client/src/pages/prazos.tsx |
| `/previdenciario` | client/src/pages/previdenciario.tsx |
| `/robo-djen` | client/src/pages/robo-djen.tsx |
| `/status` | client/src/pages/status.tsx |
| `/templates-juridicos` | client/src/pages/templates-juridicos.tsx |
| `/token-generator` | client/src/pages/token-generator.tsx |
| `/tramitacao` | client/src/pages/tramitacao.tsx |

## 🖥️ Rotas do backend
| Método | Rota | Arquivo |
|---|---|---|
| USE | `/api` | server/app.ts |
| USE | `/api/ai` | server/app.ts |
| GET | `/api/_erros` | server/cacador-erros.ts |
| DELETE | `/api/_erros` | server/cacador-erros.ts |
| POST | `/ai/process` | server/routes/ai.ts |
| POST | `/ai/refine` | server/routes/ai.ts |
| POST | `/code-assistant` | server/routes/ai.ts |
| POST | `/voice-chat` | server/routes/ai.ts |
| POST | `/demo-key-test` | server/routes/ai.ts |
| POST | `/ai-usage-credit` | server/routes/ai.ts |
| POST | `/assinatura/hash` | server/routes/assinatura.ts |
| POST | `/assinatura/birdid/authorize` | server/routes/assinatura.ts |
| POST | `/assinatura/birdid/token` | server/routes/assinatura.ts |
| GET | `/assinatura/birdid/certificado` | server/routes/assinatura.ts |
| POST | `/assinatura/birdid/assinar` | server/routes/assinatura.ts |
| POST | `/assinatura/vidaas/authorize` | server/routes/assinatura.ts |
| GET | `/assinatura/lista` | server/routes/assinatura.ts |
| POST | `/assinatura/verificar` | server/routes/assinatura.ts |
| GET | `/assinatura/config/status` | server/routes/assinatura.ts |
| POST | `/auth/escritorio/registro` | server/routes/auth-jwt.ts |
| POST | `/auth/escritorio/login` | server/routes/auth-jwt.ts |
| POST | `/auth/escritorio/refresh` | server/routes/auth-jwt.ts |
| POST | `/auth/escritorio/logout` | server/routes/auth-jwt.ts |
| GET | `/auth/escritorio/perfil` | server/routes/auth-jwt.ts |
| PUT | `/auth/escritorio/perfil` | server/routes/auth-jwt.ts |
| GET | `/auth/escritorio/usuarios` | server/routes/auth-jwt.ts |
| POST | `/auth/escritorio/usuario` | server/routes/auth-jwt.ts |
| DELETE | `/auth/escritorio/usuario/:id` | server/routes/auth-jwt.ts |
| GET | `/auth/escritorio/check` | server/routes/auth-jwt.ts |
| GET | `/collab/rooms` | server/routes/colaborativo.ts |
| POST | `/collab/rooms` | server/routes/colaborativo.ts |
| GET | `/collab/rooms/:id` | server/routes/colaborativo.ts |
| POST | `/collab/rooms/:id/join` | server/routes/colaborativo.ts |
| POST | `/collab/rooms/:id/update` | server/routes/colaborativo.ts |
| POST | `/collab/rooms/:id/cursor` | server/routes/colaborativo.ts |
| GET | `/collab/rooms/:id/events` | server/routes/colaborativo.ts |
| GET | `/collab/rooms/:id/history` | server/routes/colaborativo.ts |
| DELETE | `/collab/rooms/:id/leave` | server/routes/colaborativo.ts |
| GET | `/processos` | server/routes/compat.ts |
| GET | `/processos/:id` | server/routes/compat.ts |
| POST | `/processos` | server/routes/compat.ts |
| PATCH | `/processos/:id` | server/routes/compat.ts |
| DELETE | `/processos/:id` | server/routes/compat.ts |
| GET | `/djen/config` | server/routes/compat.ts |
| PUT | `/djen/config` | server/routes/compat.ts |
| POST | `/djen/gerar-token` | server/routes/compat.ts |
| GET | `/djen/clientes` | server/routes/compat.ts |
| POST | `/djen/clientes` | server/routes/compat.ts |
| DELETE | `/djen/clientes/:id` | server/routes/compat.ts |
| GET | `/djen/publicacoes` | server/routes/compat.ts |
| GET | `/djen/execucoes` | server/routes/compat.ts |
| POST | `/djen/executar` | server/routes/compat.ts |
| POST | `/tramitacao/sync-publicacoes` | server/routes/compat.ts |
| GET | `/snippets` | server/routes/crud.ts |
| GET | `/snippets/:id` | server/routes/crud.ts |
| POST | `/snippets` | server/routes/crud.ts |
| PATCH | `/snippets/:id` | server/routes/crud.ts |
| DELETE | `/snippets/:id` | server/routes/crud.ts |
| GET | `/custom-actions` | server/routes/crud.ts |
| POST | `/custom-actions` | server/routes/crud.ts |
| PATCH | `/custom-actions/:id` | server/routes/crud.ts |
| DELETE | `/custom-actions/:id` | server/routes/crud.ts |
| GET | `/ementas` | server/routes/crud.ts |
| POST | `/ementas` | server/routes/crud.ts |
| PATCH | `/ementas/:id` | server/routes/crud.ts |
| DELETE | `/ementas/:id` | server/routes/crud.ts |
| GET | `/ai-history` | server/routes/crud.ts |
| POST | `/ai-history` | server/routes/crud.ts |
| DELETE | `/ai-history/:id` | server/routes/crud.ts |
| DELETE | `/ai-history` | server/routes/crud.ts |
| GET | `/prompt-templates` | server/routes/crud.ts |
| POST | `/prompt-templates` | server/routes/crud.ts |
| PATCH | `/prompt-templates/:id` | server/routes/crud.ts |
| DELETE | `/prompt-templates/:id` | server/routes/crud.ts |
| GET | `/doc-templates` | server/routes/crud.ts |
| POST | `/doc-templates` | server/routes/crud.ts |
| PATCH | `/doc-templates/:id` | server/routes/crud.ts |
| DELETE | `/doc-templates/:id` | server/routes/crud.ts |
| GET | `/processos-monitorados` | server/routes/crud.ts |
| POST | `/processos-monitorados` | server/routes/crud.ts |
| PATCH | `/processos-monitorados/:id` | server/routes/crud.ts |
| DELETE | `/processos-monitorados/:id` | server/routes/crud.ts |
| POST | `/share/parecer` | server/routes/crud.ts |
| GET | `/tramitacao/publicacoes` | server/routes/crud.ts |
| PATCH | `/tramitacao/publicacoes/:id/lida` | server/routes/crud.ts |
| POST | `/webhooks/tramitacao` | server/routes/crud.ts |
| GET | `/ai-usage-summary` | server/routes/crud.ts |
| POST | `/drive/upload` | server/routes/drive-sync.ts |
| GET | `/drive/listar` | server/routes/drive-sync.ts |
| GET | `/drive/download/:fileId` | server/routes/drive-sync.ts |
| DELETE | `/drive/arquivo/:fileId` | server/routes/drive-sync.ts |
| POST | `/drive/sync/push` | server/routes/drive-sync.ts |
| POST | `/drive/oauth/refresh` | server/routes/drive-sync.ts |
| GET | `/drive/sync/status` | server/routes/drive-sync.ts |
| GET | `/drive/config/status` | server/routes/drive-sync.ts |
| POST | `/jwt/generate` | server/routes/extra.ts |
| GET | `/jwt/status` | server/routes/extra.ts |
| GET | `/datajud/tribunais` | server/routes/extra.ts |
| POST | `/datajud/consulta` | server/routes/extra.ts |
| POST | `/datajud/consulta-oab` | server/routes/extra.ts |
| GET | `/corporativo/advogado/cpf/:cpf` | server/routes/extra.ts |
| GET | `/corporativo/advogado/oab/:uf/:inscricao` | server/routes/extra.ts |
| GET | `/corporativo/magistrados/:tribunal` | server/routes/extra.ts |
| GET | `/pdpj/status` | server/routes/extra.ts |
| POST | `/pdpj/test-connection` | server/routes/extra.ts |
| POST | `/pdpj/comunicacoes` | server/routes/extra.ts |
| POST | `/pdpj/representados` | server/routes/extra.ts |
| POST | `/pdpj/habilitacao` | server/routes/extra.ts |
| POST | `/pdpj/pessoa` | server/routes/extra.ts |
| POST | `/cnj/comunicacoes` | server/routes/extra.ts |
| POST | `/code/run` | server/routes/extra.ts |
| POST | `/previdenciario/extrair` | server/routes/extra.ts |
| GET | `/pesquisa/oab` | server/routes/extra.ts |
| GET | `/pesquisa/processo` | server/routes/extra.ts |
| GET | `/djen/config` | server/routes/extra.ts |
| POST | `/djen/gerar-token` | server/routes/extra.ts |
| POST | `/export/word` | server/routes/extra.ts |
| POST | `/template/vars/preview` | server/routes/extra.ts |
| GET | `/template/vars/lista` | server/routes/extra.ts |
| POST | `/export/word-with-template` | server/routes/extra.ts |
| POST | `/doc-templates/upload-docx` | server/routes/extra.ts |
| GET | `/tramitacao/test` | server/routes/extra.ts |
| GET | `/tramitacao/clientes` | server/routes/extra.ts |
| POST | `/tramitacao/clientes` | server/routes/extra.ts |
| GET | `/tramitacao/clientes/:id` | server/routes/extra.ts |
| PATCH | `/tramitacao/clientes/:id` | server/routes/extra.ts |
| GET | `/tramitacao/usuarios` | server/routes/extra.ts |
| GET | `/tramitacao/notas` | server/routes/extra.ts |
| POST | `/tramitacao/notas` | server/routes/extra.ts |
| DELETE | `/tramitacao/notas/:id` | server/routes/extra.ts |
| GET | `/export/download-package` | server/routes/extra.ts |
| GET | `/settings/:key` | server/routes/extra.ts |
| PUT | `/settings/:key` | server/routes/extra.ts |
| GET | `/healthz` | server/routes/health.ts |
| GET | `/integracoes/status` | server/routes/integracoes.ts |
| POST | `/integracoes/credenciais` | server/routes/integracoes.ts |
| DELETE | `/integracoes/credenciais/:sistema` | server/routes/integracoes.ts |
| POST | `/integracoes/esaj/consulta` | server/routes/integracoes.ts |
| POST | `/integracoes/projudi/consulta` | server/routes/integracoes.ts |
| POST | `/integracoes/eproc/consulta` | server/routes/integracoes.ts |
| POST | `/integracoes/pjud/consulta` | server/routes/integracoes.ts |
| POST | `/settings/key-detect` | server/routes/integracoes.ts |
| GET | `/integracoes/sistemas` | server/routes/integracoes.ts |
| POST | `/integracoes/stf/buscar` | server/routes/integracoes.ts |
| POST | `/integracoes/stj/buscar` | server/routes/integracoes.ts |
| POST | `/integracoes/tjsp/processo` | server/routes/integracoes.ts |
| POST | `/integracoes/tst/buscar` | server/routes/integracoes.ts |
| GET | `/jurisprudencia/tribunais` | server/routes/jurisprudencia.ts |
| POST | `/jurisprudencia/buscar` | server/routes/jurisprudencia.ts |
| POST | `/jurisprudencia/processo` | server/routes/jurisprudencia.ts |
| POST | `/jurisprudencia/buscar-ia` | server/routes/jurisprudencia.ts |
| GET | `/pje/consulta/:numero` | server/routes/pje.ts |
| POST | `/pje/consulta` | server/routes/pje.ts |
| GET | `/pje/movimentos/:numero` | server/routes/pje.ts |
| GET | `/pje/tribunais` | server/routes/pje.ts |
| GET | `/pje/config/status` | server/routes/pje.ts |
| GET | `/prazos` | server/routes/prazos.ts |
| GET | `/prazos/alertas` | server/routes/prazos.ts |
| POST | `/prazos` | server/routes/prazos.ts |
| PUT | `/prazos/:id` | server/routes/prazos.ts |
| PUT | `/prazos/:id/status` | server/routes/prazos.ts |
| DELETE | `/prazos/:id` | server/routes/prazos.ts |
| POST | `/prazos/fcm/token` | server/routes/prazos.ts |
| DELETE | `/prazos/fcm/token` | server/routes/prazos.ts |
| POST | `/prazos/fcm/test` | server/routes/prazos.ts |
| GET | `/auth/check` | server/routes/settings.ts |
| POST | `/auth/login` | server/routes/settings.ts |
| POST | `/auth/logout` | server/routes/settings.ts |
| GET | `/settings/ai-config` | server/routes/settings.ts |
| PUT | `/settings/ai-config` | server/routes/settings.ts |
| GET | `/settings/system-status` | server/routes/settings.ts |
| PUT | `/settings/app-password` | server/routes/settings.ts |
| POST | `/settings/database-reconnect` | server/routes/settings.ts |
| GET | `/demo-key-status` | server/routes/settings.ts |
| GET | `/demo-key-config` | server/routes/settings.ts |
| POST | `/demo-key-config` | server/routes/settings.ts |
| GET | `/perplexity-key-status` | server/routes/settings.ts |
| POST | `/tts` | server/routes/settings.ts |
| POST | `/export/docx` | server/routes/settings.ts |
| GET | `/ai-usage-summary` | server/routes/settings.ts |
| POST | `/git-push` | server/routes/settings.ts |
| GET | `/settings/db-status` | server/routes/settings.ts |
| POST | `/settings/db-test` | server/routes/settings.ts |
| POST | `/settings/db-init` | server/routes/settings.ts |
| GET | `/settings/app-info` | server/routes/settings.ts |
| GET | `/settings/env-list` | server/routes/settings.ts |
| POST | `/settings/env-set` | server/routes/settings.ts |
| POST | `/settings/db-query` | server/routes/settings.ts |
| POST | `/settings/db-query-admin` | server/routes/settings.ts |
| GET | `/settings/db-describe/:table` | server/routes/settings.ts |
| POST | `/settings/drive-upload` | server/routes/settings.ts |
| GET | `/health` | server/routes/status.ts |
| GET | `/status` | server/routes/status.ts |
| GET | `/status/ia` | server/routes/status.ts |
| GET | `/status/banco` | server/routes/status.ts |
| GET | `/status/integracoes` | server/routes/status.ts |
| POST | `/upload/extract-text` | server/routes/upload.ts |
| POST | `/extract-text` | server/routes/upload.ts |
| POST | `/import/url` | server/routes/upload.ts |
| POST | `/import-url` | server/routes/upload.ts |
| POST | `/upload/transcribe` | server/routes/upload.ts |
| POST | `/upload/ocr` | server/routes/upload.ts |

## 📡 O que o app pede ao servidor
| Método | Endereço | Onde |
|---|---|---|
| GET | `/api/prazos/alertas` | client/public/sw.js |
| GET | `/api/auth/check` | client/src/App.tsx |
| GET | `/settings/app-info` | client/src/pages/admin.tsx |
| GET | `/settings/db-status` | client/src/pages/admin.tsx |
| GET | `/settings/env-list` | client/src/pages/admin.tsx |
| POST | `/settings/env-set` | client/src/pages/admin.tsx |
| POST | `/settings/db-query` | client/src/pages/admin.tsx |
| GET | `/assinatura/config/status` | client/src/pages/assinatura.tsx |
| POST | `/assinatura/hash` | client/src/pages/assinatura.tsx |
| POST | `/assinatura/birdid/authorize` | client/src/pages/assinatura.tsx |
| POST | `/assinatura/birdid/assinar` | client/src/pages/assinatura.tsx |
| GET | `/assinatura/lista` | client/src/pages/assinatura.tsx |
| POST | `/assinatura/verificar` | client/src/pages/assinatura.tsx |
| POST | `/api/tts` | client/src/pages/codigo.tsx |
| POST | `/api/code-assistant` | client/src/pages/codigo.tsx |
| GET | `/collab/rooms` | client/src/pages/colaborativo.tsx |
| POST | `/collab/rooms` | client/src/pages/colaborativo.tsx |
| POST | `/collab/rooms/${roomId}/join` | client/src/pages/colaborativo.tsx |
| DELETE | `/collab/rooms/${currentRoom.id}/leave` | client/src/pages/colaborativo.tsx |
| POST | `/collab/rooms/${currentRoom.id}/update` | client/src/pages/colaborativo.tsx |
| GET | `/collab/rooms/${joinId.trim()}` | client/src/pages/colaborativo.tsx |
| POST | `/api/cnj/comunicacoes` | client/src/pages/comunicacoes-cnj.tsx |
| GET | `/settings/ai-config` | client/src/pages/configuracoes.tsx |
| GET | `/settings/system-status` | client/src/pages/configuracoes.tsx |
| GET | `/integracoes/status` | client/src/pages/configuracoes.tsx |
| PUT | `/settings/ai-config` | client/src/pages/configuracoes.tsx |
| POST | `/demo-key-test` | client/src/pages/configuracoes.tsx |
| POST | `/settings/key-detect` | client/src/pages/configuracoes.tsx |
| POST | `/settings/db-test` | client/src/pages/configuracoes.tsx |
| POST | `/settings/db-init` | client/src/pages/configuracoes.tsx |
| PUT | `/settings/app-password` | client/src/pages/configuracoes.tsx |
| GET | `/api/settings/app-info` | client/src/pages/configuracoes.tsx |
| POST | `/settings/db-query-admin` | client/src/pages/configuracoes.tsx |
| GET | `/api/corporativo/advogado/cpf/${cpfClean}` | client/src/pages/consulta-corporativo.tsx |
| GET | `/api/corporativo/advogado/oab/${oabUf}/${num}` | client/src/pages/consulta-corporativo.tsx |
| GET | `/api/corporativo/magistrados/${magTribunal}` | client/src/pages/consulta-corporativo.tsx |
| GET | `/api/pdpj/status` | client/src/pages/consulta-pdpj.tsx |
| POST | `/api/pdpj/test-connection` | client/src/pages/consulta-pdpj.tsx |
| POST | `/api/pdpj/comunicacoes` | client/src/pages/consulta-pdpj.tsx |
| POST | `/api/pdpj/representados` | client/src/pages/consulta-pdpj.tsx |
| POST | `/api/pdpj/habilitacao` | client/src/pages/consulta-pdpj.tsx |
| POST | `/api/pdpj/pessoa` | client/src/pages/consulta-pdpj.tsx |
| POST | `/api/datajud/consulta` | client/src/pages/consulta-processual.tsx |
| POST | `/api/datajud/consulta-oab` | client/src/pages/consulta-processual.tsx |
| GET | `/ementas` | client/src/pages/ementas.tsx |
| POST | `/ementas` | client/src/pages/ementas.tsx |
| PATCH | `/ementas/${id}` | client/src/pages/ementas.tsx |
| DELETE | `/ementas/${id}` | client/src/pages/ementas.tsx |
| GET | `/auth/escritorio/check` | client/src/pages/escritorio.tsx |
| GET | `/auth/escritorio/perfil` | client/src/pages/escritorio.tsx |
| GET | `/auth/escritorio/usuarios` | client/src/pages/escritorio.tsx |
| POST | `/auth/escritorio/login` | client/src/pages/escritorio.tsx |
| POST | `/auth/escritorio/registro` | client/src/pages/escritorio.tsx |
| PUT | `/auth/escritorio/perfil` | client/src/pages/escritorio.tsx |
| POST | `/auth/escritorio/usuario` | client/src/pages/escritorio.tsx |
| DELETE | `/auth/escritorio/usuario/${id}` | client/src/pages/escritorio.tsx |
| GET | `/ai-history` | client/src/pages/historico.tsx |
| DELETE | `/ai-history/${id}` | client/src/pages/historico.tsx |
| DELETE | `/ai-history` | client/src/pages/historico.tsx |
| POST | `/api/doc-templates/upload-docx` | client/src/pages/jurisprudencia.tsx |
| POST | `/api/export/word-with-template` | client/src/pages/jurisprudencia.tsx |
| POST | `/api/jurisprudencia/buscar` | client/src/pages/jurisprudencia.tsx |
| POST | `/api/import/url` | client/src/pages/jurisprudencia.tsx |
| POST | `/api/upload/extract-text` | client/src/pages/jurisprudencia.tsx |
| POST | `/api/upload/transcribe` | client/src/pages/jurisprudencia.tsx |
| POST | `/api/ai/process` | client/src/pages/jurisprudencia.tsx |
| POST | `/api/ai/refine` | client/src/pages/jurisprudencia.tsx |
| POST | `/api/prompt-templates` | client/src/pages/jurisprudencia.tsx |
| PATCH | `/api/prompt-templates/${id}` | client/src/pages/jurisprudencia.tsx |
| DELETE | `/api/prompt-templates/${id}` | client/src/pages/jurisprudencia.tsx |
| POST | `/api/doc-templates` | client/src/pages/jurisprudencia.tsx |
| PATCH | `/api/doc-templates/${id}` | client/src/pages/jurisprudencia.tsx |
| DELETE | `/api/doc-templates/${id}` | client/src/pages/jurisprudencia.tsx |
| DELETE | `/api/ai-history/${id}` | client/src/pages/jurisprudencia.tsx |
| DELETE | `/api/ai-history` | client/src/pages/jurisprudencia.tsx |
| POST | `/api/custom-actions` | client/src/pages/jurisprudencia.tsx |
| PATCH | `/api/custom-actions/${id}` | client/src/pages/jurisprudencia.tsx |
| DELETE | `/api/custom-actions/${id}` | client/src/pages/jurisprudencia.tsx |
| POST | `/api/ementas` | client/src/pages/jurisprudencia.tsx |
| PATCH | `/api/ementas/${id}` | client/src/pages/jurisprudencia.tsx |
| DELETE | `/api/ementas/${id}` | client/src/pages/jurisprudencia.tsx |
| POST | `/api/ai-history` | client/src/pages/jurisprudencia.tsx |
| GET | `/api/custom-actions` | client/src/pages/jurisprudencia.tsx |
| GET | `/api/ementas` | client/src/pages/jurisprudencia.tsx |
| GET | `/api/ai-history` | client/src/pages/jurisprudencia.tsx |
| GET | `/api/prompt-templates` | client/src/pages/jurisprudencia.tsx |
| GET | `/api/doc-templates` | client/src/pages/jurisprudencia.tsx |
| GET | `/api/demo-key-status` | client/src/pages/legal-assistant.tsx |
| GET | `/api/demo-key-config` | client/src/pages/legal-assistant.tsx |
| POST | `/api/voice-chat` | client/src/pages/legal-assistant.tsx |
| POST | `/api/settings/drive-upload` | client/src/pages/legal-assistant.tsx |
| POST | `/api/demo-key-config` | client/src/pages/legal-assistant.tsx |
| GET | `/api/ai-usage-summary` | client/src/pages/legal-assistant.tsx |
| POST | `/api/ai-usage-credit` | client/src/pages/legal-assistant.tsx |
| POST | `/api/demo-key-test` | client/src/pages/legal-assistant.tsx |
| POST | `/api/auth/login` | client/src/pages/login.tsx |
| DELETE | `/api/processos/${id}` | client/src/pages/painel-processos.tsx |
| PATCH | `/api/processos/${id}` | client/src/pages/painel-processos.tsx |
| POST | `/api/processos` | client/src/pages/painel-processos.tsx |
| GET | `/api/processos` | client/src/pages/painel-processos.tsx |
| GET | `/pje/tribunais` | client/src/pages/pje.tsx |
| GET | `/pje/config/status` | client/src/pages/pje.tsx |
| POST | `/pje/consulta` | client/src/pages/pje.tsx |
| GET | `/pje/movimentos/${encodeURIComponent(num)}` | client/src/pages/pje.tsx |
| POST | `/api/code/run` | client/src/pages/playground.tsx |
| GET | `/api/snippets` | client/src/pages/playground.tsx |
| POST | `/api/snippets` | client/src/pages/playground.tsx |
| DELETE | `/api/snippets/${id}` | client/src/pages/playground.tsx |
| PATCH | `/api/snippets/${id}` | client/src/pages/playground.tsx |
| GET | `/prazos` | client/src/pages/prazos.tsx |
| POST | `/prazos/fcm/token` | client/src/pages/prazos.tsx |
| POST | `/prazos/fcm/test` | client/src/pages/prazos.tsx |
| DELETE | `/prazos/${id}` | client/src/pages/prazos.tsx |
| PUT | `/prazos/${id}/status` | client/src/pages/prazos.tsx |
| POST | `/api/previdenciario/extrair` | client/src/pages/previdenciario.tsx |
| GET | `/api/djen/config` | client/src/pages/robo-djen.tsx |
| POST | `/api/djen/gerar-token` | client/src/pages/robo-djen.tsx |
| GET | `/api/pesquisa/oab?${params}` | client/src/pages/robo-djen.tsx |
| GET | `/api/pesquisa/processo?${params}` | client/src/pages/robo-djen.tsx |
| PUT | `/api/djen/config` | client/src/pages/robo-djen.tsx |
| POST | `/api/djen/clientes` | client/src/pages/robo-djen.tsx |
| DELETE | `/api/djen/clientes/${id}` | client/src/pages/robo-djen.tsx |
| POST | `/api/djen/executar` | client/src/pages/robo-djen.tsx |
| GET | `/api/djen/clientes` | client/src/pages/robo-djen.tsx |
| GET | `/api/djen/publicacoes` | client/src/pages/robo-djen.tsx |
| GET | `/status` | client/src/pages/status.tsx |
| GET | `/status/integracoes` | client/src/pages/status.tsx |
| GET | `/status/banco` | client/src/pages/status.tsx |
| GET | `/api/jwt/status` | client/src/pages/token-generator.tsx |
| POST | `/api/jwt/generate` | client/src/pages/token-generator.tsx |
| GET | `/api/tramitacao/test` | client/src/pages/tramitacao.tsx |
| GET | `/api/tramitacao/clientes?page=${clientePage}&per_page=20` | client/src/pages/tramitacao.tsx |
| GET | `/api/tramitacao/clientes/${selectedCliente.id}` | client/src/pages/tramitacao.tsx |
| GET | `/api/tramitacao/usuarios` | client/src/pages/tramitacao.tsx |
| PUT | `/api/settings/tramitacao_token` | client/src/pages/tramitacao.tsx |
| POST | `/api/tramitacao/notas` | client/src/pages/tramitacao.tsx |
| DELETE | `/api/tramitacao/notas/${id}` | client/src/pages/tramitacao.tsx |
| POST | `/api/tramitacao/sync-publicacoes` | client/src/pages/tramitacao.tsx |
| PATCH | `/api/tramitacao/publicacoes/${id}/lida` | client/src/pages/tramitacao.tsx |
| GET | `/api/settings/tramitacao_token` | client/src/pages/tramitacao.tsx |
| GET | `/api/tramitacao/notas` | client/src/pages/tramitacao.tsx |
| GET | `/api/tramitacao/publicacoes` | client/src/pages/tramitacao.tsx |
| POST | `/chat/completions` | server/routes/ai.ts |
| POST | `/oauth/token` | server/routes/assinatura.ts |
| GET | `/certificate` | server/routes/assinatura.ts |
| POST | `/sign/hash` | server/routes/assinatura.ts |
| GET | `/advogado/oab/${cpf}` | server/routes/extra.ts |
| GET | `/advogado/oab/${uf.toUpperCase()}/${inscricao.replace(/\D/g, ` | server/routes/extra.ts |
| GET | `/magistrado?siglaTribunal=${tribunal}` | server/routes/extra.ts |
| GET | `/processos?numeroProcesso=${encodeURIComponent(numero)}` | server/routes/pje.ts |

## 🔌 O que falta no backend
✅ Tudo que o app chama tem rota no projeto (ou o app não usa servidor).

## 💤 Rotas que o app não usa
- GET `/api/_erros` — server/cacador-erros.ts
- DELETE `/api/_erros` — server/cacador-erros.ts
- POST `/assinatura/birdid/token` — server/routes/assinatura.ts
- GET `/assinatura/birdid/certificado` — server/routes/assinatura.ts
- POST `/assinatura/vidaas/authorize` — server/routes/assinatura.ts
- POST `/auth/escritorio/refresh` — server/routes/auth-jwt.ts
- POST `/auth/escritorio/logout` — server/routes/auth-jwt.ts
- POST `/collab/rooms/:id/cursor` — server/routes/colaborativo.ts
- GET `/collab/rooms/:id/events` — server/routes/colaborativo.ts
- GET `/collab/rooms/:id/history` — server/routes/colaborativo.ts
- GET `/djen/execucoes` — server/routes/compat.ts
- GET `/processos-monitorados` — server/routes/crud.ts
- POST `/processos-monitorados` — server/routes/crud.ts
- PATCH `/processos-monitorados/:id` — server/routes/crud.ts
- DELETE `/processos-monitorados/:id` — server/routes/crud.ts
- POST `/share/parecer` — server/routes/crud.ts
- POST `/webhooks/tramitacao` — server/routes/crud.ts
- POST `/drive/upload` — server/routes/drive-sync.ts
- GET `/drive/listar` — server/routes/drive-sync.ts
- GET `/drive/download/:fileId` — server/routes/drive-sync.ts
- DELETE `/drive/arquivo/:fileId` — server/routes/drive-sync.ts
- POST `/drive/sync/push` — server/routes/drive-sync.ts
- POST `/drive/oauth/refresh` — server/routes/drive-sync.ts
- GET `/drive/sync/status` — server/routes/drive-sync.ts
- GET `/drive/config/status` — server/routes/drive-sync.ts
- GET `/datajud/tribunais` — server/routes/extra.ts
- POST `/export/word` — server/routes/extra.ts
- POST `/template/vars/preview` — server/routes/extra.ts
- GET `/template/vars/lista` — server/routes/extra.ts
- GET `/export/download-package` — server/routes/extra.ts
- GET `/settings/:key` — server/routes/extra.ts
- PUT `/settings/:key` — server/routes/extra.ts
- GET `/healthz` — server/routes/health.ts
- POST `/integracoes/credenciais` — server/routes/integracoes.ts
- DELETE `/integracoes/credenciais/:sistema` — server/routes/integracoes.ts
- POST `/integracoes/esaj/consulta` — server/routes/integracoes.ts
- POST `/integracoes/projudi/consulta` — server/routes/integracoes.ts
- POST `/integracoes/eproc/consulta` — server/routes/integracoes.ts
- POST `/integracoes/pjud/consulta` — server/routes/integracoes.ts
- GET `/integracoes/sistemas` — server/routes/integracoes.ts
- POST `/integracoes/stf/buscar` — server/routes/integracoes.ts
- POST `/integracoes/stj/buscar` — server/routes/integracoes.ts
- POST `/integracoes/tjsp/processo` — server/routes/integracoes.ts
- POST `/integracoes/tst/buscar` — server/routes/integracoes.ts
- GET `/jurisprudencia/tribunais` — server/routes/jurisprudencia.ts
- POST `/jurisprudencia/processo` — server/routes/jurisprudencia.ts
- POST `/jurisprudencia/buscar-ia` — server/routes/jurisprudencia.ts
- GET `/pje/consulta/:numero` — server/routes/pje.ts
- POST `/auth/logout` — server/routes/settings.ts
- POST `/settings/database-reconnect` — server/routes/settings.ts
- GET `/perplexity-key-status` — server/routes/settings.ts
- POST `/export/docx` — server/routes/settings.ts
- POST `/git-push` — server/routes/settings.ts
- GET `/settings/db-describe/:table` — server/routes/settings.ts
- GET `/health` — server/routes/status.ts
- GET `/status/ia` — server/routes/status.ts
- POST `/import-url` — server/routes/upload.ts
- POST `/upload/ocr` — server/routes/upload.ts

## 🗄️ Banco de dados
- **users** — _sobras-do-replit/lib/db/src/schema/index.ts
- **snippets** — _sobras-do-replit/lib/db/src/schema/index.ts
- **custom_actions** — _sobras-do-replit/lib/db/src/schema/index.ts
- **ementas** — _sobras-do-replit/lib/db/src/schema/index.ts
- **ai_history** — _sobras-do-replit/lib/db/src/schema/index.ts
- **prompt_templates** — _sobras-do-replit/lib/db/src/schema/index.ts
- **doc_templates** — _sobras-do-replit/lib/db/src/schema/index.ts
- **shared_pareceres** — _sobras-do-replit/lib/db/src/schema/index.ts
- **processos_monitorados** — _sobras-do-replit/lib/db/src/schema/index.ts
- **app_settings** — _sobras-do-replit/lib/db/src/schema/index.ts
- **tramitacao_publicacoes** — _sobras-do-replit/lib/db/src/schema/index.ts
- **escritorios** — _sobras-do-replit/lib/db/src/schema/index.ts
- **escritorio_users** — _sobras-do-replit/lib/db/src/schema/index.ts
- **prazos** — _sobras-do-replit/lib/db/src/schema/index.ts
- **fcm_tokens** — _sobras-do-replit/lib/db/src/schema/index.ts
- **docs_sincronizados** — _sobras-do-replit/lib/db/src/schema/index.ts
- **assinaturas_digitais** — _sobras-do-replit/lib/db/src/schema/index.ts
- **template_var_defs** — _sobras-do-replit/lib/db/src/schema/index.ts
- **conversations** — _sobras-do-replit/lib/db/src/schema/index.ts
- **messages** — _sobras-do-replit/lib/db/src/schema/index.ts

## 🔐 Variáveis de ambiente (configurar no servidor)
- `AI_INTEGRATIONS_OPENAI_API_KEY`
- `AI_INTEGRATIONS_OPENAI_BASE_URL`
- `API_URL`
- `APP_PASSWORD`
- `BASE_PATH`
- `BASE_URL`
- `BIRDID_CLIENT_ID`
- `BIRDID_CLIENT_SECRET`
- `DATABASE_URL`
- `DATAJUD_API_KEY`
- `ELECTRON_DATA_PATH`
- `ELECTRON_MODE`
- `EXPO_PUBLIC_DOMAIN`
- `EXPO_PUBLIC_REPL_ID`
- `FCM_PROJECT_ID`
- `FCM_SERVER_KEY`
- `GOOGLE_DRIVE_ACCESS_TOKEN`
- `GOOGLE_DRIVE_FOLDER_ID`
- `GOOGLE_DRIVE_REFRESH_TOKEN`
- `GOOGLE_DRIVE_TOKEN`
- `GOOGLE_OAUTH_CLIENT_ID`
- `GOOGLE_OAUTH_CLIENT_SECRET`
- `INNGEST_PORT`
- `JWT_SECRET`
- `LOCAL_DATA_FILE`
- `LOCAL_MODE`
- `LOG_LEVEL`
- `MODE`
- `NODE_ENV`
- `OPENAI_API_KEY`
- `OPENAI_BASE_URL`
- `PASTA_TELA`
- `PDPJ_PEM_PRIVATE_KEY`
- `PORT`
- `PORT_TELA`
- `REPLIT_CONNECTORS_HOSTNAME`
- `REPLIT_DEV_DOMAIN`
- `REPLIT_DOMAINS`
- `REPLIT_INTERNAL_APP_DOMAIN`
- `REPL_ID`
- `SERVER_URL`
- `SESSION_SECRET`
- `TELEGRAM_BOT_TOKEN`
- `VIDAAS_CLIENT_ID`
- `VIDAAS_CLIENT_SECRET`

_Só os nomes. Os valores (chaves, senhas) nunca vão no código nem no GitHub._

## 🤖 IA usada
- Google Gemini
- OpenAI (ChatGPT)
- generativelanguage.googleapis.com
- api.groq.com
- openrouter.ai
- api.openai.com
- platform.openai.com
- console.anthropic.com
- console.groq.com
- api.anthropic.com

## 🌐 Serviços de fora que ele acessa
- aistudio.google.com
- api-publica.datajud.cnj.jus.br
- api.anthropic.com
- api.cohere.ai
- api.dje.tjmg.jus.br
- api.groq.com
- api.mistral.ai
- api.openai.com
- api.perplexity.ai
- api.together.xyz
- api.x.ai
- apiv2.birdid.com.br
- birdid.com.br
- cdn.jsdelivr.net
- cdnjs.cloudflare.com
- certificado.vidaas.com.br
- cna.oab.org.br
- comunicaapi.pje.jus.br
- console.anthropic.com
- console.cloud.google.com
- console.firebase.google.com
- console.groq.com
- console.mistral.ai
- console.x.ai
- datajud-wiki.cnj.jus.br
- datajud.cnj.jus.br
- developer.android.com
- developers.google.com
- developers.linear.app
- domicilio-eletronico.pdpj.jus.br
- elevenlabs.io
- eproc.trf1.jus.br
- eproc.trf4.jus.br
- eproc.trf5.jus.br
- esaj.tjba.jus.br
- esaj.tjce.jus.br
- esaj.tjsc.jus.br
- esaj.tjsp.jus.br
- fcm.googleapis.com
- gateway.cloud.pje.jus.br
- gateway.stg.cloud.pje.jus.br
- generativelanguage.googleapis.com
- github.com
- hcomunicaapi.cnj.jus.br
- huggingface.co
- jurisprudencia.cnj.jus.br
- jurisprudencia.stf.jus.br
- jurisprudencia.tst.jus.br
- meuservidor.com
- neon.tech
- oauth2.googleapis.com
- openrouter.ai
- perplexity.ai
- pje.tjac.jus.br
- pje.tjal.jus.br
- pje.tjam.jus.br
- pje.tjap.jus.br
- pje.tjba.jus.br
- pje.tjce.jus.br
- pje.tjma.jus.br
- pje.tjpa.jus.br
- pje.tjpb.jus.br
- pje.tjpe.jus.br
- pje.tjpi.jus.br
- pje.tjrn.jus.br
- pje.tjro.jus.br
- pje.tjrr.jus.br
- pje.tjse.jus.br
- pje.tjto.jus.br
- pje.trf3.jus.br
- pje.trf5.jus.br
- planilha.tramitacaointeligente.com.br
- platform.openai.com
- processo.stj.jus.br
- projudi.tjam.jus.br
- projudi.tjgo.jus.br
- projudi.tjpr.jus.br
- react.dev
- scon.stj.jus.br
- seeu.mj.gov.br

## 📦 Peças principais (dependências)
`@capacitor/android` · `@capacitor/core` · `@google/genai` · `@hookform/resolvers` · `@radix-ui/react-accordion` · `@radix-ui/react-alert-dialog` · `@radix-ui/react-aspect-ratio` · `@radix-ui/react-avatar` · `@radix-ui/react-checkbox` · `@radix-ui/react-collapsible` · `@radix-ui/react-context-menu` · `@radix-ui/react-dialog` · `@radix-ui/react-dropdown-menu` · `@radix-ui/react-hover-card` · `@radix-ui/react-label` · `@radix-ui/react-menubar` · `@radix-ui/react-navigation-menu` · `@radix-ui/react-popover` · `@radix-ui/react-progress` · `@radix-ui/react-radio-group` · `@radix-ui/react-scroll-area` · `@radix-ui/react-select` · `@radix-ui/react-separator` · `@radix-ui/react-slider` · `@radix-ui/react-slot` · `@radix-ui/react-switch` · `@radix-ui/react-tabs` · `@radix-ui/react-toast` · `@radix-ui/react-toggle` · `@radix-ui/react-toggle-group` · `@radix-ui/react-tooltip` · `@tailwindcss/typography` · `@tailwindcss/vite` · `@tanstack/react-query` · `@tiptap/extension-color` · `@tiptap/extension-font-family` · `@tiptap/extension-heading` · `@tiptap/extension-highlight` · `@tiptap/extension-link` · `@tiptap/extension-paragraph` · `@tiptap/extension-table` · `@tiptap/extension-table-cell` · `@tiptap/extension-table-header` · `@tiptap/extension-table-row` · `@tiptap/extension-text-align` · `@tiptap/extension-text-style` · `@tiptap/extension-underline` · `@tiptap/pm` · `@tiptap/react` · `@tiptap/starter-kit` · `@types/connect-pg-simple` · `@types/express-session` · `@types/jsonwebtoken` · `@types/multer` · `@types/node` · `@types/react` · `@types/react-dom` · `@vitejs/plugin-react` · `adm-zip` · `class-variance-authority` · `clsx` · `cmdk` · `connect-pg-simple` · `cookie-parser` · `cors` · `date-fns` · `docx` · `drizzle-orm` · `drizzle-zod` · `electron-updater` · `embla-carousel-react` · `express` · `express-rate-limit` · `express-session` · `framer-motion` · `html-entities` · `input-otp` · `jsonwebtoken` · `lucide-react` · `mammoth` · `memorystore` · `multer` · `next-themes` · `openai` · `p-limit` · `p-retry` · `pdfjs-dist` · `pg` · `pino` · `pino-http` · `react` · `react-day-picker` · `react-dom` · `react-hook-form` · `react-icons` · `react-resizable-panels` · `recharts` · `sonner` · `tailwind-merge` · `tailwindcss` · `tesseract.js` · `tw-animate-css` · `vaul` · `vite` · `wouter` · `zod`

## 🧹 Arquivos com coisa da Replit
- _sobras-do-replit/automation/files/src/mastra/agents/agent.ts
- _sobras-do-replit/automation/files/src/mastra/inngest/client.ts
- _sobras-do-replit/automation/files/src/mastra/inngest/index.ts
- _sobras-do-replit/automation/files/src/triggers/slackTriggers.ts
- _sobras-do-replit/automation/files/tests/testCronAutomation.ts
- _sobras-do-replit/automation/files/tests/testWebhookAutomation.ts
- _sobras-do-replit/expo/files/app/(tabs)/index.tsx
- _sobras-do-replit/expo/files/scripts/build.js
- _sobras-do-replit/mockup-sandbox/files/src/components/ui/badge.tsx
- _sobras-do-replit/mockup-sandbox/files/src/components/ui/button.tsx
- _sobras-do-replit/react-vite/files/src/App.tsx
- _sobras-do-replit/react-vite/files/src/components/ui/badge.tsx
- _sobras-do-replit/react-vite/files/src/components/ui/button.tsx
- _sobras-do-replit/video-js/files/src/components/video/index.ts
- _sobras-do-replit/video-js/files/src/components/video/ReplitLoadingScene.tsx
- _sobras-do-replit/video-js/files/src/components/video/VideoTemplate.tsx
- client/src/pages/codigo.tsx
- client/src/pages/legal-assistant.tsx
- electron/main.js
- server/routes/ai.ts

## 🔁 Roteiro para recriar fora da Replit
1. Importar o projeto no Mini SK e tocar em 🏗️ Preparar → ✅ Fazer tudo (tira a Replit, cria os arquivos que faltam).
2. Backend: escolher onde ele vai ficar ligado (Render/Railway grátis) — ou pedir à IA para transformar as rotas em funções do Netlify/Vercel, usando a tabela "O que falta no backend".
3. Banco: criar no Neon ou Supabase e colocar o endereço na variável de ambiente do servidor.
4. Variáveis: cadastrar 45 variável(is) no servidor (lista acima).
5. Testar a prévia; se der erro, 🤖 Mandar os erros para a IA.
6. App: 📲 Instalável (PWA), 📦 APK ou 🖥️ Desktop (.exe) pelo 🏗️ Preparar.

## 🌳 Árvore de arquivos
```
├─ 📁 _sobras-do-replit/
│  ├─ 📁 automation/
│  │  ├─ 📁 files/
│  │  │  ├─ 📁 scripts/
│  │  │  │  ├─ build.sh
│  │  │  │  └─ inngest.sh
│  │  │  ├─ 📁 src/
│  │  │  │  ├─ 📁 mastra/
│  │  │  │  │  ├─ 📁 agents/
│  │  │  │  │  │  └─ agent.ts
│  │  │  │  │  ├─ 📁 inngest/
│  │  │  │  │  │  ├─ client.ts
│  │  │  │  │  │  └─ index.ts
│  │  │  │  │  ├─ 📁 storage/
│  │  │  │  │  │  └─ index.ts
│  │  │  │  │  ├─ 📁 tools/
│  │  │  │  │  │  └─ exampleTool.ts
│  │  │  │  │  ├─ 📁 workflows/
│  │  │  │  │  │  └─ workflow.ts
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ 📁 triggers/
│  │  │  │  │  ├─ cronTriggers.ts
│  │  │  │  │  ├─ exampleConnectorTrigger.ts
│  │  │  │  │  ├─ slackTriggers.ts
│  │  │  │  │  └─ telegramTriggers.ts
│  │  │  │  └─ global.d.ts
│  │  │  ├─ 📁 tests/
│  │  │  │  ├─ testCronAutomation.ts
│  │  │  │  └─ testWebhookAutomation.ts
│  │  │  ├─ .gitignore
│  │  │  ├─ package.json.template
│  │  │  └─ tsconfig.json
│  │  └─ artifact.yaml
│  ├─ 📁 data-visualization/
│  │  └─ artifact.yaml
│  ├─ 📁 expo/
│  │  ├─ 📁 files/
│  │  │  ├─ 📁 app/
│  │  │  │  ├─ 📁 (tabs)/
│  │  │  │  │  ├─ _layout.tsx
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ _layout.tsx
│  │  │  │  └─ +not-found.tsx
│  │  │  ├─ 📁 assets/
│  │  │  │  └─ 📁 images/
│  │  │  │     └─ icon.png
│  │  │  ├─ 📁 components/
│  │  │  │  ├─ ErrorBoundary.tsx
│  │  │  │  ├─ ErrorFallback.tsx
│  │  │  │  └─ KeyboardAwareScrollViewCompat.tsx
│  │  │  ├─ 📁 constants/
│  │  │  │  └─ colors.ts
│  │  │  ├─ 📁 hooks/
│  │  │  │  └─ useColors.ts
│  │  │  ├─ 📁 scripts/
│  │  │  │  └─ build.js
│  │  │  ├─ 📁 server/
│  │  │  │  ├─ 📁 templates/
│  │  │  │  │  └─ landing-page.html
│  │  │  │  └─ serve.js
│  │  │  ├─ .gitignore
│  │  │  ├─ app.json.template
│  │  │  ├─ babel.config.js
│  │  │  ├─ metro.config.js
│  │  │  ├─ package.json.template
│  │  │  └─ tsconfig.json
│  │  ├─ artifact.yaml
│  │  └─ OWNERS
│  ├─ 📁 lib/
│  │  ├─ 📁 db/
│  │  │  ├─ 📁 src/
│  │  │  │  ├─ 📁 schema/
│  │  │  │  │  └─ index.ts
│  │  │  │  └─ index.ts
│  │  │  ├─ drizzle.config.ts
│  │  │  ├─ package.json
│  │  │  └─ tsconfig.json
│  │  └─ 📁 sync-storage/
│  │     └─ 📁 src/
│  │        └─ index.ts
│  ├─ 📁 mockup-sandbox/
│  │  ├─ 📁 files/
│  │  │  ├─ 📁 public/
│  │  │  │  └─ favicon.svg
│  │  │  ├─ 📁 src/
│  │  │  │  ├─ 📁 .generated/
│  │  │  │  │  └─ mockup-components.ts
│  │  │  │  ├─ 📁 components/
│  │  │  │  │  └─ 📁 ui/
│  │  │  │  │     ├─ accordion.tsx
│  │  │  │  │     ├─ alert-dialog.tsx
│  │  │  │  │     ├─ alert.tsx
│  │  │  │  │     ├─ aspect-ratio.tsx
│  │  │  │  │     ├─ avatar.tsx
│  │  │  │  │     ├─ badge.tsx
│  │  │  │  │     ├─ breadcrumb.tsx
│  │  │  │  │     ├─ button-group.tsx
│  │  │  │  │     ├─ button.tsx
│  │  │  │  │     ├─ calendar.tsx
│  │  │  │  │     ├─ card.tsx
│  │  │  │  │     ├─ carousel.tsx
│  │  │  │  │     ├─ chart.tsx
│  │  │  │  │     ├─ checkbox.tsx
│  │  │  │  │     ├─ collapsible.tsx
│  │  │  │  │     ├─ command.tsx
│  │  │  │  │     ├─ context-menu.tsx
│  │  │  │  │     ├─ dialog.tsx
│  │  │  │  │     ├─ drawer.tsx
│  │  │  │  │     ├─ dropdown-menu.tsx
│  │  │  │  │     ├─ empty.tsx
│  │  │  │  │     ├─ field.tsx
│  │  │  │  │     ├─ form.tsx
│  │  │  │  │     ├─ hover-card.tsx
│  │  │  │  │     ├─ input-group.tsx
│  │  │  │  │     ├─ input-otp.tsx
│  │  │  │  │     ├─ input.tsx
│  │  │  │  │     ├─ item.tsx
│  │  │  │  │     ├─ kbd.tsx
│  │  │  │  │     ├─ label.tsx
│  │  │  │  │     ├─ menubar.tsx
│  │  │  │  │     ├─ navigation-menu.tsx
│  │  │  │  │     ├─ pagination.tsx
│  │  │  │  │     ├─ popover.tsx
│  │  │  │  │     ├─ progress.tsx
│  │  │  │  │     ├─ radio-group.tsx
│  │  │  │  │     ├─ resizable.tsx
│  │  │  │  │     ├─ scroll-area.tsx
│  │  │  │  │     ├─ select.tsx
│  │  │  │  │     ├─ separator.tsx
│  │  │  │  │     ├─ sheet.tsx
│  │  │  │  │     ├─ sidebar.tsx
│  │  │  │  │     ├─ skeleton.tsx
│  │  │  │  │     ├─ slider.tsx
│  │  │  │  │     ├─ sonner.tsx
│  │  │  │  │     ├─ spinner.tsx
│  │  │  │  │     ├─ switch.tsx
│  │  │  │  │     ├─ table.tsx
│  │  │  │  │     ├─ tabs.tsx
│  │  │  │  │     ├─ textarea.tsx
│  │  │  │  │     ├─ toast.tsx
│  │  │  │  │     ├─ toaster.tsx
│  │  │  │  │     ├─ toggle-group.tsx
│  │  │  │  │     ├─ toggle.tsx
│  │  │  │  │     └─ tooltip.tsx
│  │  │  │  ├─ 📁 hooks/
│  │  │  │  │  ├─ use-mobile.tsx
│  │  │  │  │  └─ use-toast.ts
│  │  │  │  ├─ 📁 lib/
│  │  │  │  │  └─ utils.ts
│  │  │  │  ├─ App.tsx
│  │  │  │  ├─ index.css
│  │  │  │  └─ main.tsx
│  │  │  ├─ components.json
│  │  │  ├─ index.html
│  │  │  ├─ mockupPreviewPlugin.ts
│  │  │  ├─ package.json.template
│  │  │  ├─ tsconfig.json
│  │  │  └─ vite.config.ts
│  │  └─ artifact.yaml
│  ├─ 📁 react-vite/
│  │  ├─ 📁 files/
│  │  │  ├─ 📁 public/
│  │  │  │  ├─ favicon.svg
│  │  │  │  └─ robots.txt
│  │  │  ├─ 📁 src/
│  │  │  │  ├─ 📁 components/
│  │  │  │  │  └─ 📁 ui/
│  │  │  │  │     ├─ accordion.tsx
│  │  │  │  │     ├─ alert-dialog.tsx
│  │  │  │  │     ├─ alert.tsx
│  │  │  │  │     ├─ aspect-ratio.tsx
│  │  │  │  │     ├─ avatar.tsx
│  │  │  │  │     ├─ badge.tsx
│  │  │  │  │     ├─ breadcrumb.tsx
│  │  │  │  │     ├─ button-group.tsx
│  │  │  │  │     ├─ button.tsx
│  │  │  │  │     ├─ calendar.tsx
│  │  │  │  │     ├─ card.tsx
│  │  │  │  │     ├─ carousel.tsx
│  │  │  │  │     ├─ chart.tsx
│  │  │  │  │     ├─ checkbox.tsx
│  │  │  │  │     ├─ collapsible.tsx
│  │  │  │  │     ├─ command.tsx
│  │  │  │  │     ├─ context-menu.tsx
│  │  │  │  │     ├─ dialog.tsx
│  │  │  │  │     ├─ drawer.tsx
│  │  │  │  │     ├─ dropdown-menu.tsx
│  │  │  │  │     ├─ empty.tsx
│  │  │  │  │     ├─ field.tsx
│  │  │  │  │     ├─ form.tsx
│  │  │  │  │     ├─ hover-card.tsx
│  │  │  │  │     ├─ input-group.tsx
│  │  │  │  │     ├─ input-otp.tsx
│  │  │  │  │     ├─ input.tsx
│  │  │  │  │     ├─ item.tsx
│  │  │  │  │     ├─ kbd.tsx
│  │  │  │  │     ├─ label.tsx
│  │  │  │  │     ├─ menubar.tsx
│  │  │  │  │     ├─ navigation-menu.tsx
│  │  │  │  │     ├─ pagination.tsx
│  │  │  │  │     ├─ popover.tsx
│  │  │  │  │     ├─ progress.tsx
│  │  │  │  │     ├─ radio-group.tsx
│  │  │  │  │     ├─ resizable.tsx
│  │  │  │  │     ├─ scroll-area.tsx
│  │  │  │  │     ├─ select.tsx
│  │  │  │  │     ├─ separator.tsx
│  │  │  │  │     ├─ sheet.tsx
│  │  │  │  │     ├─ sidebar.tsx
│  │  │  │  │     ├─ skeleton.tsx
│  │  │  │  │     ├─ slider.tsx
│  │  │  │  │     ├─ sonner.tsx
│  │  │  │  │     ├─ spinner.tsx
│  │  │  │  │     ├─ switch.tsx
│  │  │  │  │     ├─ table.tsx
│  │  │  │  │     ├─ tabs.tsx
│  │  │  │  │     ├─ textarea.tsx
│  │  │  │  │     ├─ toast.tsx
│  │  │  │  │     ├─ toaster.tsx
│  │  │  │  │     ├─ toggle-group.tsx
│  │  │  │  │     ├─ toggle.tsx
│  │  │  │  │     └─ tooltip.tsx
│  │  │  │  ├─ 📁 hooks/
│  │  │  │  │  ├─ use-mobile.tsx
│  │  │  │  │  └─ use-toast.ts
│  │  │  │  ├─ 📁 lib/
│  │  │  │  │  └─ utils.ts
│  │  │  │  ├─ 📁 pages/
│  │  │  │  │  └─ not-found.tsx
│  │  │  │  ├─ App.tsx
│  │  │  │  ├─ index.css
│  │  │  │  └─ main.tsx
│  │  │  ├─ components.json
│  │  │  ├─ index.html.template
│  │  │  ├─ package.json.template
│  │  │  ├─ tsconfig.json
│  │  │  └─ vite.config.ts
│  │  └─ artifact.yaml
│  ├─ 📁 scripts/
│  │  └─ 📁 src/
│  │     └─ hello.ts
│  ├─ 📁 slides/
│  │  ├─ 📁 files/
│  │  │  ├─ 📁 public/
│  │  │  │  └─ favicon.svg
│  │  │  ├─ 📁 scripts/
│  │  │  │  └─ validate-slides.ts
│  │  │  ├─ 📁 src/
│  │  │  │  ├─ 📁 data/
│  │  │  │  │  ├─ .gitignore
│  │  │  │  │  ├─ slides-manifest.json
│  │  │  │  │  └─ slidesManifestSchema.ts
│  │  │  │  ├─ App.tsx
│  │  │  │  ├─ index.css
│  │  │  │  ├─ main.tsx
│  │  │  │  └─ slideLoader.ts
│  │  │  ├─ index.html.template
│  │  │  ├─ package.json.template
│  │  │  ├─ tsconfig.json
│  │  │  └─ vite.config.ts
│  │  └─ artifact.yaml
│  ├─ 📁 video-js/
│  │  ├─ 📁 files/
│  │  │  ├─ 📁 public/
│  │  │  │  └─ favicon.svg
│  │  │  ├─ 📁 scripts/
│  │  │  │  └─ validate-recording.sh
│  │  │  ├─ 📁 src/
│  │  │  │  ├─ 📁 components/
│  │  │  │  │  └─ 📁 video/
│  │  │  │  │     ├─ index.ts
│  │  │  │  │     ├─ ReplitLoadingScene.tsx
│  │  │  │  │     └─ VideoTemplate.tsx
│  │  │  │  ├─ 📁 hooks/
│  │  │  │  │  └─ use-mobile.tsx
│  │  │  │  ├─ 📁 lib/
│  │  │  │  │  ├─ 📁 video/
│  │  │  │  │  │  ├─ animations.ts
│  │  │  │  │  │  ├─ hooks.ts
│  │  │  │  │  │  └─ index.ts
│  │  │  │  │  └─ utils.ts
│  │  │  │  ├─ App.tsx
│  │  │  │  ├─ index.css
│  │  │  │  └─ main.tsx
│  │  │  ├─ index.html.template
│  │  │  ├─ package.json.template
│  │  │  ├─ tsconfig.json
│  │  │  └─ vite.config.ts
│  │  └─ artifact.yaml
│  ├─ .env.example
│  ├─ docker-compose.yml
│  ├─ MANUAL.md
│  └─ start-local.sh
├─ 📁 .github/
│  └─ 📁 workflows/
│     ├─ apk-capacitor.yml
│     └─ juridico.yml
├─ 📁 client/
│  ├─ 📁 public/
│  │  ├─ cacador-erros.js
│  │  ├─ favicon.svg
│  │  ├─ icon-192.png
│  │  ├─ icon-384.png
│  │  ├─ icon-512.png
│  │  ├─ icon-96.png
│  │  ├─ manifest.json
│  │  ├─ opengraph.jpg
│  │  ├─ plano-b.js
│  │  ├─ robots.txt
│  │  └─ sw.js
│  ├─ 📁 src/
│  │  ├─ 📁 components/
│  │  │  ├─ 📁 ui/
│  │  │  │  ├─ accordion.tsx
│  │  │  │  ├─ alert-dialog.tsx
│  │  │  │  ├─ alert.tsx
│  │  │  │  ├─ aspect-ratio.tsx
│  │  │  │  ├─ avatar.tsx
│  │  │  │  ├─ badge.tsx
│  │  │  │  ├─ breadcrumb.tsx
│  │  │  │  ├─ button-group.tsx
│  │  │  │  ├─ button.tsx
│  │  │  │  ├─ calendar.tsx
│  │  │  │  ├─ card.tsx
│  │  │  │  ├─ carousel.tsx
│  │  │  │  ├─ chart.tsx
│  │  │  │  ├─ checkbox.tsx
│  │  │  │  ├─ collapsible.tsx
│  │  │  │  ├─ command.tsx
│  │  │  │  ├─ context-menu.tsx
│  │  │  │  ├─ dialog.tsx
│  │  │  │  ├─ drawer.tsx
│  │  │  │  ├─ dropdown-menu.tsx
│  │  │  │  ├─ empty.tsx
│  │  │  │  ├─ field.tsx
│  │  │  │  ├─ form.tsx
│  │  │  │  ├─ hover-card.tsx
│  │  │  │  ├─ input-group.tsx
│  │  │  │  ├─ input-otp.tsx
│  │  │  │  ├─ input.tsx
│  │  │  │  ├─ item.tsx
│  │  │  │  ├─ kbd.tsx
│  │  │  │  ├─ label.tsx
│  │  │  │  ├─ menubar.tsx
│  │  │  │  ├─ navigation-menu.tsx
│  │  │  │  ├─ pagination.tsx
│  │  │  │  ├─ popover.tsx
│  │  │  │  ├─ progress.tsx
│  │  │  │  ├─ radio-group.tsx
│  │  │  │  ├─ resizable.tsx
│  │  │  │  ├─ scroll-area.tsx
│  │  │  │  ├─ select.tsx
│  │  │  │  ├─ separator.tsx
│  │  │  │  ├─ sheet.tsx
│  │  │  │  ├─ sidebar.tsx
│  │  │  │  ├─ skeleton.tsx
│  │  │  │  ├─ slider.tsx
│  │  │  │  ├─ sonner.tsx
│  │  │  │  ├─ spinner.tsx
│  │  │  │  ├─ switch.tsx
│  │  │  │  ├─ table.tsx
│  │  │  │  ├─ tabs.tsx
│  │  │  │  ├─ textarea.tsx
│  │  │  │  ├─ toast.tsx
│  │  │  │  ├─ toaster.tsx
│  │  │  │  ├─ toggle-group.tsx
│  │  │  │  ├─ toggle.tsx
│  │  │  │  └─ tooltip.tsx
│  │  │  ├─ pwa-install.tsx
│  │  │  ├─ theme-provider.tsx
│  │  │  ├─ theme-toggle.tsx
│  │  │  └─ tiptap-editor.tsx
│  │  ├─ 📁 hooks/
│  │  │  ├─ use-mobile.tsx
│  │  │  └─ use-toast.ts
│  │  ├─ 📁 lib/
│  │  │  ├─ legal-formatter.ts
│  │  │  ├─ queryClient.ts
│  │  │  ├─ sync-storage.ts
│  │  │  └─ utils.ts
│  │  ├─ 📁 pages/
│  │  │  ├─ admin.tsx
│  │  │  ├─ assinatura.tsx
│  │  │  ├─ auditoria-financeira.tsx
│  │  │  ├─ codigo.tsx
│  │  │  ├─ colaborativo.tsx
│  │  │  ├─ comparador-juridico.tsx
│  │  │  ├─ comunicacoes-cnj.tsx
│  │  │  ├─ configuracoes.tsx
│  │  │  ├─ consulta-corporativo.tsx
│  │  │  ├─ consulta-pdpj.tsx
│  │  │  ├─ consulta-processual.tsx
│  │  │  ├─ ementas.tsx
│  │  │  ├─ escritorio.tsx
│  │  │  ├─ filtrador.tsx
│  │  │  ├─ historico.tsx
│  │  │  ├─ jurisprudencia.tsx
│  │  │  ├─ legal-assistant.tsx
│  │  │  ├─ login.tsx
│  │  │  ├─ not-found.tsx
… (68 linhas a mais)
```
