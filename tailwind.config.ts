// tailwind.config.js
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: 'var(--color-primary-black)',
        charcoal: 'var(--color-charcoal-gray)',
        dim: 'var(--color-dim-gray)',
        lightGray: 'var(--color-light-gray)',
        gainsboro: 'var(--color-gainsboro)',
        darkGreen: 'var(--color-dark-green)',
        forestGreen: 'var(--color-forest-green)',
        seaGreen: 'var(--color-sea-green)',
        mediumSeaGreen: 'var(--color-medium-sea-green)',
        paleGreen: 'var(--color-pale-green)',
      },
    },
  },
  plugins: [],
} satisfies Config;