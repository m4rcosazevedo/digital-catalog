/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  prefix: '',
  corePlugins: {
    preflight: false // disable preflight (reset)
  },
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
