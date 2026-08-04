import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import preact from '@preact/preset-vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitest/config';
import makeManifest from './scripts/make-manifest.ts';

const rootDir = dirname(fileURLToPath(import.meta.url));
const src = resolve(rootDir, 'src');
const assetsDir = resolve(src, 'assets');
const outDir = resolve(rootDir, 'dist');
const publicDir = resolve(rootDir, 'public');

export default defineConfig({
  resolve: {
    alias: {
      '@src': src,
      '@assets': assetsDir,
    },
  },
  plugins: [makeManifest(), preact(), tailwindcss()],
  publicDir,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        content: resolve(src, 'content', 'index.ts'),
        background: resolve(src, 'background', 'index.ts'),
        popup: resolve(src, 'popup', 'index.html'),
        newtab: resolve(src, 'newtab', 'index.html'),
        devtools: resolve(src, 'devtools', 'index.html'),
        options: resolve(src, 'options', 'index.html'),
      },
      output: {
        entryFileNames: chunk => `src/${chunk.name}/index.js`,
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
  },
});
