const businessServices = [
  {
    icon: "🏛️",
    title: "Проверки государственных органов",
    description:
      "Помогаю подготовиться к проверкам, сопровождаю контрольные мероприятия и защищаю интересы бизнеса при взаимодействии с надзорными органами.",

    details: [
      "Подготовка к проверкам",
      "Сопровождение контрольных и профилактических мероприятий (248-ФЗ)",
      "Подготовка возражений на акты и предписания",
      "Взаимодействие с контролирующими органами",
      "Правовой анализ действий должностных лиц",
    ],
  },

  {
    icon: "⚖️",
    title: "Административные дела и штрафы",
    description:
      "Защита бизнеса при привлечении к административной ответственности и обжалование решений государственных органов.",

    details: [
      "Анализ материалов административного дела",
      "Подготовка жалоб и процессуальных документов",
      "Защита по делам об административных правонарушениях",
      "Обжалование постановлений",
      "Представление интересов в суде",
    ],
  },

  {
    icon: "🌿",
    title: "Экологическое законодательство",
    description:
      "Правовая помощь организациям и предпринимателям в вопросах государственного экологического контроля.",

    details: [
      "Экологический надзор",
      "Обжалование предписаний",
      "Защита при административных расследованиях",
      "Споры о возмещении экологического вреда",
      "Консультации по природоохранному законодательству",
    ],
  },

  {
    icon: "📄",
    title: "Правовая поддержка бизнеса",
    description:
      "Правовой анализ ситуаций, подготовка документов и сопровождение взаимодействия бизнеса с государственными органами.",

    details: [
      "Правовой анализ документов",
      "Подготовка исков, жалоб и обращений",
      "Подготовка правовых заключений",
      "Представительство в суде",
      "Комплексное сопровождение ситуации",
    ],
  },
]


const citizenServices = [
  {
    icon: "🛡️",
    title: "Защита прав потребителей",
    description:
      "Помощь гражданам при нарушении прав продавцами, организациями и исполнителями услуг.",

    details: [
      "Анализ ситуации",
      "Подготовка претензий",
      "Обращения в контролирующие органы",
      "Подготовка исковых заявлений",
      "Представительство в суде",
    ],
  },

  {
    icon: "⚖️",
    title: "Судебная защита",
    description:
      "Подготовка правовой позиции и документов для защиты ваших интересов в суде.",

    details: [
      "Правовой анализ ситуации",
      "Подготовка исков и возражений",
      "Подготовка жалоб",
      "Представительство в суде",
      "Сопровождение судебного дела",
    ],
  },

  {
  icon: "📄",
  title: "Жалобы, заявления и обращения",
  description:
    "Помощь в подготовке юридически грамотных обращений в государственные органы, управляющие компании и организации.",

  details: [
    "Подготовка жалоб и заявлений",
    "Обращения в контролирующие органы",
    "Ответы на обращения организаций",
    "Жалобы в управляющие компании",
    "Правовой анализ ситуации и документов",
  ],
},

]


const ServiceCards = ({ services }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

      {services.map((service, index) => (

        <div
          key={index}
          className="group relative rounded-2xl bg-background-card border border-black/5
                     shadow-sm hover:shadow-xl transition-all duration-500
                     p-7 overflow-hidden hover:-translate-y-1"
        >

          <div className="text-4xl mb-5">
            {service.icon}
          </div>


          <h3 className="text-xl font-semibold text-primary mb-3">
            {service.title}
          </h3>


          <p className="text-primary-light leading-relaxed mb-6">
            {service.description}
          </p>


          <div className="border-t border-black/5 pt-5">

            <ul className="space-y-3">

              {service.details.map((detail, idx) => (

                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-primary-light"
                >

                  <span className="text-accent mt-[2px]">
                    ●
                  </span>

                  <span>
                    {detail}
                  </span>

                </li>

              ))}

            </ul>

          </div>

        </div>

      ))}

    </div>
  )
}



const Services = () => {
  return (
    <section className="min-h-screen bg-background py-20">

      <div className="container mx-auto px-4">


        <div className="text-center max-w-3xl mx-auto mb-14">

          <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary">
            В каких вопросах я могу помочь
          </h2>


          <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-4 mb-6"></div>


          <p className="text-lg text-primary-light leading-relaxed">
            Основное направление моей практики — защита бизнеса и граждан
            при взаимодействии с государственными органами,
            сопровождение проверок, административные дела
            и судебная защита.
          </p>

        </div>



        {/* Бизнес */}

        <div className="mb-20">

          <h3 className="text-3xl md:text-4xl font-bold font-heading text-primary text-center mb-10">
            Для бизнеса
          </h3>

          <ServiceCards services={businessServices}/>

        </div>



        {/* Граждане */}

        <div className="mb-20">

          <h3 className="text-3xl md:text-4xl font-bold font-heading text-primary text-center mb-10">
            Для граждан
          </h3>

          <ServiceCards services={citizenServices}/>

        </div>



        {/* CTA */}

        <div className="text-center mt-20 max-w-2xl mx-auto">

          <h3 className="text-2xl font-semibold text-primary mb-4">
            Не уверены, относится ли ваш вопрос к моей практике?
          </h3>


          <p className="text-primary-light mb-8 leading-relaxed">
            Опишите ситуацию — я оценю её с правовой точки зрения,
            расскажу о возможных вариантах действий и, при необходимости,
            предложу дальнейшее сопровождение.
          </p>


          <a
            href="#contact"
            className="inline-block bg-accent hover:bg-accent-light
                       text-white px-8 py-3 rounded-lg
                       transition duration-300"
          >
            Получить консультацию
          </a>

        </div>


      </div>

    </section>
  )
}


