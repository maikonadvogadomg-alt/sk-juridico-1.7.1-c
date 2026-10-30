// ⬅ Botão VOLTAR do celular dentro do APK: volta a página DENTRO do app (como no navegador).
// Na primeira página, em vez de fechar e perder tudo, o app só vai para o fundo (continua do mesmo jeito quando você volta).
// O GitHub roda isto depois do "npx cap add android".
const fs = require('fs'), path = require('path');
const raiz = process.argv[2] || 'android/app/src/main/java';
function achar(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) { const r = achar(p); if (r) return r; } else if (e.name === 'MainActivity.java') return p;
  }
  return null;
}
const arq = achar(raiz);
if (!arq) { console.log('⚠ Não achei o MainActivity.java em ' + raiz + ' (seguindo sem mudar).'); process.exit(0); }
const pacote = (/^package\s+([\w.]+);/m.exec(fs.readFileSync(arq, 'utf8')) || [])[1] || 'com.skjuridico.app';
fs.writeFileSync(arq, `package ${pacote};

import android.webkit.WebView;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onBackPressed() {
        try {
            WebView w = getBridge().getWebView();
            if (w != null && w.canGoBack()) { w.goBack(); return; }
        } catch (Exception ignorado) { }
        moveTaskToBack(true); // não fecha: só vai para o fundo, sem perder o que estava na tela
    }
}
`);
console.log('⬅ Botão voltar ajustado em ' + arq);
