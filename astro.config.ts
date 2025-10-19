import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ikraam.dev",
  integrations: [react(), sitemap()],
  adapter: cloudflare(),
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp"
    }
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport"
  },
  inlineStylesheets: "auto",
  vite: {
    // @ts-expect-error - Vite plugin type mismatch between
    // Astro's bundled version and direct dependency
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom"]
          }
        }
      }
    }
  }
});
