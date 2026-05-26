import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Логотип */}
        <span className="text-2xl font-bold text-green-700">ЭкоЮрист</span>

        {/* Десктопное меню (показывается на больших экранах) */}
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="text-gray-600 hover:text-green-600 transition">
            Услуги
          </a>
          <a href="#about" className="text-gray-600 hover:text-green-600 transition">
            Обо мне
          </a>
          <a href="#contact" className="text-gray-600 hover:text-green-600 transition">
            Контакты
          </a>
        </nav>

        {/* Кнопка бургер-меню (показывается на мобильных) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 hover:text-green-600 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Мобильное меню (показывается при isOpen === true) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4">
          <nav className="flex flex-col space-y-3">
            <a 
              href="#services" 
              className="text-gray-600 hover:text-green-600 transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Услуги
            </a>
            <a 
              href="#about" 
              className="text-gray-600 hover:text-green-600 transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Обо мне
            </a>
            <a 
              href="#contact" 
              className="text-gray-600 hover:text-green-600 transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Контакты
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header