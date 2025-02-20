import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
    site: 'https://builtecusa.com', // Replace with your site URL
    base: '/',
    output: 'static',
    integrations: [
        tailwind({ applyBaseStyles: false }),
        react()
    ],
    build: {
        assets: 'assets'
    }
});