import { Link } from "react-router-dom"

import {
  Building2,
  Scale,
  Leaf,
  BriefcaseBusiness,
  ShieldCheck,
  FileText,
  Landmark,
  ArrowRight,
  ArrowDown,
} from "lucide-react"



const businessPreview = [
  {
    icon: Building2,
    title: "Проверки государственных органов",
  },
  {
    icon: Scale,
    title: "Административные дела и штрафы",
  },
  {
    icon: Leaf,
    title: "Природоохранное законодательство",
  },
  {
    icon: BriefcaseBusiness,
    title: "Юридическое сопровождение под ключ",
  },
]



const citizenPreview = [
  {
    icon: ShieldCheck,
    title: "Защита прав потребителей",
  },
  {
    icon: FileText,
    title: "Составление жалоб и обращений",
  },
  {
    icon: FileText,
    title: "Подготовка документов любой сложности",
  },
  {
    icon: Landmark,
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
isolate
overflow-hidden
rounded-3xl
border
border-white/10
bg-transparent
p-7
md:p-8
transition-all
duration-500
hover:-translate-y-2
"
  >

    {/* Золотое свечение при наведении */}

<div
  className="
  absolute
  -inset-[1px]
  rounded-3xl
  bg-gradient-to-r
  from-accent
  via-accent-light
  to-accent
  opacity-0
  group-hover:opacity-100
  transition-opacity
  duration-500
  "
/>


<div
  className="
  absolute
  inset-[1px]
  rounded-3xl
  bg-[#0B1B3A]/90
  "
/>


{/* Мягкое внутреннее свечение */}

<div
  className="
  absolute
  -inset-20
  rounded-full
  bg-accent/20
  blur-3xl
  opacity-0
  group-hover:opacity-100
  transition-opacity
  duration-700
  "
/>

<div className="relative z-10">
      {/* Заголовок */}

      <h3
        className="
        text-3xl
        font-heading
        font-bold
        text-white
        text-center
        mb-4
        "
      >

        {title}

      </h3>


      {/* Описание */}

      <p
        className="
        text-white/70
        leading-relaxed
        text-center
        mb-8
        "
      >

        {description}

      </p>


      {/* Превью услуг */}

      <div
        className="
        grid
        grid-cols-1
        gap-3
        mb-8
        "
      >

        {items.map((item, index) => {

          const Icon = item.icon

          return (

            <div
              key={index}
  className="
  flex
  items-center
  gap-4
  rounded-xl
  border
  border-white/10
  bg-primary/60
  px-4
  py-3
  transition-all
  duration-500
  group-hover:border-accent/50
  group-hover:shadow-[0_0_15px_rgba(166,136,104,0.15)]
  "
            >

              <div
                className="
flex
h-10
w-10
items-center
justify-center
rounded-lg
bg-accent/10
transition-all
duration-300
group-hover:bg-accent/20
                "
              >

                <Icon
                  size={22}
                  strokeWidth={1.8}
                  className="text-accent"
                />

              </div>


              <span
                className="
                text-sm
                text-white/80
                leading-snug
                "
              >

                {item.title}

              </span>

            </div>

          )

        })}

      </div>


      {/* Кнопка */}

      <div className="flex justify-center">

  <Link
    to={link}
    className="
    inline-flex
    items-center
    gap-2
    rounded-xl
    bg-accent
    px-6
    py-3
    font-semibold
    text-white
    transition-all
    duration-300
    hover:bg-accent-light
    hover:shadow-[0_0_25px_rgba(166,136,104,0.35)]
    "
  >

    {buttonText}

    <ArrowRight
      size={18}
      className="
      transition-transform
      duration-300
      group-hover:translate-x-1
      "
    />

  </Link>

</div>
</div>
    </div>

  )

}

const Services = () => {

  return (

    <section
      className="
      relative
  overflow-hidden
  bg-gradient-to-b
  from-[#1E3555]
via-[#102442]
to-[#071426]
  py-20
      "
    >

      {/* Декоративное свечение */}

      <div
        className="
        absolute
  -top-40
  left-1/2
  h-[500px]
  w-[500px]
  -translate-x-1/2
  rounded-full
  bg-accent/10
  blur-3xl
  pointer-events-none
        "
      />



      <div
        className="
        relative
        container
        mx-auto
        px-4
        "
      >

        {/* Заголовок */}

        <div
          className="
          max-w-3xl
          mx-auto
          text-center
          mb-14
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
            leading-relaxed
            text-white/70
            "
          >

            Основные направления моей практики —
            защита бизнеса и граждан,
            сопровождение проверок,
            административные дела
            и судебная защита.

          </p>

        </div>



        {/* Два направления */}

        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
          max-w-7xl
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



        {/* Нижний CTA */}

        <div
          className="
          max-w-3xl
          mx-auto
          text-center
          mt-14
          "
        >

          <p
            className="
            text-lg
            leading-relaxed
            text-white/70
            "
          >

            Не уверены, относится ли ваш вопрос
            к моей практике?

          </p>


          <a
  href="#contact"
  className="
  mt-4
  inline-flex
  flex-col
  items-center
  gap-3
  text-accent
  hover:text-accent-light
  font-semibold
  transition-all
  duration-300
  group
  "
>

  <span>
    Опишите ситуацию — вместе определим оптимальный способ её решения.
  </span>


<ArrowDown
  size={36}
  strokeWidth={1.3}
  className="
  text-accent
  scale-x-150
  animate-arrow-down
  transition-all
  duration-300
  group-hover:scale-x-[1.7]
  "
/>

</a>

        </div>

      </div>

    </section>

  )

}

export default Services
