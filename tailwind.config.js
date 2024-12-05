/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        body: ["Roboto","serif"]
      },
      colors: {
        primary: {
          DEFAULT: '#48BB78'  
        },
        secondary: {
          DEFAULT: '#6366F1'
        }
      },
    },
  },
  plugins: [],
}

