/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{html,tsx,jsx,ts,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Sora, sans-serif',
      },
      fontWeight: {
        DEFAULT: 300,
      },
    },
  },
  plugins: [],
}
