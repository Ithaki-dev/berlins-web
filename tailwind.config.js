/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef8f3',
          100: '#fcefe3',
          200: '#f9dcc4',
          300: '#f4c19b',
          400: '#ec9961',
          500: '#e67e3c',
          600: '#d76531',
          700: '#b34f28',
          800: '#8f4127',
          900: '#743722',
        },
        gold: {
          50: '#fcfbf8',
          100: '#f8f4ed',
          200: '#efe5d3',
          300: '#e4d1b0',
          400: '#d7b685',
          500: '#cda065',
          600: '#c08d59',
          700: '#a0734b',
          800: '#815d41',
          900: '#694c36',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
