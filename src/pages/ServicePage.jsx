import { useParams } from "react-router-dom"
import servicePagesData from "../data/servicePagesData"
import ContactLink from "../components/ContactLink"


const ServicePage = () => {

  const { slug } = useParams()


  const page = servicePagesData[slug]


  if (!page) {

    return (

      <section className="min-h-screen bg-background py-20">

        <div className="container mx-auto px-4 text-center">

          <h1 className="text-3xl font-heading font-bold text-primary">

            Страница не найдена

          </h1>

        </div>

      </section>

    )

  }


  return (

    <section className="min-h-screen bg-background py-20">


      <div className="container mx-auto px-4">



        {/* Заголовок */}

        <div className="max-w-4xl mx-auto text-center mb-14">


          <h1 className="
          text-4xl 
          md:text-5xl 
          font-heading 
          font-bold 
          text-primary
          leading-tight
          ">

            {page.title}

          </h1>



          <div className="
          w-20 
          h-1 
          bg-accent 
          rounded-full 
          mx-auto 
          mt-5 
          mb-7
          "></div>



          <p className="
          text-xl
          text-primary-light
          leading-relaxed
          ">

            {page.subtitle}

          </p>


        </div>


{/* Авторский комментарий */}

<div className="max-w-5xl mx-auto mb-16">

  <div
    className="
      bg-background-card
      rounded-3xl
      shadow-lg
      border border-black/5
      p-8 md:p-10
      flex flex-col md:flex-row
      items-center
      gap-8
    "
  >

    {/* Фото */}

    <img
      src={page.photo}
      alt="Арутюн Егоян"
      className="
        w-44
        h-44
        rounded-full
        object-cover
        object-top
        border-4
        border-accent/20
        shadow-xl
        shrink-0
      "
    />



    {/* Цитата */}

    <div>

      <p className="uppercase tracking-[0.2em] text-accent text-sm mb-4">

        Из профессиональной практики

      </p>

      <blockquote className="text-xl italic leading-relaxed text-primary">

        {page.quote}

      </blockquote>

      <p className="mt-6 font-semibold text-primary">

        — Арутюн Егоян

      </p>

    </div>

  </div>

</div>


        {/* Введение */}

        <div className="
        max-w-4xl 
        mx-auto
        bg-primary
        text-white
        rounded-2xl
        p-8
        md:p-10
        shadow-xl
        mb-14
        ">


          <p className="
          text-lg
          leading-relaxed
          text-white/90
          ">

            {page.intro}

          </p>


        </div>






        {/* Экспертный опыт */}

        <div className="
        max-w-4xl 
        mx-auto
        mb-16
        ">


          <h2 className="
          text-3xl
          font-heading
          font-bold
          text-primary
          mb-6
          ">

            Практический опыт и понимание ситуации

          </h2>



          <p className="
          text-lg
          text-primary-light
          leading-relaxed
          ">

            {page.experience}

          </p>


        </div>






        {/* Риски */}

        <div className="
        max-w-5xl
        mx-auto
        mb-16
        ">


          <h2 className="
          text-3xl
          font-heading
          font-bold
          text-primary
          mb-8
          text-center
          ">

            Какие ошибки могут привести к проблемам

          </h2>



          <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
          ">


            {page.risks.map((risk,index)=>(


              <div
                key={index}
                className="
                bg-background-card
                rounded-xl
                p-6
                border border-black/5
                shadow-sm
                "
              >

                <p className="
                text-primary-light
                leading-relaxed
                ">


                  <span className="text-accent mr-2">
                    ●
                  </span>


                  {risk}


                </p>


              </div>


            ))}


          </div>


        </div>







        {/* Чем могу помочь */}

        <div className="
        max-w-4xl
        mx-auto
        bg-background-card
        rounded-2xl
        p-8
        md:p-10
        border border-black/5
        shadow-sm
        mb-16
        ">



          <h2 className="
          text-3xl
          font-heading
          font-bold
          text-primary
          mb-5
          ">

            Чем я могу помочь

          </h2>



          <p className="
          text-lg
          text-primary-light
          leading-relaxed
          ">

            {page.help}

          </p>



        </div>







        {/* CTA */}

        <div className="
        max-w-3xl
        mx-auto
        text-center
        mt-20
        ">



          <h2 className="
          text-3xl
          font-heading
          font-bold
          text-primary
          mb-5
          ">

            Нужна помощь в вашей ситуации?

          </h2>




          <p className="
          text-lg
          text-primary-light
          leading-relaxed
          mb-8
          ">

            Опишите ситуацию — я проведу правовой анализ,
            помогу оценить риски и предложу возможные варианты защиты.

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


export default ServicePage