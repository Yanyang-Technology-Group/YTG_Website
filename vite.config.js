import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { execFileSync } from 'node:child_process';

const appVersion = execFileSync('node', ['scripts/get-version.js'], { encoding: 'utf8' }).trim();

export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(appVersion),
  },
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
  },
});
