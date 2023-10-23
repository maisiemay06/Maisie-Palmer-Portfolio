/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "mp-lilac": "#e8d7f1",
        "mp-mauve": "#d3bccc",
        "mp-purple": "#a167a5",
        "mp-plum": "#4a306d",
        "mp-navy": "#0e273c",
        "mp-cream": "#f3e9dc",
      },
      fontFamily: {
        body: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
