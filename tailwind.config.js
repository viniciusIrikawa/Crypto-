/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'purple': '#b743ff',
      },
      colors: {
        'white-low': '#e6e6e6',
        'crypto-purple': '#b743ff',
      }
    },
  },
  plugins: [],
}

