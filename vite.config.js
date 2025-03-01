import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  preview: {
    allowedHosts: ['hi-fi-whd3.onrender.com'],
  },
  plugins: [react()],
});