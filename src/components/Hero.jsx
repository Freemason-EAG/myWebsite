const Hero = () => {
    return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-100 py-20">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Защита бизнеса и прав граждан
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Штрафы, проверки, экологические нарушения — решаю эти вопросы профессионально.
          10 лет опыта в надзорных органах.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition shadow-lg">
          Бесплатная консультация
        </button>
      </div>
    </div>
  )
}

export default Hero