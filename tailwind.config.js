/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,jpg,ttf}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'], // Add Helvetica as the default sans font
      },
      colors: {
        'faded-black': '#292928',
      },
    },
  },

  plugins: [],
}