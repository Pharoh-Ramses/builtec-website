import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://builtecusa.com',
  base: '/',
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react()
  ],
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false
    }
  },
  build: {
    assets: 'assets'
  }
});
