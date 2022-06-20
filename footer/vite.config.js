import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
const deps = require("./package.json").dependencies;
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
      remotes: {
        cards: "http://localhost:4176/assets/cardsEntry.js",
      },
      exposes: {
        "./Footer": "./src/components/Footer/index.jsx",
      },
      resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    }),
  ],
  build: {
    target: "esnext",
  },
});
