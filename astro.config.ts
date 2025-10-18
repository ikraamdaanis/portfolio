import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ikraamdaanis.github.io",
  base: "portfolio",
  integrations: [react()],
  adapter: cloudflare(),
  vite: {
    // @ts-expect-error - Vite plugin type mismatch between
    // Astro's bundled version and direct dependency
    plugins: [tailwindcss()]
  }
});
