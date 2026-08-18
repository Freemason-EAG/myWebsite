import { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    situation: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Пока только интерфейс.
    // Отправку данных подключим следующим этапом.
    console.log(formData)

    setIsSubmitted(true)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Заголовок */}

        <div className="text-center max-w-3xl mx-auto mb-12">

          <h2 className="
            text-3xl
            md:text-4xl
            font-bold
            text-primary
            mb-4
            font-heading
          ">
            Свяжитесь со мной
          </h2>

          <div className="
            w-20
            h-1
            bg-accent
            mx-auto
            rounded-full
            mb-5
          "></div>

          <p className="
            text-primary-light
            text-lg
            leading-relaxed
            font-body
          ">
            Напишите мне в Telegram или заполните форму
          </p>

        </div>


        {/* Основной блок */}

        <div className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
          items-stretch
        ">


{/* Форма */}

<div className="
  bg-background-card
  rounded-2xl
  shadow-xl
  border
  border-black/5
  overflow-hidden
">

  <div className="
    h-1
    bg-gradient-to-r
    from-accent
    to-accent-light
  "></div>


  <div className="p-6 md:p-7">

    <h3 className="
      text-2xl
      font-heading
      font-bold
      text-primary
      mb-2
    ">
      Оставить заявку
    </h3>


    <p className="
      text-primary-light
      text-sm
      leading-relaxed
      mb-5
    ">
      Короткое описание поможет заранее понять правовой контур вопроса,
      подготовиться к консультации и согласовать удобный формат связи.
    </p>


    {/* Telegram */}

    <a
      href="https://t.me/Ltahalis0"
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex
        items-center
        justify-center
        gap-2
        w-full
        bg-primary
        hover:bg-primary-light
        text-white
        px-5
        py-3
        rounded-xl
        transition
        duration-200
        shadow-sm
        hover:shadow-md
        font-medium
        mb-6
      "
    >
      <span className="text-lg">
        ✈
      </span>

      Связаться в Telegram
    </a>


    {/* Разделитель */}

    <div className="
      flex
      items-center
      gap-3
      mb-5
    ">

      <div className="h-px bg-primary/10 flex-1"></div>

      <span className="
        text-xs
        text-primary-light/50
        uppercase
        tracking-wide
      ">
        или
      </span>

      <div className="h-px bg-primary/10 flex-1"></div>

    </div>


    <form onSubmit={handleSubmit} className="space-y-4">


      {/* Имя */}

      <div>

        <label
          htmlFor="name"
          className="
            block
            text-sm
            font-medium
            text-primary
            mb-1.5
          "
        >
          Ваше имя
        </label>

        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Как к вам обращаться?"
          className="
            w-full
            px-4
            py-2.5
            rounded-xl
            border
            border-primary/10
            bg-background
            text-primary
            placeholder:text-primary-light/50
            outline-none
            focus:border-accent
            focus:ring-2
            focus:ring-accent/20
            transition
          "
        />

      </div>


      {/* Телефон */}

      <div>

        <label
          htmlFor="phone"
          className="
            block
            text-sm
            font-medium
            text-primary
            mb-1.5
          "
        >
          Телефон для связи
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="+7 (___) ___-__-__"
          className="
            w-full
            px-4
            py-2.5
            rounded-xl
            border
            border-primary/10
            bg-background
            text-primary
            placeholder:text-primary-light/50
            outline-none
            focus:border-accent
            focus:ring-2
            focus:ring-accent/20
            transition
          "
        />

      </div>


      {/* Ситуация */}

      <div>

        <label
          htmlFor="situation"
          className="
            block
            text-sm
            font-medium
            text-primary
            mb-1.5
          "
        >
          Опишите ситуацию

          <span className="
            text-primary-light/50
            font-normal
            ml-1
          ">
            (необязательно)
          </span>
        </label>

        <textarea
          id="situation"
          name="situation"
          value={formData.situation}
          onChange={handleChange}
          rows="3"
          placeholder="Коротко опишите ваш вопрос или проблему..."
          className="
            w-full
            px-4
            py-2.5
            rounded-xl
            border
            border-primary/10
            bg-background
            text-primary
            placeholder:text-primary-light/50
            outline-none
            focus:border-accent
            focus:ring-2
            focus:ring-accent/20
            transition
            resize-none
          "
        />

      </div>


      {/* Согласие */}

      <div className="
        flex
        items-start
        gap-3
        pt-1
      ">

        <input
          id="privacy"
          type="checkbox"
          required
          className="
            mt-1
            h-4
            w-4
            shrink-0
            accent-accent
            cursor-pointer
          "
        />

        <label
          htmlFor="privacy"
          className="
            text-xs
            text-primary-light/70
            leading-relaxed
            cursor-pointer
          "
        >
          Я даю согласие на обработку моих персональных данных
          в соответствии с

          <a
            href="/privacy"
            className="
              text-accent
              hover:text-accent-light
              transition
              ml-1
            "
          >
            Политикой конфиденциальности
          </a>.
        </label>

      </div>


      {/* Кнопка */}

      <button
        type="submit"
        className="
          w-full
          bg-accent
          hover:bg-accent-light
          text-white
          font-medium
          px-6
          py-3
          rounded-xl
          transition
          duration-200
          shadow-sm
          hover:shadow-md
        "
      >
        Отправить заявку
      </button>


      <p className="
        text-xs
        text-primary-light/50
        text-center
        leading-relaxed
        pt-1
      ">
        Заполняя форму, вы предоставляете только те сведения,
        которые считаете необходимыми для первичного обращения.
      </p>

    </form>

  </div>

</div>


{/* Что дальше */}

