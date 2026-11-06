/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Manrope', 'sans-serif']
      },
      colors: {
        ink: '#111827',
        paper: '#F7F6F2',
        accent: '#F36B45'
      },
      boxShadow: {
        soft: '0 18px 55px rgba(17, 24, 39, 0.08)'
      }
    }
  },
  plugins: []
}