export default Services


// const services = [
//   {
//     icon: "🏛️",
//     title: "Проверки государственных органов",
//     description:
//       "Помогаю подготовиться к проверке, сопровождаю контрольные мероприятия и защищаю интересы при взаимодействии с надзорными органами.",

//     details: [
//       "Подготовка к проверкам",
//       "Сопровождение контрольных и профилактических мероприятий (248-ФЗ)",
//       "Подготовка возражений на акты и предписания",
//       "Взаимодействие с контролирующими органами",
//       "Правовой анализ действий должностных лиц",
//     ],
//   },

//   {
//     icon: "⚖️",
//     title: "Административные дела и штрафы",
//     description:
//       "Защита интересов по делам об административных правонарушениях и обжалование решений государственных органов.",

//     details: [
//       "Анализ материалов административного дела",
//       "Подготовка жалоб и процессуальных документов",
//       "Защита по делам об административных правонарушениях",
//       "Обжалование постановлений",
//       "Представление интересов в суде",
//     ],
//   },

//   {
//     icon: "🛡️",
//     title: "Роспотребнадзор и защита прав потребителей",
//     description:
//       "Практический опыт работы в Роспотребнадзоре помогает эффективно защищать интересы как бизнеса, так и граждан.",

//     details: [
//       "Сопровождение проверок",
//       "Оспаривание предписаний",
//       "Подготовка исков и претензий",
//       "Консультации по законодательству о защите прав потребителей",
//       "Представление интересов в суде",
//     ],
//   },

//   {
//     icon: "🌿",
//     title: "Экологическое законодательство",
//     description:
//       "Правовая помощь организациям и предпринимателям в вопросах государственного экологического контроля.",

//     details: [
//       "Экологический надзор",
//       "Обжалование предписаний",
//       "Защита при административных расследованиях",
//       "Споры о возмещении экологического вреда",
//       "Консультации по природоохранному законодательству",
//     ],
//   },

//   {
//     icon: "📄",
//     title: "Правовой анализ и судебная защита",
//     description:
//       "Подготовка правовой позиции, процессуальных документов и сопровождение судебных споров.",

//     details: [
//       "Правовой анализ ситуации",
//       "Подготовка исков, отзывов и жалоб",
//       "Подготовка правовых заключений",
//       "Представительство в суде",
//       "Комплексное сопровождение дела",
//     ],
//   },
// ]

// const Services = () => {
//   return (
//     <section className="min-h-screen bg-background py-20">

//       <div className="container mx-auto px-4">

//         {/* Заголовок */}

//         <div className="text-center max-w-3xl mx-auto mb-14">

//           <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary">

//             В каких вопросах я могу помочь

//           </h2>

//           <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-4 mb-6"></div>

//           <p className="text-lg text-primary-light leading-relaxed">

//             Основное направление моей практики — защита бизнеса и граждан
//             при взаимодействии с государственными органами,
//             сопровождение проверок, административные дела
//             и судебная защита.

//           </p>

//         </div>

//         {/* Карточки */}

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

//           {services.map((service, index) => (

//             <div
//               key={index}
//               className="group relative rounded-2xl bg-background-card border border-black/5
//                          shadow-sm hover:shadow-xl transition-all duration-500
//                          p-7 overflow-hidden hover:-translate-y-1"
//             >

//               <div className="text-4xl mb-5">

//                 {service.icon}

//               </div>

//               <h3 className="text-xl font-semibold text-primary mb-3">

//                 {service.title}

//               </h3>

//               <p className="text-primary-light leading-relaxed mb-6">

//                 {service.description}

//               </p>

//               <div className="border-t border-black/5 pt-5">

//                 <ul className="space-y-3">

//                   {service.details.map((detail, idx) => (

//                     <li
//                       key={idx}
//                       className="flex items-start gap-3 text-sm text-primary-light"
//                     >

//                       <span className="text-accent mt-[2px]">●</span>

//                       <span>{detail}</span>

//                     </li>

//                   ))}

//                 </ul>

//               </div>

//             </div>

//           ))}

//         </div>

//         {/* CTA */}

//         <div className="text-center mt-20 max-w-2xl mx-auto">

//           <h3 className="text-2xl font-semibold text-primary mb-4">

//             Не уверены, относится ли ваш вопрос к моей практике?

//           </h3>

//           <p className="text-primary-light mb-8 leading-relaxed">

//             Опишите ситуацию — я оценю её с правовой точки зрения,
//             расскажу о возможных вариантах действий и, при необходимости,
//             предложу дальнейшее сопровождение.

//           </p>

//           <a
//             href="#contact"
//             className="inline-block bg-accent hover:bg-accent-light
//                        text-white px-8 py-3 rounded-lg
//                        transition duration-300"
//           >

//             Получить консультацию

//           </a>

//         </div>

//       </div>

//     </section>
//   )
// }

// export default Services
