import { Link } from "react-router-dom"

const About = () => {
  return (
    <section className="text-primary h-screen flex flex-col md:flex-row overflow-hidden">
      
      {/* Левая половина — Фото (строго 50% ширины, 100% высоты) */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-full overflow-hidden">
        <img 
          src="/src/assets/myPhoto.webp" 
          alt="Арутюн Егоян" 
          className="w-full h-full object-cover object-[center_25%]"
        />
      </div>
      
      {/* Правая половина — Текст (строго 50% ширины, 100% высоты) */}
      <div className="w-full
    md:w-1/2
    h-[50vh]
    md:h-full
    flex
    items-center
    justify-center
    overflow-y-auto
    py-8
    px-6
    md:px-12
    lg:px-16
    bg-gradient-to-r
    from-[#CBC3BA]
via-[#E5DFD8]
to-background">
        <div className="max-w-xl">
          <h2 className="text-3xl 
            md:text-4xl 
            lg:text-5xl 
            font-bold 
            font-heading 
            mb-2
            text-primary">
            Арутюн Егоян
          </h2>

<div className="flex items-center gap-4 mb-4">
  <div className="h-px flex-1 bg-accent/30"></div>
  <span className="text-[10px] uppercase tracking-[0.2em] text-accent/40 font-light italic">
    Lex rex
  </span>
  <div className="h-px flex-1 bg-accent/30"></div>
</div>

          <p className="text-xl md:text-2xl text-accent font-medium mb-4">
            Юрист с практическим опытом в системе
          </p>
          
          {/* Цитата */}
          <div className="relative mb-8 pl-4 md:pl-6 border-l-4 border-accent/50">
            <p className="
              text-primary-light
              text-base
              md:text-lg
              leading-relaxed
              font-light
              italic
            ">
              "Более 10 лет я работал в судебной системе, правоохранительных и надзорных органах.
              <br /><br />
              Я понимаю, как формируются проверки, решения и штрафы — не из теории, а из практики.
              <br /><br />
              На сегодняшний день я использую этот опыт, чтобы помочь бизнесу и гражданам защитить свои права, оспаривать штрафы и выстроить позицию в сложных правовых спорах."
            </p>
            {/* Кавычка в углу */}
            <div className="absolute -top-2 -left-2 text-accent/10 font-serif text-7xl leading-none">
              "
            </div>
          </div>
          
          {/* Цифры */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <span className="block text-3xl md:text-4xl font-bold font-heading text-accent">10+</span>
              <span className="block mt-1 text-primary-light text-sm">лет практики</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-bold font-heading text-accent">5+</span>
              <span className="block mt-1 text-primary-light text-sm">лет в надзоре</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-bold font-heading text-accent">300+</span>
              <span className="block mt-1 text-primary-light text-sm">успешных кейсов</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-bold font-heading text-accent">500+</span>
              <span className="block mt-1 text-primary-light text-sm">консультаций</span>
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

