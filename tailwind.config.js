/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      'dark': '#151515',
      'neutral': '#4E4D4B',
      'accent': '#D5966B',
      'white': '#ffffff'
    },
    extend: {
      keyframes: {
        bg: {
          'from': { transform: 'translateX(-110vw)' },
          'to': { transform: 'translateX(0)' },
        }
      },
      animation: {
        showBackground: 'bg 1s ease-in-out',
      }
    }
  },
  plugins: [],
}
