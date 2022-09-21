/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors:{
      'brightorange': 'hsl(31, 77%, 52%)',
      'darkcyan': 'hsl(184, 100%, 22%)',
      'verydarkcyan': 'hsl(179, 100%, 13%)',
      'transparentwhite': 'hsla(0, 0%, 100%, 0.60)',
      'verylightgray': 'hsl(0, 0%, 95%)',
      },
      fontFamily:{
        'bigshouldersdisplay':['Big Shoulders Display', 'cursive'],
        'lexenddeca':['Lexend Deca', 'sans-serif'] 
      }
    },
  },
  plugins: [],
}