<div
  className="
    bg-primary
    text-white
    rounded-2xl
    shadow-xl
    p-7
    md:p-8
    flex
    flex-col
    justify-center
  "
>

  {/* Заголовок */}

  <div className="mb-8">

    <div
      className="
        w-12
        h-12
        rounded-xl
        bg-accent/15
        flex
        items-center
        justify-center
        text-accent-light
        text-xl
        font-bold
        mb-6
      "
    >
      →
    </div>

    <h3
      className="
        text-2xl
        md:text-3xl
        font-heading
        font-bold
      "
    >
      Что дальше?
    </h3>

  </div>


  {/* Этапы */}

  <div className="space-y-5">


    {/* Этап 01 */}

    <div className="flex gap-4 group">

      <div className="flex flex-col items-center">

        <div
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-accent
            text-white
            text-sm
            font-semibold
            transition
            duration-300
            group-hover:scale-110
          "
        >
          01
        </div>

        <div
          className="
            w-px
            flex-1
            bg-white/10
            mt-2
          "
        ></div>

      </div>


      <div className="pb-1">

        <h4
          className="
            text-lg
            font-semibold
            mb-2
            text-white
          "
        >
          Заявка
        </h4>

        <p
          className="
            text-white/70
            leading-relaxed
          "
        >
          Вы оставляете имя, телефон и при желании
          кратко описываете ситуацию.
        </p>

      </div>

    </div>


    {/* Этап 02 */}

    <div className="flex gap-4 group">

      <div className="flex flex-col items-center">

        <div
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-accent
            text-white
            text-sm
            font-semibold
            transition
            duration-300
            group-hover:scale-110
          "
        >
          02
        </div>

        <div
          className="
            w-px
            flex-1
            bg-white/10
            mt-2
          "
        ></div>

      </div>


      <div className="pb-1">

        <h4
          className="
            text-lg
            font-semibold
            mb-2
            text-white
          "
        >
          Первичный разговор
        </h4>

        <p
          className="
            text-white/70
            leading-relaxed
          "
        >
          Мы связываемся с вами, уточняем обстоятельства
          и согласуем формат консультации и необходимые документы.
        </p>

      </div>

    </div>


    {/* Этап 03 */}

    <div className="flex gap-4 group">

      <div className="flex flex-col items-center">

        <div
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-accent
            text-white
            text-sm
            font-semibold
            transition
            duration-300
            group-hover:scale-110
          "
        >
          03
        </div>

      </div>


      <div>

        <h4
          className="
            text-lg
            font-semibold
            mb-2
            text-white
          "
        >
          Правовая работа
        </h4>

        <p
          className="
            text-white/70
            leading-relaxed
          "
        >
          После изучения материалов определяются дальнейшие
          действия и стоимость юридической помощи.
          Условия работы закрепляются соглашением.
        </p>

      </div>

    </div>

  </div>


  {/* Важная информация */}

  <div
    className="
      mt-6
      pt-5
      border-t
      border-white/10
    "
  >

    <div
      className="
        bg-white/5
        border
        border-white/10
        rounded-xl
        p-4
      "
    >

      <p
        className="
          text-sm
          font-semibold
          text-accent-light
          mb-1
        "
      >
        Важно
      </p>

      <p
        className="
          text-sm
          text-white/60
          leading-relaxed
        "
      >
        Многие юридические вопросы невозможно оценить
        только по краткому описанию ситуации.
        Итоговая стоимость согласуется после изучения
        необходимых материалов.
      </p>

    </div>

  </div>

</div>

        </div>


        {/* Сообщение после отправки */}

        {isSubmitted && (

          <div className="
            max-w-2xl
            mx-auto
            mt-8
            bg-accent/10
            border
            border-accent/20
            rounded-xl
            p-5
            text-center
          ">

            <p className="
              text-primary
              font-medium
            ">
              Заявка отправлена.
            </p>

            <p className="
              text-primary-light
              text-sm
              mt-1
            ">
              Я свяжусь с вами в ближайшее время.
            </p>

          </div>

        )}

      </div>
    </section>
  )
}

export default ContactForm


// const ContactForm = () => {
//   return (
//     <section className="py-16 bg-background">
//       <div className="container mx-auto px-4 max-w-3xl">
//         {/* Заголовок с декоративной линией */}
//         <div className="text-center mb-10">
//           <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 font-heading">
//             Свяжитесь со мной
//           </h2>
//           <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
//           <p className="text-primary-light mt-3 font-body">
//             Заполните форму, и я свяжусь с вами в ближайшее время
//           </p>
//         </div>
        
//         {/* Карточка с формой */}
//         <div className="bg-background-card rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
//           <div className="p-1 bg-gradient-to-r from-accent to-accent-light"></div>
//           <div className="p-6 md:p-8">
//             <iframe
//               src="https://forms.yandex.ru/u/6a15f8dd49af4719f1fd9f0a?iframe=1"
//               width="100%"
//               height="550"
//               frameBorder="0"
//               name="ya-form-6a15f8dd49af4719f1fd9f0a"
//               title="Форма обратной связи"
//               className="w-full rounded-lg"
//               style={{ minHeight: '500px' }}
//             ></iframe>
//           </div>
//         </div>
        
//         {/* Блок с политикой конфиденциальности */}
//         <div className="mt-6 text-center">
//           <p className="text-xs text-primary-light/60">
//             Нажимая на кнопку "Отправить", Вы даете согласие на хранение и обработку Ваших персональных данных.
//           </p>
//           <p className="text-xs text-primary-light/60 mt-2">
//             Ваши данные не передаются третьим лицам и используются только для связи с Вами.
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ContactForm