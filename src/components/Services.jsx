import { Link } from "react-router-dom"


const businessPreview = [
  {
    icon: "🏛️",
    title: "Проверки государственных органов",
  },
  {
    icon: "⚖️",
    title: "Административные дела и штрафы",
  },
  {
    icon: "🌿",
    title: "Природоохранное законодательство",
  },
  {
    icon: "📄",
    title: "Юридическое сопровождение под ключ",
  },
]


const citizenPreview = [
  {
    icon: "🛡️",
    title: "Защита прав потребителей",
  },
  {
    icon: "⚖️",
    title: "Составление жалоб и обращений",
  },
  {
    icon: "📄",
    title: "Подготовка документов любой сложности",
  },
  {
    icon: "🏛️",
    title: "Представительство в судах",
  },
]



const DirectionCard = ({
  title,
  description,
  items,
  link,
  buttonText,
}) => {

  return (

    <div
      className="
      group
      relative
      rounded-3xl
      bg-white/5
      border
      border-white/10
      p-7
      md:p-8
      transition-all
      duration-500
      hover:bg-white/10
      hover:-translate-y-2
      overflow-hidden
      "
    >

      <div
        className="
        absolute
        top-0
        left-0
        h-1
        w-0
        bg-accent
        transition-all
        duration-500
        group-hover:w-full
        "
      />


      <h3
        className="
        text-3xl
        font-heading
        font-bold
        text-white
        mb-4
        "
      >
        {title}
      </h3>


      <p
        className="
        text-white/70
        leading-relaxed
        mb-7
        "
      >
        {description}
      </p>


      <div
        className="
        flex
        flex-wrap
        gap-3
        mb-8
        "
      >

        {items.map((item,index)=>(

          <div
            key={index}
            className="
            flex
            items-center
            gap-2
            px-3
            py-2
            rounded-lg
            bg-white/5
            border
            border-white/10
            "
          >

            <span>
              {item.icon}
            </span>

            <span
              className="
              text-sm
              text-white/80
              "
            >
              {item.title}
            </span>

          </div>

        ))}

      </div>



      <Link
        to={link}
        className="
        inline-flex
        items-center
        bg-accent
        hover:bg-accent-light
        text-white
        px-6
        py-3
        rounded-xl
        font-semibold
        transition
        "
      >

        {buttonText}

        <span className="ml-2">
          →
        </span>

      </Link>


    </div>

  )

}





const Services = () => {

return (

<section
className="
bg-primary
py-20
"
>


<div
className="
container
mx-auto
px-4
"
>


<div
className="
max-w-3xl
mx-auto
text-center
mb-12
"
>


<h2
className="
text-4xl
md:text-5xl
font-heading
font-bold
text-white
"
>

В каких вопросах
я могу помочь

</h2>


<div
className="
w-20
h-1
bg-accent
rounded-full
mx-auto
my-5
"
/>


<p
className="
text-lg
text-white/70
"
>

Основные направления моей практики —
защита бизнеса и граждан,
административные дела,
проверки государственных органов
и судебная защита.

</p>


</div>




<div
className="
grid
grid-cols-1
md:grid-cols-2
gap-8
max-w-6xl
mx-auto
"
>


<DirectionCard

title="Для бизнеса"

description="
Помогаю организациям и предпринимателям
защищать свои интересы при проверках,
административных делах и взаимодействии
с государственными органами.
"

items={businessPreview}

link="/business"

buttonText="Все услуги для бизнеса"

/>



<DirectionCard

title="Для граждан"

description="
Помогаю разобраться в сложных правовых
ситуациях, защитить Ваши права,
подготовить документы и выбрать
правильную стратегию защиты.
"

items={citizenPreview}

link="/citizens"

buttonText="Все услуги для граждан"

/>



</div>





<div
className="
max-w-3xl
mx-auto
text-center
mt-12
"
>


<p
className="
text-lg
text-white/70
leading-relaxed
"
>

Не уверены, относится ли ваш вопрос
к моей практике?

<a
href="#contact"
className="
text-accent
hover:text-accent-light
transition
font-semibold
ml-1
"
>
Опишите ситуацию —
я помогу определить возможные варианты решения.
</a>


</p>


</div>


</div>


</section>

)

}


