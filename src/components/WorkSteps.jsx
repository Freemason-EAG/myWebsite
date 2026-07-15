const businessSteps = [
  {
    title: "Первичная консультация",
    text: "Вы рассказываете ситуацию, я оцениваю риски, изучаю обстоятельства проверки или спора и определяю возможные варианты защиты.",
  },
  {
    title: "Изучение документов",
    text: "Анализируются акты проверки, предписания, постановления, переписка, договоры и иные документы.",
  },
  {
    title: "Правовая стратегия",
    text: "Формируется наиболее эффективная позиция защиты, определяются дальнейшие действия и возможные сценарии развития ситуации.",
  },
  {
    title: "Подготовка документов",
    text: "Готовятся возражения, жалобы, заявления, процессуальные документы и доказательства.",
  },
  {
    title: "Защита интересов",
    text: "Представление интересов при проверках, в государственных органах, переговорах и судах.",
  },
  {
    title: "Завершение работы",
    text: "Контроль исполнения принятого решения, рекомендации по предотвращению аналогичных ситуаций в будущем.",
  },
]

const citizenSteps = [
  {
    title: "Первичная консультация",
    text: "Вы рассказываете свою ситуацию, я определяю правовые перспективы и объясняю возможные варианты решения.",
  },
  {
    title: "Изучение документов",
    text: "Проверяются договоры, чеки, переписка, ответы организаций и другие доказательства.",
  },
  {
    title: "Правовая стратегия",
    text: "Определяется наиболее эффективный способ защиты ваших прав.",
  },
  {
    title: "Подготовка документов",
    text: "Готовятся претензии, жалобы, исковые заявления, отзывы и иные юридические документы.",
  },
  {
    title: "Защита интересов",
    text: "Представительство в государственных органах, переговорах и судах при необходимости.",
  },
  {
    title: "Завершение дела",
    text: "Контроль исполнения решения и рекомендации по дальнейшим действиям.",
  },
]

const WorkSteps = ({ type }) => {
  const steps = type === "business" ? businessSteps : citizenSteps

  return (
    <section className="py-24">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-20">

          <h2 className="text-4xl font-heading font-bold text-primary">

            Как проходит работа

          </h2>

          <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-5 mb-6"></div>

          <p className="text-lg text-primary-light">

            От первой консультации до получения результата

          </p>

        </div>

        <div className="relative">

          {/* Вертикальная линия */}

          <div
            className="
              absolute
              left-4
              top-0
              bottom-0
              w-1
              bg-accent/20
            "
          />

          <div className="space-y-14">

            {steps.map((step, index) => (

              <div
                key={index}
                className="relative pl-16"
              >

                {/* Кружок */}

                <div
                  className="
                    absolute
                    left-0
                    top-2
                    w-8
                    h-8
                    rounded-full
                    bg-accent
                    text-white
                    flex
                    items-center
                    justify-center
                    font-semibold
                    shadow-lg
                  "
                >

                  {index + 1}

                </div>

                <div
                  className="
                    bg-background-card
                    rounded-2xl
                    p-7
                    shadow-sm
                    border
                    border-black/5
                    hover:shadow-xl
                    transition
                    duration-300
                  "
                >

                  <h3 className="text-xl font-semibold text-primary mb-3">

                    {step.title}

                  </h3>

                  <p className="text-primary-light leading-relaxed">

                    {step.text}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

export default WorkSteps