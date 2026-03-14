import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0D2B28',
          teal: '#1A5C54',
          'teal-mid': '#2A7A70',
          'teal-light': '#42C2BA',
          'teal-pale': '#E8F6F5',
          orange: '#E07B28',
          'orange-light': '#EE9147',
          cream: '#F8F5F0',
          'cream-dark': '#EDE8E0',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-teal': "linear-gradient(to right, #1A5C5408 1px, transparent 1px), linear-gradient(to bottom, #1A5C5408 1px, transparent 1px)",
        'grid-dark': "linear-gradient(to right, #42C2BA08 1px, transparent 1px), linear-gradient(to bottom, #42C2BA08 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}

export default config
