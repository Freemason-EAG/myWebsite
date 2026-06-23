import { Link } from "react-router-dom"

const About = () => {
  return (
    <section className="bg-primary text-white h-screen flex flex-col md:flex-row overflow-hidden">
      
      {/* Левая половина — Фото (строго 50% ширины, 100% высоты) */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-full overflow-hidden">
        <img 
          src="/src/assets/myPhoto.webp" 
          alt="Арутюн Егоян" 
          className="w-full h-full object-cover object-[center_25%]"
        />
      </div>
      
      {/* Правая половина — Текст (строго 50% ширины, 100% высоты) */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-full flex items-center justify-center overflow-y-auto py-8 px-6 md:px-12 lg:px-16">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-2">
            Арутюн Егоян
          </h2>
          <p className="text-xl md:text-2xl text-accent-light font-medium mb-4">
            Юрист с 10-летним стажем
          </p>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
            Моя карьера началась в судебной системе, затем я работал в полиции, 
            Роспотребнадзоре и Департаменте природопользования. Я знаю, как устроена 
            система контроля изнутри. Моя задача — не просто знать законы, а защищать 
            вас от них, когда это необходимо.
          </p>
          
          {/* Цифры */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <span className="block text-3xl md:text-4xl font-bold font-heading text-accent">10+</span>
              <span className="block mt-1 text-white/70 text-sm">лет опыта</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-bold font-heading text-accent">5+</span>
              <span className="block mt-1 text-white/70 text-sm">лет в надзоре</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-bold font-heading text-accent">300+</span>
              <span className="block mt-1 text-white/70 text-sm">договоров ДДУ</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-bold font-heading text-accent">500+</span>
              <span className="block mt-1 text-white/70 text-sm">консультаций</span>
            </div>
          </div>
          
          {/* Кнопка */}
          <Link
            to="/career"
            className="inline-block border border-accent text-accent hover:bg-accent hover:text-primary px-6 py-3 rounded-lg transition font-medium"
          >
            Подробнее о карьере →
          </Link>
        </div>
      </div>
      
    </section>
  )
}

export default About

