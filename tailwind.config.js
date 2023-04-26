/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FFA500",
        "light--gray": "#EDF0F9",
        "button--green": "#10F635",
        "button--red": "#E03B16",
        "button--orange": "#FFB967",
      },
      fontFamily: {
        serif: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
