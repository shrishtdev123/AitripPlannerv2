import path from 'path';
import process from 'process';  // Import the process module
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'), // Now process.cwd() will work
    },
  },
});
