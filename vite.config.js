import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/ytmusic.js'),
      name: 'YTMusicAPI',
      fileName: 'ytmusic-bundle',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      output: {
        dir: 'dist',
        globals: {}
      }
    },
    outDir: 'dist',
    emptyOutDir: true
  }
});
