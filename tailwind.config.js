/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        lightgray: "#F5F5F5",
        primary: "#2256CF",
        accent: "#EC4E00",
        darkblue: "#3A4558",
      },
    },
  },
  plugins: [],
}