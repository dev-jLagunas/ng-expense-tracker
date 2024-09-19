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
      width: {
        "90vw": "90vw",
      },
    },
  },
  plugins: [],
};
