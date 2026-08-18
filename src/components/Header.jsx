import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const handleSectionClick = (section) => {
  if (isHome) {
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
    })
  } else {
    window.location.href = `/#${section}`
  }
}

  return (
    <header className="bg-primary shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        {/* Логотип */}
        <Link
          to="/"
          className="text-2xl font-bold text-white font-heading hover:text-accent-light transition"
        >
          Юрист Егоян А.Г.
        </Link>


        {/* Десктопное меню */}
        <nav className="hidden md:flex space-x-6 items-center">


          {/* Основные направления */}
          <Link
            to="/business"
            className="text-white/80 hover:text-accent-light transition"
          >
            Бизнесу
          </Link>


          <Link
            to="/citizens"
            className="text-white/80 hover:text-accent-light transition"
          >
            Гражданам
          </Link>


          {/* Якорные ссылки главной страницы */}
          {isHome ? (
            <>
            <button
              onClick={() => handleSectionClick("services")}
              className="text-white/80 hover:text-accent-light transition"
            >
            Услуги
            </button>

            <button
              onClick={() => handleSectionClick("about")}
              className="text-white/80 hover:text-accent-light transition"
            >
            Обо мне
            </button>

            <button
              onClick={() => handleSectionClick("contact")}
              className="text-white/80 hover:text-accent-light transition"
            >
            Контакты
            </button>
            </>
          ) : (
            <>
              <Link
                to="/#services"
                className="text-white/80 hover:text-accent-light transition"
              >
                Услуги
              </Link>

              <Link
                to="/#about"
                className="text-white/80 hover:text-accent-light transition"
              >
                Обо мне
              </Link>

              <Link
                to="/#contact"
                className="text-white/80 hover:text-accent-light transition"
              >
                Контакты
              </Link>
            </>
          )}


          {/* Карьера */}
          <Link
            to="/career"
            className="text-accent-light hover:text-accent border-b-2 border-accent-light transition"
          >
            Карьера
          </Link>

        </nav>


        {/* Кнопка бургер-меню */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white/80 hover:text-accent-light focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

      </div>



      {/* Мобильное меню */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-white/10 py-4 px-4">

          <nav className="flex flex-col space-y-3">


            {/* Основные разделы */}
            <Link
              to="/business"
              className="text-white/80 hover:text-accent-light transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Для бизнеса
            </Link>


            <Link
              to="/citizens"
              className="text-white/80 hover:text-accent-light transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Для граждан
            </Link>



            {/* Главная страница */}
            {isHome ? (
              <>
                <a
                  href="#services"
                  className="text-white/80 hover:text-accent-light transition py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Услуги
                </a>


                <a
                  href="#about"
                  className="text-white/80 hover:text-accent-light transition py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Обо мне
                </a>


                <a
                  href="#contact"
                  className="text-white/80 hover:text-accent-light transition py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Контакты
                </a>
              </>
            ) : (
              <>
                <Link
                  to="/#services"
                  className="text-white/80 hover:text-accent-light transition py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Услуги
                </Link>


                <Link
                  to="/#about"
                  className="text-white/80 hover:text-accent-light transition py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Обо мне
                </Link>


                <Link
                  to="/#contact"
                  className="text-white/80 hover:text-accent-light transition py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Контакты
                </Link>
              </>
            )}



            {/* Карьера */}
            <Link
              to="/career"
              className="text-accent-light hover:text-accent transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Карьера
            </Link>


          </nav>

        </div>
      )}

    </header>
  )
}

export default Header
