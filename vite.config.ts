import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/<repo>/',
  plugins: [react()],
  server: {
    // open: true,
    port: 4000,
  },
});
