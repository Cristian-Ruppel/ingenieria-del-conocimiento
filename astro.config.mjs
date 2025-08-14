import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://Cristian-Ruppel.github.io',
  base: '/ingenieria-del-conocimiento/',
  // ---
  integrations: [tailwind()]
});