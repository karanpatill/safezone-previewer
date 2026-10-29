import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://safezonesnap.com',
  compressHTML: true,
  build: {
    format: 'directory'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
