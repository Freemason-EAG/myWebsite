import pricing from "../data/pricing"

const Pricing = ({ type }) => {

  const services = pricing[type] || []


  return (

    <div className="max-w-5xl mx-auto mt-24 mb-20">


      {/* Заголовок */}

      <div className="text-center max-w-3xl mx-auto mb-12">

        <h2 className="
          text-3xl
          md:text-4xl
          font-heading
          font-bold
          text-primary
        ">

          Стоимость юридической помощи

        </h2>


        <div className="
          w-20
          h-1
          bg-accent
          rounded-full
          mx-auto
          mt-5
          mb-6
        "></div>


        <p className="
          text-lg
          text-primary-light
          leading-relaxed
        ">

          Ориентировочная стоимость основных видов юридической помощи.
          Окончательная цена определяется после оценки конкретной ситуации
          и объёма необходимой работы.

        </p>

      </div>



      {/* Консультации */}

      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-6
        mb-8
      ">


        {/* Бесплатная консультация */}

        <div className="
          bg-primary
          text-white
          rounded-2xl
          p-7
          shadow-xl
        ">

          <h3 className="
            text-2xl
            font-heading
            font-bold
            mb-3
          ">

            {pricing.consultation.phone.title}

          </h3>


          <div className="
            text-2xl
            font-semibold
            text-accent-light
            mb-4
          ">

            {pricing.consultation.phone.price}

          </div>


          <p className="
            text-white/80
            leading-relaxed
          ">

            {pricing.consultation.phone.description}

          </p>

        </div>



        {/* Подробная консультация */}

        <div className="
          bg-background-card
          rounded-2xl
          p-7
          border border-black/5
          shadow-sm
          hover:shadow-xl
          transition
        ">

          <h3 className="
            text-2xl
            font-heading
            font-bold
            text-primary
            mb-3
          ">

            {pricing.consultation.detailed.title}

          </h3>


          <div className="
            text-2xl
            font-semibold
            text-accent
            mb-4
          ">

            {pricing.consultation.detailed.price}

          </div>


          <p className="
            text-primary-light
            leading-relaxed
          ">

            {pricing.consultation.detailed.description}

          </p>

        </div>


      </div>



      {/* Основные услуги */}

      <div className="
        bg-background-card
        rounded-2xl
        border border-black/5
        shadow-sm
        overflow-hidden
      ">

        <div className="
          divide-y
          divide-black/5
        ">


          {services.map((service, index) => (

            <div
              key={index}
              className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-2
                p-5
              "
            >

              <span className="
                text-primary
                font-medium
              ">

                {service.title}

              </span>


              <span className="
                text-accent
                font-semibold
                whitespace-nowrap
              ">

                {service.price}

              </span>

            </div>

          ))}


        </div>

      </div>



      {/* Примечание */}

      <p className="
        text-sm
        text-primary-light/70
        text-center
        mt-5
      ">

        Стоимость может изменяться в зависимости от сложности дела,
        объёма документов, количества необходимых действий
        и других обстоятельств.

      </p>

      {/* Льготные категории */}

      {type === "citizens" && (

        <div className="
          mt-6
          bg-accent/10
          border
          border-accent/20
          rounded-2xl
          p-6
          text-center
        ">

          <h3 className="
            text-xl
            font-heading
            font-semibold
            text-primary
            mb-2
          ">

            Скидки для пенсионеров и льготных категорий

          </h3>


          <p className="
            text-primary-light
            leading-relaxed
          ">

            Для пенсионеров и отдельных льготных категорий граждан
            предусмотрены специальные условия оплаты юридической помощи.
            Возможность и размер скидки уточняются при обращении.

          </p>

        </div>

      )}

      {/* CTA */}

      <div className="
        text-center
        mt-10
      ">

      </div>


    </div>

  )

}


export default Pricing