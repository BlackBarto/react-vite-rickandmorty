/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      flexGrow: {
        "2": 2
      },
      gridTemplateColumns: {
        "characters": "repeat(auto-fit, minmax(250px, 1fr))"
      },
      gridAutoRows: {
        "characters": "minmax(280px, 1fr)"
      }
    },
  },
  plugins: [],
}
