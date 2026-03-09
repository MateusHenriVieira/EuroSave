/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        euro: {
          primary: '#2ECC71',
          secondary: '#2C3E50',
          bg: '#F9FAFB',
        }
      }
    },
  },
  plugins: [],
}