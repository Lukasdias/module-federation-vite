import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4176,
  },
  plugins: [
    react(),
    federation({
      name: "cards",
      filename: "cardsEntry.js",
      exposes: {
        "./Cards": "./src/components/Cards/index.tsx",
      },
    }),
  ],
  build: {
    target: "esnext",
  },
});
