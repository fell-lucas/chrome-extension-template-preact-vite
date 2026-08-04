import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Plugin } from 'vite';
import manifest from '../src/manifest.ts';
import colorLog from './color-log.ts';

const rootDir = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(rootDir, '..', 'public');

function writeManifest(targetDir: string) {
  if (!existsSync(targetDir)) {
    mkdirSync(targetDir, { recursive: true });
  }

  const manifestPath = resolve(targetDir, 'manifest.json');
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  colorLog(`Manifest file copy complete: ${manifestPath}`, 'success');
}

export default function makeManifest(): Plugin {
  return {
    name: 'make-manifest',
    buildStart() {
      // Ensure Vite's publicDir copy includes the latest manifest.
      writeManifest(publicDir);
    },
    writeBundle(options) {
      const outDir = options.dir;
      if (outDir) {
        writeManifest(outDir);
      }
    },
  };
}
