import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig, passthroughImageService } from "astro/config";

export default defineConfig({
  site: "https://ikraamdaanis.github.io",
  base: "portfolio",
  integrations: [tailwind(), react()],
  image: {
    service: passthroughImageService()
  }
});
