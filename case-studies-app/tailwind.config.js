/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        background: '#080808',
        card: '#111111',
        border: '#1e1e1e',
        accent: '#7B61FF',
        accentGlow: '#9d87ff',
      },
    },
  },
  plugins: [],
}
