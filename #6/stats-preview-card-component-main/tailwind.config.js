/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      maxWidth:{
        'ss':'320px'
      },
      colors:{
        'verydarkblue': 'hsl(233, 47%, 7%)',
        'darkdesaturatedblue': 'hsl(244, 38%, 16%)',
        'softviolet': 'hsl(277, 64%, 61%)',
        'slightlytransparentwhite1': 'hsla(0, 0%, 100%, 0.75)',
        'slightlytransparentwhite2': 'hsla(0, 0%, 100%, 0.6)'
      },
      fontFamily:{
        'Inter': ['Inter', 'sans-serif'],
        'Lexend':['"Lexend Deca"', 'sans-serif']
      },
      fontSize:{
        '2xl': ['1.6rem', '2rem'],
      }
    },
  },
  plugins: [],
}
