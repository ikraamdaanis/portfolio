/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        textWhite: "#d4d4d4",
        lightPink: "#ffcddd",
        arrowColor: "#ffc5c0",
        offWhite: "#e6e6e6",
        black: "#000",
        darkBlack: "#151515",
        highlight: "#ffc5c0",
        placeholder: "#a0a0a0",
        cursor: "#afafaf"
      }
    }
  },
  plugins: []
};
