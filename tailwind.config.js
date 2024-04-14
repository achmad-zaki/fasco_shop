/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'volkhov': ['Volkhov', 'serif'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        'custom-gray': '#9D9D9D',
        'custom-blue': '#5B86E5',
      },
    },
  },
  plugins: [],
}

