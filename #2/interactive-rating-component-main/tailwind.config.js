/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./src/*.js"],
  theme: {
    extend: {
      fontFamily:{
        'overpass':['Overpass', 'sans-serif']
      }
    },
  },
  plugins: [],
}
