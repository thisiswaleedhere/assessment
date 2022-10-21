/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '920px'
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'ui-sans-serif'],
      },
      boxShadow: {
        default: '0px 10px 20px rgba(150, 150, 187, 0.1)',
      }
    },
  },
  plugins: [],
}
