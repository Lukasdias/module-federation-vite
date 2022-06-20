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
      exposes: {
        "./Footer": "./src/components/Footer/index.tsx",
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
