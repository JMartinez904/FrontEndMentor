/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins' : ['Poppins', 'sans-serif']
      },
      colors : {
        'Red': 'hsl(0, 100%, 74%) ',
        'Green': 'hsl(154,59%,51%)',
        'Blue': 'hsl(248, 32%, 49%)',
        'DarkBlue': 'hsl(249, 10%, 26%)',
        'GrayishBlue': 'hsl(246, 25%, 77%)'
      },
      boxShadow : {
        'custom' : '0px 7px 0px rgba(0 0 0 / 20%)'
      }
    },
  },
  plugins: [],
}