/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#0F4C81', // Azul Petróleo — cor principal da marca
          light: '#2F80ED', // Azul Elétrico — cor secundária / CTA
        },
        ink: {
          DEFAULT: '#2D3748', // Cinza Escuro — textos
        },
        surface: {
          DEFAULT: '#F7FAFC', // Cinza Claro — fundos
        },
      },
      boxShadow: {
        soft: '0 2px 16px rgba(15,76,129,0.08), 0 0 1px rgba(15,76,129,0.05)',
        brand: '0 8px 24px -8px rgba(47,128,237,0.45)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #0F4C81 0%, #2F80ED 100%)',
      },
    },
  },
  plugins: [],
}