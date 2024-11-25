/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{html,tsx,jsx,ts,js}', './blog/**/*.{html,tsx,jsx,ts,js}'],
  theme: {
    extend: {
      colors: {
        cv: {
          light: '#fec84d',
          dark: '#333',
        },
        skills: {
          light: '#e9cde8',
          dark: '#463946',
        },
      },
      fontFamily: {
        sans: 'elza, sans-serif',
      },
    },
  },
  plugins: [],
}
