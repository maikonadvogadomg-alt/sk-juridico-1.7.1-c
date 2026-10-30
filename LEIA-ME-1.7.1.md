# ⚖️ SK Jurídico 1.7.1 — os consertos de 28/10

É o **mesmo 1.7** que você achou, com os consertos da versão que já funcionava na prévia
e os defeitos que o 🧭 Mapa de Rotas e a leitura do código acharam. **Nada foi apagado.**

## O que estava quebrado e o que mudou

| # | O defeito | O conserto |
|---|-----------|------------|
| 1 | **O servidor caía ao ligar** quando não tinha banco (Neon): o arquivo `lib/db/src/index.ts` "desistia" na hora. Resultado: "Failed to fetch" / tela azul em tudo. | Agora ele só avisa e o servidor liga, **salvando num arquivo no computador** (`sk-juridico-local-data.json`). |
| 2 | O endereço do banco colado em **Configurações** não valia depois de reiniciar. | Ele é lido ao ligar. Pode colar o do **Neon** ou do **Supabase** (os dois servem). |
| 3 | Os primeiros pedidos, logo ao ligar, davam erro. | O servidor espera a checagem do banco antes de responder. |
| 4 | No modo sem banco, **salvar as chaves de IA quebrava** (`file-storage.ts`). | Consertado. |
| 5 | **Painel de Processos** chamava `/api/processos`, o servidor só tinha `/api/processos-monitorados`. | Os dois nomes funcionam (`routes/compat.ts`). |
| 6 | **Robô DJEN**: as rotas de clientes, publicações e executar **não existiam** no servidor. | Trazidas da versão consertada (configuração completa, token PEM, clientes, publicações, execuções, executar — sem token roda com exemplos). |
| 7 | **Tramitação → buscar publicações**: a rota não existia. | Trazida da versão consertada. |
| 8 | Robô DJEN → Executar e Tramitação davam **"Algo deu errado"** (a tela azul): faltava o `.json()`. | Mesmo conserto da versão que funcionava. |
| 9 | **Playground: "Falha ao salvar"** sem servidor. | Guarda no aparelho e mostra 📱 (igual à versão que funcionava). |
| 10 | Erro em inglês "Failed to fetch". | Mensagem em português dizendo que o servidor não respondeu. |
| 11 | **APK / PWA / abrir pelo index** não tinham servidor nenhum. | 🧩 **plano B** (`public/plano-b.js`): sem servidor, salva no aparelho e a **IA fala direto com o Gemini** com as mesmas instruções jurídicas do servidor (pede a sua chave uma vez e guarda só no aparelho). |
| 12 | O service worker guardava listas velhas da /api. | Desligado; quem cuida do sem-servidor é o plano B. |
| 13 | `pnpm install` e o servidor usavam comandos que **não existem no Windows** (`sh`, `export`). | Trocados por comandos que funcionam no Windows e no celular. |
| 14 | — | 🐞 **Caçador de erros** (botão no canto): anota o que der errado na tela **e no servidor** (com o motivo de verdade, também no arquivo `erros-servidor.log`), para mandar para a IA. |

## Como testar no computador (Mini SK para PC, painel 💻 Terminal)
1. Abra este projeto no Mini SK e mande para a 🔄 pasta viva (ou extraia o zip numa pasta).
2. No terminal, dentro da pasta do projeto:
   ```
   npm install
   npm run dev
   ```
3. Abra **http://localhost:5173**. O servidor fica na 8080.
   - Sem banco: salva no arquivo `sk-juridico-local-data.json`, na pasta do projeto.
   - Com banco: em **Configurações**, cole o endereço do Neon ou do Supabase.
4. Se aparecer erro: toque no 🐞 → 📋 Copiar, e mande.

## Só a tela (sem servidor) — para ver o plano B
`npm run tela` → http://localhost:5173 . O aviso "🧩 Sem servidor" aparece e tudo é guardado no aparelho.

## O que AINDA precisa do servidor ligado (no celular avisa em português)
Voz (TTS), exportar Word, consultas aos tribunais (PJe, DataJud, PDPJ…), Google Drive, escritório com vários advogados.
