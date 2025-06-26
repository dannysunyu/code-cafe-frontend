import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(), // 添加 ESLint 插件
  ],
  base: '/code-cafe-frontend',
  server: {
    // proxy: {
    //   '/api': {
    //     target: 'https://55f7-184-82-113-69.ngrok-free.app',
    //     changeOrigin: true,
    //   },
    // },
  },
});
