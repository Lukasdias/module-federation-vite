import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4175,
  },
  plugins: [
    react(),
    federation({
      name: "footer",
      filename: "footerEntry.js",
      exposes: {
        "./Footer": "./src/components/Footer/index.tsx",
      },
    }),
  ],
  build: {
    target: "esnext",
  },
});
