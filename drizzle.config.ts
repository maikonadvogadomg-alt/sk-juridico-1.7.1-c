// Cria as tabelas no seu banco (Neon ou Supabase): coloque o endereço em DATABASE_URL e rode  npm run banco
// (ou só cole o endereço em Configurações → Banco de dados, dentro do app)
import { defineConfig } from "drizzle-kit";
import fs from "fs";
let url = process.env.DATABASE_URL || "";
if (!url) { try { url = JSON.parse(fs.readFileSync("config.local.json", "utf8")).database_url || ""; } catch {} }
if (!url) throw new Error("Falta o endereço do banco: cole em Configurações (no app) ou defina DATABASE_URL.");
export default defineConfig({ schema: "./shared/schema.ts", dialect: "postgresql", dbCredentials: { url } });
