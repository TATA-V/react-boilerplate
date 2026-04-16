import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import babel from '@rolldown/plugin-babel';
import svgr from 'vite-plugin-svgr';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [
      babel({
        plugins: ['babel-plugin-react-compiler'],
      }),
      react(),
      tailwindcss(),
      svgr({ include: '**/*.svg' }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
        'src': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
});