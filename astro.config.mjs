import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://www.bellezzadiem.fr",
  output: "server",
  adapter: netlify(),
  integrations: [icon(), tailwind(), sitemap()],
});
