/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#fef9e7',
          100: '#fdf4ce',
          200: '#fbe99d',
          300: '#f8de6c',
          400: '#f6d33b',
          500: '#f2d51b',
          600: '#c2aa16',
          700: '#918010',
          800: '#61550b',
          900: '#302b05',
        },
        dark: {
          50: '#6b6b6c',
          100: '#4a4a4b',
          200: '#3a3a3b',
          300: '#2a2a2b',
          400: '#1a1a1b',
          500: '#0c0c0d',
          600: '#0a0a0b',
          700: '#080808',
          800: '#060606',
          900: '#000000',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        body: ['"Roboto Condensed"', 'Arial', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E')",
      },
      boxShadow: {
        'neon-yellow': '0 0 20px rgba(242, 213, 27, 0.5)',
        'neon-yellow-strong': '0 0 40px rgba(242, 213, 27, 0.8)',
      },
    },
  },
  plugins: [],
}
