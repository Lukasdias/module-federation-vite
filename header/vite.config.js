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
      exposes: {
        "./Header": "./src/components/Header/index.tsx",
      },
    }),
  ],
  build: {
    target: "esnext",
  },
});
