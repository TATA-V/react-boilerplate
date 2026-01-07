import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
    svgr({ include: '**/*.svg' }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
      'src': path.resolve(__dirname, 'src'),
    },
  },
});
