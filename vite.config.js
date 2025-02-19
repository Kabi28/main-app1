
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['react-redux']  // Add react-redux to the external list
    }
  }
});

