import businessServices from "../data/businessServices"
import WorkSteps from "../components/WorkSteps"
import { Link } from "react-router-dom"
import ContactLink from "../components/ContactLink"
import Pricing from "../components/Pricing"


const Business = () => {

  return (

    <section className="min-h-screen bg-background py-20">

      <div className="container mx-auto px-4">


        {/* Заголовок */}

        <div className="text-center max-w-4xl mx-auto mb-14">


          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary leading-tight">

            Защита бизнеса при проверках,
            штрафах и спорах с государственными органами

          </h1>


          <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-5 mb-7"></div>


          <p className="text-lg text-primary-light leading-relaxed">

            Помогаю организациям и предпринимателям защищать свои интересы
            при взаимодействии с контролирующими органами, проведении проверок,
            рассмотрении административных дел и судебных спорах.

          </p>


        </div>



        {/* Экспертный блок */}

        <div className="bg-primary text-white rounded-2xl p-8 md:p-10 mb-16 shadow-xl">


          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-5">

            Практический опыт работы внутри государственных органов

          </h2>


          <p className="text-white/80 leading-relaxed text-lg">

            Более 10 лет юридической практики в судебной системе,
            правоохранительных и надзорных органах.
            В период работы в Роспотребнадзоре я лично участвовал
            в проведении проверок организаций различных сфер деятельности,
            включая гостиницы, хостелы, образовательные и спортивные учреждения,
            а также крупные предприятия.

          </p>


          <p className="text-accent-light leading-relaxed text-lg mt-5">

            Этот опыт позволяет понимать не только требования закона,
            но и практику принятия решений контролирующими органами.

          </p>


        </div>



        {/* Услуги */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">


        {businessServices.map((service,index)=>(


          <Link

            key={index}

            to={service.link}

            className="
              group
              block
              bg-background-card 
              rounded-2xl 
              shadow-sm 
              p-7
              border border-black/5
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
  >


              <div className="
  flex
  h-12
  w-12
  items-center
  justify-center
  rounded-xl
  bg-accent/10
  text-accent
  mb-5
  mx-auto
">
  <service.icon
    size={26}
    strokeWidth={1.5}
  />
</div>


              <h2 className="
  text-xl
  font-semibold
  text-primary
  mb-3
  text-center
  group-hover:text-accent
  transition
">

                {service.title}

              </h2>


              <p className="text-primary-light leading-relaxed mb-5">

                {service.description}

              </p>



              <ul className="space-y-3">


                {service.details.map((item,i)=>(


                  <li
                    key={i}
                    className="flex gap-2 text-sm text-primary-light"
                  >

                    <span className="text-accent">
                      ●
                    </span>


                    <span>
                      {item}
                    </span>


                  </li>


                ))}


              </ul>


            </Link>


          ))}


        </div>

          {/* Этапы работы */}

          <WorkSteps type="business" />

        {/* Мой опыт */}

<div className="mt-24">

  <div className="text-center max-w-3xl mx-auto mb-14">

    <h2 className="text-4xl font-heading font-bold text-primary">

      Мой опыт — ваше преимущество

    </h2>

    <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-4 mb-6"></div>

    <p className="text-lg text-primary-light leading-relaxed">

      Практический опыт работы в государственных органах позволяет видеть ситуацию
      не только со стороны бизнеса, но и глазами проверяющего.

    </p>

  </div>


  <div className="grid md:grid-cols-2 gap-8">


    {/* Карточка */}

    <div className="bg-background-card rounded-2xl p-8 shadow-sm border border-black/5 hover:shadow-xl transition">

      <h3 className="text-2xl font-semibold text-primary mb-4">

        Практический опыт в Роспотребнадзоре

      </h3>

      <p className="text-primary-light leading-relaxed">

        Я лично участвовал в проведении проверок гостиниц, хостелов,
        образовательных и спортивных организаций, предприятий общественного питания,
        а также крупных производственных предприятий.

        <br /><br />

        Благодаря этому понимаю не только требования закона,
        но и практику принятия решений государственными органами.

      </p>

    </div>


    {/* Карточка */}

    <div className="bg-background-card rounded-2xl p-8 shadow-sm border border-black/5 hover:shadow-xl transition">

      <h3 className="text-2xl font-semibold text-primary mb-4">

        Более 10 лет юридической практики

      </h3>

      <p className="text-primary-light leading-relaxed">

        Работа в судебной системе, правоохранительных и надзорных органах
        позволяет комплексно оценивать ситуацию,
        заранее видеть возможные риски
        и выбирать наиболее эффективную стратегию защиты.

      </p>

    </div>


    {/* Карточка */}

    <div className="bg-background-card rounded-2xl p-8 shadow-sm border border-black/5 hover:shadow-xl transition">

      <h3 className="text-2xl font-semibold text-primary mb-4">

        Не каждый штраф неизбежен

      </h3>

      <p className="text-primary-light leading-relaxed">

        Во время работы в Роспотребнадзоре я неоднократно видел ситуации,
        когда серьезных последствий можно было избежать.

        <br /><br />

        Часто причиной штрафов или приостановления деятельности
        становилось отсутствие грамотной правовой позиции,
        а не само нарушение.

      </p>

    </div>


    {/* Карточка */}

    <div className="bg-primary rounded-2xl p-8 shadow-xl text-white">

      <h3 className="text-2xl font-semibold mb-4">

        Каждое дело веду лично

      </h3>

      <p className="leading-relaxed text-white/90">

        Вы взаимодействуете непосредственно со мной.

        <br /><br />

        Без помощников,
        колл-центров
        и шаблонных консультаций.

        Каждая ситуация анализируется индивидуально,
        а стратегия защиты выстраивается исходя
        из конкретных обстоятельств вашего дела.

      </p>

    </div>


  </div>

</div>

        {/* Когда стоит обратиться */}

        <div className="max-w-5xl mx-auto mt-20 mb-20">


          <div className="text-center mb-10">


            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">

              Когда стоит обратиться за юридической помощью

            </h2>


            <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-5"></div>


          </div>



          <div className="
            grid 
            grid-cols-1 
            md:grid-cols-2 
            gap-6
          ">


            <div className="
              bg-background-card
              rounded-2xl
              p-7
              border border-black/5
              shadow-sm
            ">

              <h3 className="text-xl font-semibold text-primary mb-4">

                До начала проверки

              </h3>


              <p className="text-primary-light leading-relaxed">

                Если стало известно о предстоящей проверке,
                лучше подготовиться заранее:
                оценить риски, проверить документы,
                определить порядок взаимодействия с инспекторами
                и возможные последствия.

              </p>


            </div>



            <div className="
              bg-background-card
              rounded-2xl
              p-7
              border border-black/5
              shadow-sm
            ">

              <h3 className="text-xl font-semibold text-primary mb-4">

                Во время проверки

              </h3>


              <p className="text-primary-light leading-relaxed">

                Неправильные действия при проведении контрольных мероприятий
                могут привести к штрафам, предписаниям и даже приостановлению
                деятельности. Важно правильно выстроить взаимодействие
                с контролирующим органом.

              </p>


            </div>



            <div className="
              bg-background-card
              rounded-2xl
              p-7
              border border-black/5
              shadow-sm
            ">

              <h3 className="text-xl font-semibold text-primary mb-4">

                После получения акта или постановления

              </h3>


              <p className="text-primary-light leading-relaxed">

                Если уже выявлены нарушения, вынесено предписание
                или назначен штраф — важно оперативно оценить ситуацию,
                определить перспективы обжалования и выбрать правильную
                стратегию защиты.

              </p>


            </div>



            <div className="
              bg-background-card
              rounded-2xl
              p-7
              border border-black/5
              shadow-sm
            ">

              <h3 className="text-xl font-semibold text-primary mb-4">

                Если есть риск остановки бизнеса

              </h3>


              <p className="text-primary-light leading-relaxed">

                При угрозе приостановления деятельности,
                крупных штрафов или судебных споров
                необходимо действовать максимально быстро.
                Во многих случаях правильная юридическая позиция
                позволяет избежать серьёзных последствий.

              </p>


            </div>


          </div>
          </div>

          {/* Стоимость */}

<Pricing type="business" />


        

        {/* CTA */}

        <div className="text-center max-w-3xl mx-auto mt-20">


          <h2 className="text-3xl font-heading font-bold text-primary mb-5">

            Возникла проблема при проверке или взаимодействии с государственным органом?

          </h2>


          <p className="text-primary-light text-lg leading-relaxed mb-8">

            Опишите ситуацию — я проведу правовую оценку,
            расскажу о возможных вариантах защиты и предложу порядок дальнейших действий.

          </p>


          <ContactLink
  className="
    inline-block
    bg-accent
    hover:bg-accent-light
    text-white
    px-8
    py-4
    rounded-lg
    transition
    text-lg
  "
>
  Получить консультацию
</ContactLink>


        </div>



      </div>


    </section>

  )

}


export default Business