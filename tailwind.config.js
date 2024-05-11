/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'img-home': "url('/bg-homepage.jpg')"
      },
      backgroundColor: {
        'purple': '#b743ff',
      },
      colors: {
        'white-low': '#e5e5e5',
        'crypto-purple': '#b743ff',
      }
    },
  },
  plugins: [],
}

