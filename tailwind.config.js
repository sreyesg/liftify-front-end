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
          DEFAULT: '#2D7B4E'  
        },
        secondary: {
          DEFAULT: '#5154F0'
        }
      },
    },
  },
  plugins: [],
}

