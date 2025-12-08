/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-crimson)', 'Georgia', 'serif'],
      },
      colors: {
        primary: {
          text: '#1a1a1a',
          accent: '#0d7377',
          'accent-hover': '#0a5c5f',
          'accent-light': '#e0f2f1',
        },
        secondary: {
          text: '#525252',
        },
        tertiary: {
          text: '#737373',
        },
        divider: '#e5e5e5',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
