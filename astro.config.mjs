import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import nodejs from "@astrojs/node";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.bellezzadiem.fr",
  output: "server",
  adapter: nodejs({
    mode: "standalone",
  }),
  integrations: [tailwind(), sitemap()],
});
