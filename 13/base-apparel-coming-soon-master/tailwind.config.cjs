/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'josefinsan': ['Josefin Sans', 'sans-serif']
      },
      colors: {
        'DesaturatedRed' : 'hsl(0, 36%, 70%)',
        'SoftRed' : 'hsl(0, 93%, 68%)',
        'DarkGrayishRed' : 'hsl(0, 6%, 24%)'
      }
    },
  },
  plugins: [],
}