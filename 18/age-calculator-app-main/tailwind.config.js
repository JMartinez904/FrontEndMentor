/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "hsl(259, 100%, 65%)",
        lightRed: "hsl(0, 100%, 67%)",
        offWhite: "hsl(0, 0%, 94%)",
        lightGrey: "hsl(0, 0%, 86%)",
        smokeyGrey: "hsl(0, 1%, 44%)",
        offBlack: "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        poppins : ['Poppins', 'sans-serif']
      },
      borderRadius: {
        card : "1.5rem 1.5rem 15rem 1.5rem",
        cardMobile : "1.5rem 1.5rem 7rem 1.5rem",
      },
      backgroundImage: {
        arrow : "url(/images/icon-arrow.svg)"
      }
    },
  },
  plugins: [],
};
