/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        nexsign: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#1e7fca',  // Your main brand blue
          600: '#0a4d8c',  // Your secondary dark blue
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#1e3a70',
        },
        accent: {
          light: '#ff8e63',
          DEFAULT: '#ff6b35'
        }
      }
    },
  },
  plugins: [],
}

