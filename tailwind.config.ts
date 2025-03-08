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
        poppins: ["Poppins", ...fontFamily.sans],
        montserrat: ["Montserrat", ...fontFamily.sans],
      },
      animation: {
        // Smoother and infinite animation
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;