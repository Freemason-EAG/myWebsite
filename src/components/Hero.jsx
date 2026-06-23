import heroBg from "../assets/IMG_0587.webp"

const Hero = () => {
  return (
    <div 
      className="relative text-white min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(7,23,57,0.85) 0%, rgba(7,23,57,0.4) 50%, rgba(166,136,104,0.15) 100%), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight font-heading">
          Защита бизнеса и <br /> 
          <span className="text-accent">прав граждан</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-8 font-body">
          Проверки, штрафы, защита прав потребителей — решаю эти вопросы профессионально.
          10 лет опыта в надзорных органах.
        </p>
        
        <button className="bg-accent hover:bg-accent-light text-white px-8 py-3 rounded-lg transition shadow-lg text-lg">
          Бесплатная консультация
        </button>
      </div>
    </div>
  )
}

export default Hero