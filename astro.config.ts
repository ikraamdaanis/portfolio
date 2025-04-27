import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, passthroughImageService } from "astro/config";

export default defineConfig({
  site: "https://ikraamdaanis.github.io",
  base: "portfolio",
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react()],
  image: {
    service: passthroughImageService()
  }
});
