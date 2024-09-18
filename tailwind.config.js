/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        fascinate: ['"Fascinate Inline"', "cursive"],
      },
      screens: {
        xs: "425px",
      },
    },
  },
  plugins: [],
};
