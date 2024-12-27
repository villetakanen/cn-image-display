import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/my-image-gallery.ts', // Update entry point to .ts
      name: 'MyImageGallery',
      fileName: (format) => `my-image-gallery.${format}.js`,
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