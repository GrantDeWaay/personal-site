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
        'swiss-red': '#de3d83',
        'swiss-yellow': '#e4bd0b',
        'swiss-blue': '#00b8b8',
        'swiss-gray': '#e0e5db',
        'faded-black': '#292928',
      },
      gridAutoRows: {
        'fixed': '', // or another fixed height value like '200px'
      },
    },
  },

  plugins: [],
}