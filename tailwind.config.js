/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        main: "#006F7B",
        mainLight: "#208F9B",
        mainDark: "#044951",
      },
      fontFamily: {
        gambetta: ["Gambetta", "serif"],
        chivo: ["Chivo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
