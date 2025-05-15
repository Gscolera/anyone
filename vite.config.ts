import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss(), vue()],

  server: {
    port: 8080,
  },

  resolve: {
    alias: {
      '@': resolve(dirname(fileURLToPath(import.meta.url)), './src'),
    },
  },
});
