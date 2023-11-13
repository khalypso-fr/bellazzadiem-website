import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://www.bellezzadiem.fr",
  output: "server",
  adapter: netlify(),
  integrations: [tailwind(), sitemap()],
});
