/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-mint': '#E0FFF0', // Leaderboard bar er jonno
        'brand-dark': '#000000', // Header text er jonno
      },
    },
  },
  plugins: [require('daisyui')],
  // Option: DaisyUI background use korle custom font apply korte paren.
}