/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-rose': '#FFE4E1',
        'pastel-teal': '#B2DFDB',
        'earth-brown': '#8B7355',
        'warm-gray': '#F5F5F5',
        'accent-teal': '#4DB6AC',
      },
      backgroundImage: {
        'gradient-soft': 'linear-gradient(135deg, #FFE4E1 0%, #B2DFDB 100%)',
      },
    },
  },
  plugins: [],
} 