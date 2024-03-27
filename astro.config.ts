import cloudflare from "@astrojs/cloudflare";
import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [tailwind(), react()],
  image: {
    service: passthroughImageService()
  }
});