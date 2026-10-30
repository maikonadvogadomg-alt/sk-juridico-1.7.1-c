/* =========================================================================
   🧩 PLANO B do SK Jurídico (28/10) — feito pelo Mini SK / Claude.
   Quando o SERVIDOR do jurídico não responde (APK, PWA, abrir pelo index,
   ou o servidor desligou), a própria tela responde:
     • guarda tudo NO APARELHO (IndexedDB "sk-juridico-plano-b");
     • a IA fala direto com o Gemini, com a SUA chave (fica só no aparelho),
       usando as MESMAS instruções jurídicas do servidor;
     • nada de "Failed to fetch" nem tela azul por falta de servidor.
   Com o servidor ligado (computador), ele usa o servidor normalmente.
   Para desligar o plano B: apague a linha <script src="/plano-b.js"> do index.html.
   ========================================================================= */
(function () {
  'use strict';
  var PROMPTS = {"sys":"Voce e uma assistente juridica especializada em Direito brasileiro. Produza documentos COMPLETOS, EXTENSOS e PRONTOS PARA USO IMEDIATO.\n\nREGRAS ABSOLUTAS:\n1. DOCUMENTO COMPLETO E EXTENSO — nunca resuma, nunca corte, nunca omita. Escreva o documento inteiro do inicio ao fim. O advogado copia e cola direto no Word.\n2. ESTRUTURA OBRIGATORIA para peticoes e minutas: Endereçamento → Qualificação das partes → Dos Fatos (detalhado) → Do Direito (com fundamentacao legal) → Dos Pedidos → Local, data e assinatura.\n3. FUNDAMENTACAO ROBUSTA — cite artigos de lei, numeros de lei, doutrina, principios. Desenvolva cada argumento em paragrafos proprios.\n4. Base-se no texto fornecido. Nao invente fatos sobre o caso. Se faltar dado: [INFORMAR: descricao]. EXCECAO OBRIGATORIA: se houver EMENTAS DE REFERENCIA no prompt, UTILIZE-AS INTEGRALMENTE na secao DA JURISPRUDENCIA — cite-as textualmente com tribunal, processo e data.\n5. MANTENHA nomes, CPFs, numeros, dados pessoais EXATAMENTE como estao. NAO altere nenhum dado.\n6. TEXTO PURO sem markdown. NAO use asteriscos (*), hashtags (#), tracos (---), nem nenhuma sintaxe markdown. Para titulos, escreva em CAIXA ALTA. Paragrafos separados por linha em branco. Cada paragrafo em uma unica linha continua (sem quebras no meio da frase).\n7. CADA PARAGRAFO maximo 5 linhas. Nunca junte varios argumentos num bloco so. Separe cada ideia em paragrafo proprio.\n8. NUNCA produza um rascunho curto. O MINIMO ABSOLUTO para qualquer minuta ou peticao e 15 PAGINAS completas (aproximadamente 7.500 palavras).\n9. FORMATACAO DO TEXTO:\n   - Titulos e subtitulos: CAIXA ALTA, justificado, sem recuo.\n   - Paragrafos do corpo: justificados, recuo de 4cm na primeira linha, espacamento 1.5.\n   - Citacoes (ementas, artigos, sumulas): recuo 4cm dos dois lados, justificado, fonte 10pt, espacamento simples, italico.\n   - Assinatura do advogado: negrito, CAIXA ALTA, centralizado.\n   - \"Nestes termos, pede deferimento\": alinhado a esquerda, sem recuo.","act":{"resumir":"Elabore RESUMO ESTRUTURADO do documento com as seguintes secoes, CADA UMA em bloco separado por linha em branco:\n\n1. NATUREZA DA DEMANDA\n[descricao]\n\n2. FATOS PRINCIPAIS\n[datas, nomes, valores]\n\n3. FUNDAMENTOS JURIDICOS\n[bases legais e argumentos]\n\n4. CONCLUSAO E PEDIDO\n[resultado pretendido]\n\nNao omita detalhes. Cada topico deve iniciar em nova linha apos linha em branco.\n\nDOCUMENTO:\n{{textos}}","revisar":"Analise erros gramaticais, concordancia, logica juridica. Sugira melhorias de redacao. Aponte omissoes/contradicoes.\n\nTEXTO:\n{{textos}}","refinar":"Reescreva elevando linguagem para padrao de tribunais superiores. Melhore fluidez e vocabulario juridico.\n\nTEXTO:\n{{textos}}","simplificar":"Traduza para linguagem simples e acessivel, mantendo rigor tecnico. Cliente leigo deve entender.\n\nTEXTO:\n{{textos}}","minuta":"Elabore PETICAO/MINUTA JURIDICA COMPLETA, EXTENSA E PROFISSIONAL com NO MINIMO 15 PAGINAS (7.500+ palavras). Inclua OBRIGATORIAMENTE todas as secoes abaixo, desenvolvendo CADA UMA extensamente:\n\nEXMO(A). SR(A). DR(A). JUIZ(A) DE DIREITO DA ... VARA DE ... DA COMARCA DE ...\n\n[QUALIFICACAO COMPLETA DAS PARTES com todos os dados]\n\nDOS FATOS\n[Narrativa EXTENSA, detalhada e cronologica dos fatos — minimo 8 paragrafos]\n\nDO DIREITO\n[Fundamentacao juridica ROBUSTA com citacao de artigos de lei, codigos, leis especificas, principios constitucionais, doutrina e jurisprudencia — minimo 12 paragrafos]\n\nDA JURISPRUDENCIA\n[Citacao de precedentes relevantes de tribunais superiores e regionais — minimo 5 julgados com ementa]\n\nDOS PEDIDOS\n[Lista numerada e DETALHADA de todos os pedidos, cada um com fundamentacao propria — minimo 8 pedidos]\n\nDO VALOR DA CAUSA\n[Fundamentacao do valor atribuido]\n\n[Data e assinatura]\n\nATENCAO: O documento DEVE ter no minimo 15 PAGINAS COMPLETAS.\n\nINFORMACOES:\n{{textos}}","analisar":"Elabore ANALISE JURIDICA com as seguintes secoes, CADA UMA separada por linha em branco:\n\n1. RISCOS PROCESSUAIS\n[analise dos riscos]\n\n2. TESES FAVORAVEIS E CONTRARIAS\n[argumentos pro e contra]\n\n3. JURISPRUDENCIA APLICAVEL\n[precedentes relevantes]\n\n4. PROXIMOS PASSOS\n[recomendacoes de atuacao]\n\nCada secao deve iniciar em nova linha apos linha em branco.\n\nDOCUMENTO:\n{{textos}}","modo-estrito":"Corrija APENAS erros gramaticais e de estilo. Nao altere estrutura ou conteudo.\n\nTEXTO:\n{{textos}}","modo-redacao":"Melhore o texto tornando-o mais profissional e persuasivo, mantendo todos dados e fatos.\n\nTEXTO:\n{{textos}}","modo-interativo":"Identifique lacunas e pontos que precisam complementacao pelo advogado.\n\nTEXTO:\n{{textos}}"}};
  var original = window.fetch.bind(window);
  var LOG = function () { try { console.info.apply(console, ['🧩 plano B'].concat([].slice.call(arguments))); } catch (e) {} };

  // ── gaveta grande do aparelho ──
  var bancoP = null;
  function banco() { return bancoP || (bancoP = new Promise(function (ok, erro) { var q = indexedDB.open('sk-juridico-plano-b', 1); q.onupgradeneeded = function () { q.result.createObjectStore('dados'); }; q.onsuccess = function () { ok(q.result); }; q.onerror = function () { erro(q.error); }; })); }
  function ler(k) { return banco().then(function (db) { return new Promise(function (ok) { var t = db.transaction('dados').objectStore('dados').get(k); t.onsuccess = function () { ok(t.result); }; t.onerror = function () { ok(undefined); }; }); }); }
  function gravar(k, v) { return banco().then(function (db) { return new Promise(function (ok, erro) { var tx = db.transaction('dados', 'readwrite'); tx.objectStore('dados').put(v, k); tx.oncomplete = function () { ok(); }; tx.onerror = function () { erro(tx.error); }; }); }); }
  function json(obj, status) { return new Response(obj === undefined ? null : JSON.stringify(obj), { status: status || 200, headers: { 'Content-Type': 'application/json', 'X-Plano-B': '1' } }); }
  function uid() { return 'pb-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
  var ehId = function (s) { return /^\d+$/.test(s) || /^[0-9a-f-]{16,}$/i.test(s) || /^(pb|local)-/.test(s); };

  // ── a chave do Gemini ──
  function chaveGemini() {
    var k = ''; try { k = localStorage.getItem('planoB:chaveGemini') || localStorage.getItem('gemini_api_key') || ''; } catch (e) {}
    if (k) return Promise.resolve(k);
    return ler('cfg:ai-config').then(function (c) {
      var achou = ''; if (c && typeof c === 'object') Object.keys(c).forEach(function (x) { var v = c[x]; if (!achou && typeof v === 'string' && /^AIza/.test(v)) achou = v; });
      if (!achou) { achou = (window.prompt('🧩 O servidor do jurídico não está ligado aqui. Para a IA responder direto do aparelho, cole sua chave do Gemini (começa com AIza). Ela fica guardada só neste aparelho.') || '').trim(); }
      if (achou) try { localStorage.setItem('planoB:chaveGemini', achou); } catch (e) {}
      return achou;
    });
  }
  // ── IA (Gemini) ──
  var ESFORCO = { 1: 'ESFORCO: RAPIDO. Direto e objetivo.', 2: 'ESFORCO: BASICO. Pontos principais.', 3: 'ESFORCO: DETALHADO. Analise completa.', 4: 'ESFORCO: PROFUNDO. Fundamentacao robusta, nuances, legislacao.', 5: 'ESFORCO: EXAUSTIVO. Todos os angulos, teses, jurisprudencia.' };
  function sistema(b) {
    var e = Math.min(5, Math.max(1, Number(b.effortLevel) || 3));
    var s = PROMPTS.sys + '\n\n' + ESFORCO[e] + '\n' + (b.verbosity === 'curta' ? 'TAMANHO: CONCISO. Direto ao ponto.' : 'TAMANHO: COMPLETO. Desenvolva cada argumento.');
    if (Array.isArray(b.recentContext) && b.recentContext.length) s += '\n\n--- HISTÓRICO COMPLETO DO ADVOGADO ---\n' + b.recentContext.map(function (it, i) { return '[' + (i + 1) + '] Ação: ' + (it.acao || 'consulta') + '\nPergunta: ' + (it.pergunta || '') + '\nResposta: ' + (it.resposta || ''); }).join('\n\n') + '\n--- FIM DO HISTÓRICO ---\n';
    return s;
  }
  function ementasTexto(ids) {
    if (!Array.isArray(ids) || !ids.length) return Promise.resolve('');
    return ler('col:ementas').then(function (l) { l = Array.isArray(l) ? l : []; var sel = l.filter(function (e) { return ids.indexOf(e.id) >= 0; }); if (!sel.length) return '';
      return '\n\nJURISPRUDÊNCIA DE REFERÊNCIA SELECIONADA PELO ADVOGADO:\nUse-as como fundamentação.\n\n' + sel.map(function (e, i) { return 'EMENTA ' + (i + 1) + ' [' + (e.categoria || '') + '] - ' + (e.titulo || '') + ':\n' + (e.texto || ''); }).join('\n\n') + '\n'; });
  }
  function modeloDe(b) { return b && b.model === 'premium' ? 'gemini-2.5-pro' : 'gemini-2.5-flash'; }
  // resposta "aos pedaços" (igual ao servidor): data: {"content": "..."}
  function streamGemini(sys, usuario, modelo) {
    var enc = new TextEncoder();
    var corpo = new ReadableStream({
      start: function (ctl) {
        var mandar = function (o) { ctl.enqueue(enc.encode('data: ' + JSON.stringify(o) + '\n\n')); };
        chaveGemini().then(function (k) {
          if (!k) { mandar({ error: 'Sem chave do Gemini. O servidor não está ligado e o plano B precisa da sua chave.' }); mandar({ done: true }); ctl.close(); return; }
          var tentar = function (m, ultima) {
            return original('https://generativelanguage.googleapis.com/v1beta/models/' + m + ':streamGenerateContent?alt=sse&key=' + encodeURIComponent(k), { method: 'POST', headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ systemInstruction: { parts: [{ text: sys }] }, contents: [{ role: 'user', parts: [{ text: usuario }] }], generationConfig: { maxOutputTokens: 65536 } }) })
              .then(function (r) {
                if (!r.ok) return r.text().then(function (t) { if (!ultima && (r.status === 429 || r.status === 404 || r.status === 403)) { LOG('modelo', m, 'recusou (' + r.status + '), tentando o flash'); return tentar('gemini-2.5-flash', true); } var msg = ''; try { msg = JSON.parse(t).error.message; } catch (e) { msg = t.slice(0, 200); } throw new Error('Gemini (' + r.status + '): ' + msg); });
                var leitor = r.body.getReader(), dec = new TextDecoder(), buf = '';
                var passo = function () { return leitor.read().then(function (x) {
                  if (x.done) return;
                  buf += dec.decode(x.value, { stream: true }); var ls = buf.split('\n'); buf = ls.pop() || '';
                  ls.forEach(function (l) { if (l.indexOf('data: ') !== 0) return; try { var j = JSON.parse(l.slice(6)); var t = ((((j.candidates || [])[0] || {}).content || {}).parts || []).map(function (p) { return p.text || ''; }).join(''); if (t) mandar({ content: t }); } catch (e) {} });
                  return passo(); }); };
                return passo();
              });
          };
          return tentar(modeloDe.m || 'gemini-2.5-flash', false).then(function () { mandar({ done: true }); ctl.close(); });
        }).catch(function (e) { mandar({ error: e.message }); mandar({ done: true }); ctl.close(); });
      }
    });
    return new Response(corpo, { status: 200, headers: { 'Content-Type': 'text/event-stream', 'X-Plano-B': '1' } });
  }
  function perguntaSimples(sys, msgs) {
    return chaveGemini().then(function (k) {
      if (!k) return null;
      return original('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' + encodeURIComponent(k), { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ systemInstruction: { parts: [{ text: sys }] }, contents: msgs }) }).then(function (r) { return r.json(); }).then(function (j) {
        if (j.error) throw new Error('Gemini: ' + j.error.message);
        return ((((j.candidates || [])[0] || {}).content || {}).parts || []).map(function (p) { return p.text || ''; }).join('');
      });
    });
  }
  function ia(caminho, b) {
    b = b || {};
    if (caminho === '/api/ai/process') {
      var texto = String(b.text || b.textos || '').replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim();
      var modelo = PROMPTS.act[b.action];
      var custom = b.customActionId ? ler('col:custom-actions').then(function (l) { var a = (l || []).filter(function (x) { return x.id === b.customActionId; })[0]; return a ? a.prompt + '\n\n{{textos}}' : null; }) : Promise.resolve(modelo);
      return Promise.all([custom, ementasTexto(b.ementaIds)]).then(function (r) {
        if (!r[0]) return json({ message: 'Ação inválida' }, 400);
        var pref = r[1] ? '⚖️ EMENTAS SELECIONADAS PELO ADVOGADO — CITE-AS LITERALMENTE NA SEÇÃO DA JURISPRUDÊNCIA:\n' + r[1] + '\n---\n\n' : '';
        modeloDe.m = modeloDe(b);
        return streamGemini(sistema(b) + r[1], pref + r[0].replace('{{textos}}', texto.slice(0, 800000)));
      });
    }
    if (caminho === '/api/ai/refine') {
      var hist = Array.isArray(b.chatHistory) ? b.chatHistory.map(function (m) { return (m.role === 'user' ? 'ADVOGADO: ' : 'ASSISTENTE: ') + (m.content || ''); }).join('\n\n') : '';
      var u = (b.originalText ? 'TEXTO ORIGINAL:\n' + b.originalText + '\n\n' : '') + 'RESULTADO ANTERIOR:\n' + (b.previousResult || '') + '\n\n' + (hist ? 'CONVERSA:\n' + hist + '\n\n' : '') + 'INSTRUÇÃO DO ADVOGADO:\n' + (b.instruction || '') + '\n\nReescreva o documento COMPLETO aplicando a instrução.';
      if (!b.previousResult && Array.isArray(b.messages)) u = b.messages.map(function (m) { return m.role + ': ' + m.content; }).join('\n\n');
      modeloDe.m = modeloDe(b);
      return ementasTexto(b.ementaIds).then(function (e) { return streamGemini(sistema(b) + e, u); });
    }
    if (caminho === '/api/code-assistant') {
      modeloDe.m = 'gemini-2.5-flash';
      return Promise.resolve(streamGemini('Você é um assistente de programação. Responda em português, com o código completo quando pedirem código.', (b.prompt || b.message || '') + (b.html ? '\n\nHTML:\n' + b.html : '') + (b.css ? '\n\nCSS:\n' + b.css : '') + (b.js ? '\n\nJS:\n' + b.js : '')));
    }
    if (caminho === '/api/voice-chat') {
      var msgs = (Array.isArray(b.history) ? b.history : []).map(function (m) { return { role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user', parts: [{ text: m.content || m.text || '' }] }; });
      msgs.push({ role: 'user', parts: [{ text: String(b.message || '') }] });
      return perguntaSimples('Você é uma assistente jurídica brasileira conversando por voz. Respostas curtas, claras, em português, sem markdown.', msgs).then(function (t) { return t == null ? json({ message: 'Sem chave do Gemini' }, 400) : json({ reply: t }); });
    }
    return null;
  }

  // ── ▶ rodar código sem servidor: Python dentro do navegador (Pyodide) e JavaScript ──
  var pyP = null;
  function carregarPython() {
    if (pyP) return pyP;
    pyP = new Promise(function (ok, erro) {
      if (window.loadPyodide) return ok();
      var s = document.createElement('script'); s.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js';
      s.onload = function () { ok(); }; s.onerror = function () { pyP = null; erro(new Error('Não consegui baixar o Python do navegador (precisa de internet na 1ª vez).')); };
      document.head.appendChild(s);
    }).then(function () { return window.loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/' }); });
    return pyP;
  }
  function rodarCodigo(b) {
    var code = String((b && b.code) || ''), lang = (b && b.language) || 'python';
    if (!code.trim()) return Promise.resolve(json({ output: '', error: '', executedCode: code }));
    if (lang === 'javascript') {
      var saida = [];
      try { var log = function () { saida.push([].map.call(arguments, function (x) { return typeof x === 'object' ? JSON.stringify(x) : String(x); }).join(' ')); };
        new Function('console', code)({ log: log, info: log, warn: log, error: log });
        return Promise.resolve(json({ output: saida.join('\n') || '(sem saída — use console.log() para ver resultados)', error: '', executedCode: code })); }
      catch (e) { return Promise.resolve(json({ output: saida.join('\n'), error: String(e), executedCode: code })); }
    }
    return carregarPython().then(function (py) {
      var out = [], err = [];
      py.setStdout({ batched: function (t) { out.push(t); } }); py.setStderr({ batched: function (t) { err.push(t); } });
      return py.runPythonAsync(code).then(function () { return json({ output: out.join('\n') || '(sem saída — use print() para ver resultados)', error: err.join('\n'), executedCode: code }); },
        function (e) { return json({ output: out.join('\n'), error: String(e && e.message || e), executedCode: code }); });
    }, function (e) { return json({ output: '', error: e.message, executedCode: code }); });
  }

  // ── dados guardados no aparelho ──
  var APELIDO = { 'processos': 'processos-monitorados' };
  function colecao(partes) { var c = partes.filter(function (s) { return !ehId(s); }).join('/'); return APELIDO[c] || c; }
  function local(m, url, b) {
    var caminho = url.pathname.replace(/^.*?(\/api\/)/, '/api/').replace(/\/+$/, '');
    var r = ia(caminho, b); if (r) return Promise.resolve(r);
    if (caminho === '/api/code/run') return rodarCodigo(b);
    var partes = caminho.replace(/^\/api\/?/, '').split('/').filter(Boolean);
    if (/^\/api\/(health|healthz|status)(\/|$)/.test(caminho)) return Promise.resolve(json({ ok: true, status: 'ok', modo: 'plano-b', banco: 'aparelho', connected: false }));
    if (caminho === '/api/auth/check') return Promise.resolve(json({ authenticated: true, passwordRequired: false, modo: 'plano-b' }));
    if (/^\/api\/auth\/(login|logout)$/.test(caminho)) return Promise.resolve(json({ ok: true, authenticated: true }));
    if (/^\/api\/auth\/escritorio\/check$/.test(caminho)) return Promise.resolve(json({ authenticated: false, modo: 'plano-b', message: 'O escritório (vários advogados) precisa do servidor ligado.' }));
    if (/^\/api\/(tts|upload|export|pdpj|pje|datajud|integracoes|jurisprudencia|assinatura|drive|tramitacao\/(test|clientes|usuarios|notas|sync)|djen\/(executar|gerar-token)|cnj|import|extract|previdenciario|corporativo|pesquisa|jwt|collab|git-push|settings\/(db|env|database|drive))/.test(caminho) && m !== 'GET') {
      return Promise.resolve(json({ message: 'Isto precisa do servidor do jurídico ligado (computador). No celular, sem servidor, ainda não dá.', planoB: true }, 503));
    }
    // configurações (chaves etc.) → guardadas no aparelho
    if (/^settings(\/|$)/.test(partes.join('/'))) {
      var k = 'cfg:' + partes.slice(1).join('/');
      if (m === 'GET') return ler(k).then(function (v) { return json(v || {}); });
      return ler(k).then(function (v) { var n = Object.assign({}, v || {}, b && typeof b === 'object' ? b : { value: b }); return gravar(k, n).then(function () { return json(Object.assign({ ok: true }, n)); }); });
    }
    var col = 'col:' + colecao(partes), id = partes.length > 1 && ehId(partes[partes.length - 1]) ? partes[partes.length - 1] : null;
    return ler(col).then(function (lista) {
      lista = Array.isArray(lista) ? lista : [];
      var acha = function (x) { return String(x.id) === String(id); };
      if (m === 'GET') { if (id) { var it = lista.filter(acha)[0]; return it ? json(it) : json({ message: 'não achei' }, 404); } return json(lista.slice().reverse()); }
      if (m === 'POST') { var novo = Object.assign({ id: uid() }, b && typeof b === 'object' ? b : { valor: b }, { createdAt: new Date().toISOString() }); lista.push(novo); return gravar(col, lista).then(function () { return json(novo, 201); }); }
      if (m === 'PUT' || m === 'PATCH') { if (!id) return gravar(col, lista).then(function () { return json(Object.assign({ ok: true }, b)); }); var i = -1; lista.forEach(function (x, j) { if (acha(x)) i = j; }); if (i < 0) return json({ message: 'não achei' }, 404); lista[i] = Object.assign({}, lista[i], b, { updatedAt: new Date().toISOString() }); return gravar(col, lista).then(function () { return json(lista[i]); }); }
      if (m === 'DELETE') { lista = id ? lista.filter(function (x) { return !acha(x); }) : []; return gravar(col, lista).then(function () { return new Response(null, { status: 204, headers: { 'X-Plano-B': '1' } }); }); }
      return json({ message: 'método não suportado no plano B' }, 405);
    });
  }

  var ultimoAviso = 0;
  function avisar() {
    if (Date.now() - ultimoAviso < 60000) return; ultimoAviso = Date.now();
    try { var d = document.createElement('div'); d.textContent = '🧩 Sem servidor: salvando no aparelho e falando direto com a IA (plano B).'; d.style.cssText = 'position:fixed;left:50%;bottom:16px;transform:translateX(-50%);background:#1e3a5f;color:#fff;padding:10px 14px;border-radius:10px;font:14px system-ui;z-index:2147483647;max-width:92vw;box-shadow:0 4px 16px rgba(0,0,0,.3)'; document.body.appendChild(d); setTimeout(function () { d.remove(); }, 5000); } catch (e) {}
  }
  window.fetch = function (entrada, init) {
    var url, m;
    try { url = new URL(typeof entrada === 'string' ? entrada : (entrada && entrada.url) || String(entrada), location.href); m = String((init && init.method) || (entrada && entrada.method) || 'GET').toUpperCase(); } catch (e) { return original(entrada, init); }
    if (!/\/api\//.test(url.pathname) || /generativelanguage|googleapis/.test(url.hostname)) return original(entrada, init);
    var corpo = null; try { corpo = init && typeof init.body === 'string' ? JSON.parse(init.body) : (init && init.body) || null; } catch (e) { corpo = init.body; }
    var semServidor = function (motivo) { LOG(m, url.pathname, '→ no aparelho (' + motivo + ')'); avisar(); return local(m, url, corpo); };
    return original(entrada, init).then(function (resp) {
      var tipo = resp.headers.get('content-type') || '';
      if (resp.status === 404 && /json/.test(tipo)) return resp;                       // o servidor respondeu "não achei" de verdade
      if (resp.status === 404 || resp.status === 405 || resp.status === 502 || resp.status === 503 || resp.status === 504 || (resp.status >= 500 && !/json|event-stream/.test(tipo)) || /text\/html/.test(tipo)) return semServidor('servidor ' + resp.status);
      return resp;
    }, function (e) { if (e && e.name === 'AbortError') throw e; return semServidor('servidor desligado'); });
  };
  window.__planoB = { local: local, ler: ler, gravar: gravar };
})();
