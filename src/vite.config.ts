import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/cn-lightbox.ts', // Update entry point to .ts
      name: 'CnLightbox',
      fileName: (format) => `cn-lightbox.${format}.js`,
    },
    rollupOptions: {
      external: ['lit'],
      output: {
        globals: {
          lit: 'Lit',
        },
      },
    },
  },
});