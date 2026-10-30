import { QueryClient, QueryFunction } from "@tanstack/react-query";

// 🔧 28/10 (da versão consertada): funciona também quando o app está numa subpasta
const BASE = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
function resolveUrl(url: string): string {
  if (url.startsWith("http")) return url;
  if (url.startsWith("/") && BASE && !url.startsWith(BASE)) return `${BASE}${url}`;
  return url;
}
// 🔧 28/10: em vez de "Failed to fetch" (inglês, sem dizer nada), explica em português
async function buscar(url: string, init: RequestInit): Promise<Response> {
  try { return await fetch(resolveUrl(url), init); }
  catch (e: any) {
    if (e && e.name === "AbortError") throw e;
    throw new Error("O servidor do jurídico não respondeu (" + url + "). Ele está ligado? No computador, deixe a janela do servidor aberta; no celular, o plano B guarda no aparelho.");
  }
}

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const res = await buscar(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await buscar(queryKey.join("/") as string, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    const tipo = res.headers.get("content-type") || "";
    if (tipo.includes("text/html")) throw new Error("O servidor do jurídico não está ligado (veio uma página no lugar dos dados).");
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
