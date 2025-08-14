import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://Cristian-Ruppel.github.io',
  base: '/ingenieria-del-conocimiento/',
  // ---
  integrations: [tailwind(), sitemap()]
});