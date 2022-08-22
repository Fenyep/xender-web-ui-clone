/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        dissapear: 'dissapear 5s ease both',
        grow: 'grow 600ms ease infinite alternate',
      },
      keyframes: {
        dissapear: {
          '0%' : { opacity: '1' },
          '100%' : { opacity: '0'},
        },
        grow: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' }
        }
      }
    },
  },
  plugins: [],
}