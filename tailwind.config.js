/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-instrument-sans)'],
        serif: ['var(--font-newsreader)'],
        mono: ['var(--font-jetbrains-mono)'],
      },
    },
  },
  plugins: [],
}
