import { fileURLToPath, URL } from 'node:url';
import path from 'node:path';

import { defineConfig } from 'vite';

import webfontDownload from 'vite-plugin-webfont-dl';

import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400&family=Oswald:wght@400;700&display=swap',
    ]),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // eslint-disable-next-line no-undef
      '@components': path.resolve(__dirname, 'src', 'components'),
    },
  },
});
