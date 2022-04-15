import { defineConfig } from "vite";
import { resolve } from "path";
import preact from "@preact/preset-vite";
import makeManifest from "./scripts/make-manifest";

const root = resolve(__dirname, "src");
const pagesDir = resolve(root, "pages");
const assetsDir = resolve(root, "assets");
const outDir = resolve(__dirname, "dist");
const publicDir = resolve(__dirname, "public");

export default defineConfig({
  resolve: {
    alias: {
      "@src": root,
      "@assets": assetsDir,
      "@pages": pagesDir,
    },
  },
  plugins: [makeManifest(), preact()],
  publicDir,
  build: {
    outDir,
    rollupOptions: {
      input: {
        content: resolve(pagesDir, "Content", "index.ts"),
        background: resolve(pagesDir, "Background", "index.ts"),
        popup: resolve(pagesDir, "Popup", "index.tsx"),
        newtab: resolve(pagesDir, "Newtab", "index.tsx"),
        devtools: resolve(pagesDir, "DevTools", "index.tsx"),
        options: resolve(pagesDir, "Options", "index.tsx"),
      },
      output: { entryFileNames: (chunk) => `${chunk.name}.js` },
      external: ["chrome"],
    },
  },
});
