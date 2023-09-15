const { title } = require('process')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
      fontFamily: {
        sanstitle: ['Syne', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
}
