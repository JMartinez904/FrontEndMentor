/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      colors:{
        'darkcyan': 'hsl(185, 75%, 39%)',
        'verydarkdesaturatedblue': 'hsl(229, 23%, 23%)',
        'darkgrayishblue': 'hsl(227, 10%, 46%)',
        'darkgray': 'hsl(0, 0%, 59%)'
      },
      fontFamily:{
        'KumbhSans' : ['Kumbh Sans','sans-serif']
      }
    },
  },
  plugins: [],
}
