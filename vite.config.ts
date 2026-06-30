import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  plugins: [
    tailwindcss(),
    tsconfigPaths(),
    tanstackStart({
      // Target node-server for deployment on any Node.js host (Railway, Render, Fly.io, VPS).
      // Change to "bun" if deploying with Bun, or "cloudflare-pages" for Cloudflare.
      target: "node-server",
      server: {
        entry: "src/server.ts",
      },
    }),
    react(),
  ],
  resolve: {
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-start"],
  },
});
