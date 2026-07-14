import businessServices from "../data/businessServices"


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


            <div
              key={index}
              className="
              bg-background-card 
              rounded-2xl 
              shadow-sm 
              p-7
              border border-black/5
              hover:shadow-xl
              transition-all
              duration-300
              "
            >


              <div className="text-4xl mb-5">

                {service.icon}

              </div>


              <h2 className="text-xl font-semibold text-primary mb-3">

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


            </div>


          ))}


        </div>



        {/* CTA */}

        <div className="text-center max-w-3xl mx-auto mt-20">


          <h2 className="text-3xl font-heading font-bold text-primary mb-5">

            Возникла проблема при проверке или взаимодействии с государственным органом?

          </h2>


          <p className="text-primary-light text-lg leading-relaxed mb-8">

            Опишите ситуацию — я проведу правовую оценку,
            расскажу о возможных вариантах защиты и предложу порядок дальнейших действий.

          </p>


          <a
            href="#contact"
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

          </a>


        </div>



      </div>


    </section>

  )

}


export default Business