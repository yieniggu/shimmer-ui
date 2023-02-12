/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        "mabry-re": "'Mabry Regular', sans-serif",
        "mabry-me": "'Mabry Medium', sans-serif",
        "henue-re": "'Helvetica Neue Regular', sans-serif",
        "henue-me": "'Helvetica Neue Medium', sans-serif",
        "henue-ul": "'Helvetica Neue Ultra Light', sans-serif",
      },
      colors: {
        "init-gradient": "#ffdee9",
        "end-gradient": "#B5FFFC",
      },
    },
    screens: {
      tiny: "360px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1336px",
      "3xl": "1920px",
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
