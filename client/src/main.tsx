import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// ── Interceptor global de fetch — redireciona /api/... para servidor configurado
const _origFetch = window.fetch.bind(window);
window.fetch = (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
  const serverUrl = (localStorage.getItem("sk_server_url") || "").replace(/\/$/, "");
  if (serverUrl && typeof input === "string" && input.startsWith("/api/")) {
    return _origFetch(serverUrl + input, init);
  }
  if (serverUrl && input instanceof URL && input.pathname.startsWith("/api/")) {
    return _origFetch(serverUrl + input.pathname + input.search, init);
  }
  return _origFetch(input, init);
};

// 28/10: ir para outra tela funcionando nos dois modos (servidor ou "abre pelo index")
(window as any).__ir = (h: string) => { if (import.meta.env.MODE === "index" || location.protocol === "file:") location.hash = "#" + h; else location.href = h; };

// 28/10: no modo "abre pelo index", os links comuns (<a href="/painel">) viram #/painel
if (import.meta.env.MODE === "index" || location.protocol === "file:") {
  document.addEventListener("click", (e) => {
    const a = (e.target as HTMLElement | null)?.closest?.("a") as HTMLAnchorElement | null;
    const h = a?.getAttribute("href") || "";
    if (a && h.startsWith("/") && !h.startsWith("//") && !h.startsWith("/api/") && !a.target) { e.preventDefault(); location.hash = "#" + h; }
  }, true);
}

createRoot(document.getElementById("root")!).render(<App />);
