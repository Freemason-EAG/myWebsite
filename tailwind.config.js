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
          DEFAULT: '#071739',    // основной текст, заголовки, темный фон
          light: '#4B6382',      // подзаголовки, втор. текст
        },
        background: {
          DEFAULT: '#F8F6F3',   // основной фон страницы
          card: '#FFFFFF',       // карточки, блоки
        },
        accent: {
          DEFAULT: '#A68868',    // кнопки, ссылки, акценты
          light: '#E3C39D',      // светлый акцент, выделения
        }
      },

    fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      }, 

    },
  },
  plugins: [],
}