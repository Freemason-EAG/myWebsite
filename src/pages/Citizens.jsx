import citizenServices from "../data/citizenServices"
import WorkSteps from "../components/WorkSteps"
import ContactLink from "../components/ContactLink"
import Pricing from "../components/Pricing"


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


            </div>


          ))}


        </div>

                {/* Какие ситуации я помогаю решить */}

        <div className="max-w-5xl mx-auto mt-20 mb-10">


          <div className="text-center mb-10">


            <h2 className="
              text-3xl
              md:text-4xl
              font-heading
              font-bold
              text-primary
            ">

              Какие ситуации я помогаю решить

            </h2>


            <div className="
              w-20
              h-1
              bg-accent
              rounded-full
              mx-auto
              mt-5
            "></div>


          </div>



          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
          ">


            {[
              "Нарушены ваши права как потребителя",
              "Необходимо вернуть деньги за товар или услугу",
              "Продавец или организация отказываются выполнять свои обязательства",
              "Управляющая компания бездействует или нарушает ваши права",
              "Необходимо подготовить жалобу или обращение в государственный орган",
              "Требуется составить претензию, заявление или иск",
              "Возник спор с организацией или государственным учреждением",
              "Не знаете, куда обратиться и какие действия предпринять",
            ].map((item, index) => (

              <div
                key={index}
                className="
                  flex
                  items-start
                  gap-3
                  bg-background-card
                  rounded-xl
                  p-5
                  border border-black/5
                  shadow-sm
                "
              >

                <span className="text-accent text-lg mt-1">
                  ●
                </span>


                <p className="
                  text-primary-light
                  leading-relaxed
                ">

                  {item}

                </p>


              </div>


            ))}


          </div>



          <p className="
            text-center
            text-primary-light
            mt-8
            text-lg
          ">

            И многое другое — если вы столкнулись с юридической проблемой,
            но не знаете, как правильно действовать,
            я помогу определить возможные варианты решения.

          </p>



        </div>

          <WorkSteps type="citizens" />

                {/* Мой опыт — ваше преимущество */}

        <div className="
          bg-primary
          text-white
          rounded-2xl
          p-8
          md:p-10
          mt-20
          shadow-xl
        ">


          <h2 className="
            text-2xl
            md:text-3xl
            font-heading
            font-bold
            mb-5
          ">

            Мой опыт — ваше преимущество!

          </h2>



          <p className="
            text-white/80
            leading-relaxed
            text-lg
          ">

            Я понимаю, как работают государственные органы,
            какие аргументы имеют значение при рассмотрении обращений
            и какие документы действительно помогают защитить права граждан.

          </p>



          <p className="
            text-accent-light
            leading-relaxed
            text-lg
            mt-5
          ">

            Вы получаете не просто подготовленный документ,
            а продуманную правовую позицию с пониманием дальнейших действий.

          </p>


        </div>

                {/* Когда стоит обратиться */}

        <div className="max-w-5xl mx-auto mt-20 mb-20">


          <div className="text-center mb-10">


            <h2 className="
              text-3xl
              md:text-4xl
              font-heading
              font-bold
              text-primary
            ">

              Когда стоит обратиться за юридической помощью

            </h2>


            <div className="
              w-20
              h-1
              bg-accent
              rounded-full
              mx-auto
              mt-5
            "></div>


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

              <h3 className="
                text-xl
                font-semibold
                text-primary
                mb-4
              ">

                Нарушены ваши права

              </h3>


              <p className="text-primary-light leading-relaxed">

                Если организация, продавец, исполнитель услуги
                или государственный орган нарушили ваши права —
                важно правильно оценить ситуацию и выбрать способ защиты.

              </p>


            </div>




            <div className="
              bg-background-card
              rounded-2xl
              p-7
              border border-black/5
              shadow-sm
            ">


              <h3 className="
                text-xl
                font-semibold
                text-primary
                mb-4
              ">

                Не знаете, куда обращаться

              </h3>


              <p className="text-primary-light leading-relaxed">

                Часто проблема заключается не в отсутствии прав,
                а в неправильном выборе органа или способа обращения.
                Помогу определить правильный порядок действий.

              </p>


            </div>





            <div className="
              bg-background-card
              rounded-2xl
              p-7
              border border-black/5
              shadow-sm
            ">


              <h3 className="
                text-xl
                font-semibold
                text-primary
                mb-4
              ">

                Нужно подготовить документы

              </h3>


              <p className="text-primary-light leading-relaxed">

                Грамотно составленные претензии, жалобы,
                заявления и исковые документы значительно повышают
                эффективность защиты ваших интересов.

              </p>


            </div>





            <div className="
              bg-background-card
              rounded-2xl
              p-7
              border border-black/5
              shadow-sm
            ">


              <h3 className="
                text-xl
                font-semibold
                text-primary
                mb-4
              ">

                Возник спор

              </h3>


              <p className="text-primary-light leading-relaxed">

                Если переговоры не помогли — необходимо подготовить
                правовую позицию и защищать свои интересы
                в государственных органах или суде.

              </p>


            </div>



          </div>


        </div>

        {/* Стоимость */}

        <Pricing type="citizens" />


        {/* CTA */}

        <div className="text-center max-w-3xl mx-auto mt-20">


          <h2 className="text-3xl font-heading font-bold text-primary mb-5">

            Не знаете, как правильно действовать?

          </h2>


          <p className="text-primary-light text-lg leading-relaxed mb-8">

            Опишите вашу ситуацию — я проведу правовой анализ,
            объясню возможные варианты решения и помогу выбрать правильный путь защиты.

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


export default Citizens