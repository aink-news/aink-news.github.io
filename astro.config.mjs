import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";
import prefetch from "@astrojs/prefetch";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://aink.news",
  integrations: [tailwind(), prefetch(), sitemap()],
  output: "static",
  adapter: vercelStatic({
    analytics: true,
  }),
});
