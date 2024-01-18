/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true
    },
    extend: {}
  },
  plugins: [
    'postcss-import',
    'postcss-nesting',
    'tailwindcss',
    'autoprefixer',
    'tailwindcss-animate'
  ]
}
