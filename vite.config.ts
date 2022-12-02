import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  publicDir: 'public',
  build: {
    outDir: '../dist',
  },
  // base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
