/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#BA8039",
        black: "#101011",
        "black-secondary": "#383838",
        "form-bg": "#191919",
        "gray-primary": "#2D2D2D",
        "gray-secondary": "#838382",
        "gray-terciary": "#909090",
        "gray-quaternary": "#938E8E",
        arabic: "#77A9B0",
        robusta: "#3A383D",
        "orange-primary": "#D3AD7F",
      },
      fontFamily: {
        sans: ["Poppins"],
        mono: ["Bebas Neue"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
