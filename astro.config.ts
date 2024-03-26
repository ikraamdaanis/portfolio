import cloudflare from "@astrojs/cloudflare";
import { defineConfig, passthroughImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [tailwind()],
  image: {
    service: passthroughImageService(),
  },
});
