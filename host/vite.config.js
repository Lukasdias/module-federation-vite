import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
const deps = require("./package.json").dependencies;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        header: "http://localhost:4173/assets/headerEntry.js",
        body: "http://localhost:4174/assets/bodyEntry.js",
        footer: "http://localhost:4175/assets/footerEntry.js",
        cards: "http://localhost:4176/assets/cardsEntry.js",
      },
      shared: {
        ...deps,
        react: {
          eager: true,
          singleton: true,
          requiredVersion: deps["react"],
        },
        "react-dom": {
          eager: true,
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
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
