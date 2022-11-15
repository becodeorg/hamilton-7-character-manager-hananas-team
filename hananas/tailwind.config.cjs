/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html","./*.{js,ts,jsx,tsx,html}",
  "./src/**/*.{js,ts,jsx,tsx,html}",],
  theme: {
    extend: {
      colors:{
        'green-blue': '#58A4B0',
        'soft-dark': '#373F51',
        'dark': '#1B1B1E',
        'light-blue': '#A9BCD0',
        'grey': '#D8DBE2',
      }
    },
  },
  plugins: [],
}
