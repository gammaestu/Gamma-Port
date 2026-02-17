/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        section: 'rgb(var(--section) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        text: 'rgb(var(--text) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        primary: 'rgb(var(--primary) / <alpha-value>)',
        'primary-hover': 'rgb(var(--primary-hover) / <alpha-value>)',
      },
      boxShadow: {
        soft: '0 12px 40px rgba(2, 6, 23, 0.10)',
        glow: '0 0 0 1px rgba(34, 211, 238, 0.25), 0 14px 50px rgba(34, 211, 238, 0.18)',
      },
    },
  },
  plugins: [],
}

