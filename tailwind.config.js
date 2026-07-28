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
          DEFAULT: '#071739',
          light: '#4B6382',
        },

        background: {
          DEFAULT: '#F8F6F3',
          card: '#FFFFFF',
        },

        accent: {
          DEFAULT: '#A68868',
          light: '#E3C39D',
        },
      },


      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },


      animation: {
        "arrow-down": "arrowDown 2s ease-in-out infinite",
      },


      keyframes: {
        arrowDown: {
          "0%, 100%": {
            transform: "translateY(0)",
          },

          "50%": {
            transform: "translateY(8px)",
          },
        },
      },


    },
  },


  plugins: [],
}