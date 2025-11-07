import { defineConfig, loadEnv } from "vite";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Resolve the project root reliably in ESM (avoids using `process.cwd()` which some linters flag)
  const root = fileURLToPath(new URL(".", import.meta.url));
  // Load env file based on `mode` from the project root. Vite exposes variables prefixed with VITE_ via import.meta.env
  loadEnv(mode, root, "");
  return {
    plugins: [react(), tailwindcss()],
  };
});
