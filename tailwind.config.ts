import type { Config } from 'tailwindcss'
import { colors } from '@/src/shared'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: colors,
      container: {
        center: true,
        screens: {
          sm: '100%',
          md: '991px',
          lg: '1180px',
          xl: '1180px',
        },
        padding: '1rem',
      },
    },
  },
  plugins: [],
}
export default config
