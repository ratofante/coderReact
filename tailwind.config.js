const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extends: {},
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
