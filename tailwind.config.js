/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{html,tsx,jsx,ts,js}'],
  theme: {
    extend: {
      animation: {
        appear: 'appear 0s linear forwards',
      },
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
      transitionTimingFunction: {
        custom: 'cubic-bezier(0.65, 0.05, 0.17, 0.99)',
      },
    },
  },
  plugins: [],
}
