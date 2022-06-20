import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4173,
  },
  plugins: [
    react(),
    federation({
      name: "header",
      filename: "headerEntry.js",
      remotes: {
        cards: "http://localhost:4176/assets/cardsEntry.js",
      },
      exposes: {
        "./Header": "./src/components/Header/index.jsx",
      },
    }),
  ],
  build: {
    target: "esnext",
  },
});
