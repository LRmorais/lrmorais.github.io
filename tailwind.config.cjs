/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#3b82f6' },
      },
      boxShadow: {
        soft: '0 2px 16px rgba(0,0,0,0.06), 0 0 1px rgba(0,0,0,0.03)',
      },
    },
  },
  plugins: [],
}