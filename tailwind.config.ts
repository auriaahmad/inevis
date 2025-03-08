// tailwind.config.js
import type { Config } from 'tailwindcss';
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...fontFamily.sans], // Poppins
        montserrat: ["Montserrat", ...fontFamily.sans], // Montserrat
      },
    },
  },
  plugins: [],
} satisfies Config;