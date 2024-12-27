import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig, passthroughImageService } from "astro/config";

export default defineConfig({
  integrations: [tailwind(), react()],
  image: {
    service: passthroughImageService()
  }
});
