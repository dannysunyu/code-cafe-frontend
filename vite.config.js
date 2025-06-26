import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vite.dev/config/
export default defineConfig({
  base: '/code-cafe-frontend',
  plugins: [
    react(),
    eslint(), // 添加 ESLint 插件
  ],
  server: {
    proxy: {
      // '/api': {
      //   target: 'http://localhost:3030',
      //   changeOrigin: true,
      // },
      '/api': {
        target: 'https://d12b-58-136-63-236.ngrok-free.app',
        changeOrigin: true,
      },
    },
  },
});
