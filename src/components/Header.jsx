const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Логотип / название */}
        <span className="text-2xl font-bold text-green-700">
          ЭкоЮрист
        </span>

        {/* Навигация */}
        <nav className="space-x-6">
          <a href="#" className="text-gray-600 hover:text-green-600 transition">
            Услуги
          </a>
          <a href="#" className="text-gray-600 hover:text-green-600 transition">
            Обо мне
          </a>
          <a href="#" className="text-gray-600 hover:text-green-600 transition">
            Контакты
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header