export default Services


// const businessServices = [
//   {
//     icon: "🏛️",
//     title: "Проверки государственных органов",
//     description:
//       "Помогаю подготовиться к проверкам, сопровождаю контрольные мероприятия и защищаю интересы бизнеса при взаимодействии с надзорными органами.",

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
//       "Защита бизнеса при привлечении к административной ответственности и обжалование решений государственных органов.",

//     details: [
//       "Анализ материалов административного дела",
//       "Подготовка жалоб и процессуальных документов",
//       "Защита по делам об административных правонарушениях",
//       "Обжалование постановлений",
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
//     title: "Правовая поддержка бизнеса",
//     description:
//       "Правовой анализ ситуаций, подготовка документов и сопровождение взаимодействия бизнеса с государственными органами.",

//     details: [
//       "Правовой анализ документов",
//       "Подготовка исков, жалоб и обращений",
//       "Подготовка правовых заключений",
//       "Представительство в суде",
//       "Комплексное сопровождение ситуации",
//     ],
//   },
// ]


// const citizenServices = [
//   {
//     icon: "🛡️",
//     title: "Защита прав потребителей",
//     description:
//       "Помощь гражданам при нарушении прав продавцами, организациями и исполнителями услуг.",

//     details: [
//       "Анализ ситуации",
//       "Подготовка претензий",
//       "Обращения в контролирующие органы",
//       "Подготовка исковых заявлений",
//       "Представительство в суде",
//     ],
//   },

//   {
//     icon: "⚖️",
//     title: "Судебная защита",
//     description:
//       "Подготовка правовой позиции и документов для защиты ваших интересов в суде.",

//     details: [
//       "Правовой анализ ситуации",
//       "Подготовка исков и возражений",
//       "Подготовка жалоб",
//       "Представительство в суде",
//       "Сопровождение судебного дела",
//     ],
//   },

//   {
//   icon: "📄",
//   title: "Жалобы, заявления и обращения",
//   description:
//     "Помощь в подготовке юридически грамотных обращений в государственные органы, управляющие компании и организации.",

//   details: [
//     "Подготовка жалоб и заявлений",
//     "Обращения в контролирующие органы",
//     "Ответы на обращения организаций",
//     "Жалобы в управляющие компании",
//     "Правовой анализ ситуации и документов",
//   ],
// },

// ]


// const ServiceCards = ({ services }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

//       {services.map((service, index) => (

//         <div
//           key={index}
//           className="group relative rounded-2xl bg-background-card border border-black/5
//                      shadow-sm hover:shadow-xl transition-all duration-500
//                      p-7 overflow-hidden hover:-translate-y-1"
//         >

//           <div className="text-4xl mb-5">
//             {service.icon}
//           </div>


//           <h3 className="text-xl font-semibold text-primary mb-3">
//             {service.title}
//           </h3>


//           <p className="text-primary-light leading-relaxed mb-6">
//             {service.description}
//           </p>


//           <div className="border-t border-black/5 pt-5">

//             <ul className="space-y-3">

//               {service.details.map((detail, idx) => (

//                 <li
//                   key={idx}
//                   className="flex items-start gap-3 text-sm text-primary-light"
//                 >

//                   <span className="text-accent mt-[2px]">
//                     ●
//                   </span>

//                   <span>
//                     {detail}
//                   </span>

//                 </li>

//               ))}

//             </ul>

//           </div>

//         </div>

//       ))}

//     </div>
//   )
// }



// const Services = () => {
//   return (
//     <section className="min-h-screen bg-background py-20">

//       <div className="container mx-auto px-4">


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



//         {/* Бизнес */}

//         <div className="mb-20">

//           <h3 className="text-3xl md:text-4xl font-bold font-heading text-primary text-center mb-10">
//             Для бизнеса
//           </h3>

//           <ServiceCards services={businessServices}/>

//         </div>



//         {/* Граждане */}

//         <div className="mb-20">

//           <h3 className="text-3xl md:text-4xl font-bold font-heading text-primary text-center mb-10">
//             Для граждан
//           </h3>

//           <ServiceCards services={citizenServices}/>

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

