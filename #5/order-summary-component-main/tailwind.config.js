/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        'redhat': ['Red Hat Display','sans-serif'], 
      },
      colors:{
        'very-pale-blue': 'hsl(225, 100%, 98%)',
        'desaturatedblue': 'hsl(224, 23%, 55%)',
        'darkblue': 'hsl(223, 47%, 23%)',
        'paleblue': 'hsl(225, 100%, 94%)',
        'brightblue': 'hsl(245, 75%, 52%)'
      },dropShadow: {
        '2xl': '0 15px 15px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },screens: {
        'sp': '425px',
      },
      maxWidth: {
        'sp': '425px',
      }
    },
  },
  plugins: [],
}
