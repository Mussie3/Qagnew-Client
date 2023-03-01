/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeColor: 'fadeColor 200ms ease-in',
        fadeIn: 'fadeIn 1s ease-in',
        scrollIn: 'scrollIn 1s ease-in',
      },
      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: theme('opacity.0') },
          '100%': { opacity: theme('opacity.100') },
        },
        fadeColor: {
          '0%': { backgroundColor: theme('colors.transparent') },
          '100%': { backgroundColor: theme('colors.white') },
        },
        scrollIn: {
          '0%': {transform: 'translateX(-100%)'},
          '100%': {transform: 'translateX(0}'}
        }
      }),
    },
    fontFamily: {
      MaruBuri_Bold: ['MaruBuri-Bold', 'sans-serif'],
      MaruBuri_Regular: ['MaruBuri-Regular', 'sans-serif'],
      MaruBuri_Medium: ['MaruBuri-SemiBold', 'sans-serif'],
      Comfortaa_Regular: ['Comfortaa-Regular', 'sans-serif']
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}