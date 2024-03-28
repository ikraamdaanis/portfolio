/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#D84847",
          50: "#F8DFDE",
          100: "#F5CECE",
          200: "#EDACAC",
          300: "#E68B8A",
          400: "#DF6969",
          500: "#D84847",
          600: "#BF2928",
          700: "#901F1F",
          800: "#621515",
          900: "#340B0B",
          950: "#1D0606"
        },
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
