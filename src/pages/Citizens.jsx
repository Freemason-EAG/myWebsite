import citizenServices from "../data/citizenServices"


const Citizens = () => {

  return (

    <section className="min-h-screen bg-background py-20">


      <div className="container mx-auto px-4">


        {/* Заголовок */}

        <div className="text-center max-w-4xl mx-auto mb-14">


          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary leading-tight">

            Защита ваших прав и помощь
            в сложных юридических ситуациях

          </h1>


          <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-5 mb-7"></div>


          <p className="text-lg text-primary-light leading-relaxed">

            Помогаю гражданам разобраться в сложных правовых вопросах,
            защитить свои права, подготовить документы и взаимодействовать
            с организациями и государственными органами.

          </p>


        </div>



        {/* Экспертный блок */}

        <div className="bg-primary text-white rounded-2xl p-8 md:p-10 mb-16 shadow-xl">


          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-5">

            Практический опыт защиты прав граждан

          </h2>


          <p className="text-white/80 leading-relaxed text-lg">

            Мой опыт работы в государственных органах позволяет понимать,
            как рассматриваются обращения граждан, какие аргументы имеют значение
            и какие действия действительно помогают защитить нарушенные права.

          </p>


          <p className="text-accent-light leading-relaxed text-lg mt-5">

            Я помогаю не просто подготовить документ,
            а определить правильную стратегию защиты.

          </p>


        </div>



        {/* Карточки услуг */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">


          {citizenServices.map((service,index)=>(


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

            Не знаете, как правильно действовать?

          </h2>


          <p className="text-primary-light text-lg leading-relaxed mb-8">

            Опишите вашу ситуацию — я проведу правовой анализ,
            объясню возможные варианты решения и помогу выбрать правильный путь защиты.

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


export default Citizens