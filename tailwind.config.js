/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{html,tsx,jsx,ts,js}', './blog/**/*.{html,tsx,jsx,ts,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'elza, sans-serif',
      },
      transitionTimingFunction: {
        custom: 'cubic-bezier(0.65, 0.05, 0.17, 0.99)',
      },
    },
  },
  plugins: [],
}
