const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      eliiot: {
        b1: "#198C9B",
        b2: "#1BBCB2",
        b3: "#7B8186",
        b4: "#2299a9",
        g1: "#E5E5E5",
        g2: "#4A4A4A",
        c: "#5C7190",
        bg: "#F6F7F8"
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}