import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    // ... outros paths
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config