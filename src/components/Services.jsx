const services = [
  {
    icon: '⚖️',
    title: 'Штрафы и КоАП',
    description: 'Обжалование постановлений, защита в суде, снижение сумм штрафов.',
    details: [
      'Обжалование постановлений о штрафах',
      'Защита в суде по делам об административных правонарушениях',
      'Снижение сумм штрафов',
      'Споры с ГИБДД, Роспотребнадзором и другими органами',
    ],
  },
  {
    icon: '🌿',
    title: 'Экологические нарушения',
    description: 'Защита при проверках Росприроднадзора, споры об ущербе.',
    details: [
      'Защита при проверках Росприроднадзора',
      'Споры о возмещении экологического ущерба',
      'Обжалование предписаний',
      'Сопровождение при административных расследованиях',
    ],
  },
  {
    icon: '🛡️',
    title: 'Защита прав потребителей',
    description: 'Возврат денег, иски, досудебные претензии.',
    details: [
      'Досудебные претензии к продавцам',
      'Иски о защите прав потребителей',
      'Возврат товаров ненадлежащего качества',
      'Взыскание неустоек и морального вреда',
    ],
  },
  {
    icon: '🏛️',
    title: 'Санитарно-эпидемиологический надзор',
    description: 'Защита при проверках Роспотребнадзора, оспаривание предписаний.',
    details: [
      'Сопровождение проверок Роспотребнадзора',
      'Оспаривание предписаний',
      'Защита при административных расследованиях',
      'Консультации по санитарному законодательству',
    ],
  },
  {
    icon: '📝',
    title: 'Консультации онлайн',
    description: 'Письменные и устные консультации по любым правовым вопросам.',
    details: [
      'Устные и письменные консультации',
      'Правовой анализ документов',
      'Подготовка правовых заключений',
      'Консультации по телефону и в мессенджерах',
    ],
  },
  {
    icon: '🏢',
    title: 'Представительство в суде',
    description: 'Полное ведение дела от подготовки иска до получения решения.',
    details: [
      'Подготовка исковых заявлений',
      'Представительство в судах всех инстанций',
      'Обжалование судебных решений',
      'Ведение дела "под ключ"',
    ],
  },
]

const Services = () => {
  return (
    <section className="min-h-screen bg-background flex items-center py-16 md:py-24">
      <div className="container mx-auto px-4">
        
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary">
            Мои услуги
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-3 mb-4"></div>
          <p className="text-primary-light text-lg max-w-2xl mx-auto">
            Помогаю бизнесу и гражданам в спорах с государством
          </p>
        </div>
        
        {/* Сетка услуг */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-background-card border border-black/5
                         shadow-sm hover:shadow-xl
                         transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                         p-6 cursor-pointer overflow-visible
                         hover:-translate-y-1 hover:scale-[1.01]
                         hover:z-20"
            >
              {/* subtle glow border like Apple UI */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                              transition-opacity duration-500
                              bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

              {/* Индикатор интерактивности — пульсирующая точка */}
              <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-accent/30 group-hover:bg-accent/70 transition-colors duration-300 animate-pulse" />

              {/* ICON */}
              <div className="text-4xl mb-4 transition-transform duration-500 group-hover:-translate-y-0.5">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-primary mb-2 tracking-tight">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-primary-light text-sm leading-relaxed transition-opacity duration-300 group-hover:opacity-70">
                {service.description}
              </p>

              {/* Текст-подсказка */}
              <p className="text-[10px] uppercase tracking-wider text-primary-light/30 group-hover:text-primary-light/60 transition-colors duration-300 mt-4">
                Наведите для деталей
              </p>

              {/* Стрелка-подсказка */}
              <div className="absolute bottom-4 right-4 text-accent/20 group-hover:text-accent transition-all duration-300 group-hover:translate-x-0.5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* APPLE-STYLE FLOATING PANEL */}
              <div
                className="absolute left-1/2 -translate-x-1/2 top-0 w-[110%] max-h-[450px] min-h-full rounded-2xl
                           bg-background-card/95 backdrop-blur-xl
                           border border-black/10 shadow-2xl
                           p-6
                           opacity-0 invisible translate-y-3 scale-[0.98]
                           group-hover:opacity-100 group-hover:visible
                           group-hover:translate-y-0 group-hover:scale-100
                           transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                           z-50 overflow-y-auto"
              >
                {/* top icon + title */}
                <div className="mb-4">
                  <div className="text-3xl mb-2 transition-transform duration-500 group-hover:scale-105">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary tracking-tight">
                    {service.title}
                  </h3>
                </div>

                {/* details */}
                <ul className="space-y-2 border-t border-black/5 pt-4">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-primary-light flex gap-2">
                      <span className="text-accent text-[10px] mt-[6px]">●</span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Призыв к действию */}
        <div className="text-center mt-12 min-h-[100px] flex flex-col items-center justify-center">
          <p className="text-primary-light mb-4">
            Не нашли нужную услугу? Свяжитесь со мной, и я помогу
          </p>
          <a
            href="#contact"
            className="inline-block bg-accent hover:bg-accent-light text-white font-medium px-8 py-3 rounded-lg transition-all duration-300"
          >
            Связаться со мной
          </a>
        </div>
        
      </div>
    </section>
  )
}

export default Services
