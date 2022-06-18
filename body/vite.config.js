import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4174,
  },
  plugins: [
    react(),
    federation({
      name: "body",
      filename: "bodyEntry.js",
      exposes: {
        "./Body": "./src/components/Body/index.tsx",
      },
    }),
  ],
  build: {
    target: "esnext",
  },
});
