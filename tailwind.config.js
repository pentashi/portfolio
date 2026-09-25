/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Colors reference CSS variables (defined per-theme in styles/tailwind.css)
      // so every `bg-parchment` / `text-clay` / etc. class is theme-switchable.
      colors: {
        parchment: 'var(--parchment)',
        'parchment-dark': 'var(--parchment-dark)',
        'parchment-deeper': 'var(--parchment-deeper)',
        graphite: 'var(--graphite)',
        'graphite-light': 'var(--graphite-light)',
        blue: 'var(--blue)',
        'blue-light': 'var(--blue-light)',
        'blue-dark': 'var(--blue-dark)',
        clay: 'var(--clay)',
        'clay-light': 'var(--clay-light)',
        'clay-dark': 'var(--clay-dark)',
        dark: 'var(--dark)',
        'dark-surface': 'var(--dark-surface)',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        serif: ['Fraunces', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      fontSize: {
        display: 'clamp(3rem, 6vw, 5.5rem)',
        'display-sm': 'clamp(2rem, 4vw, 3.5rem)',
      },
    },
  },
  plugins: [],
};
