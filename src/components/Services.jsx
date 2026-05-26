import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const services = [
    {
        icon: '⚖️',
        title: 'Штрафы и КоАП',
        description: 'Обжалование постановлений, защита в суде, снижение сумм штрафов.'
    },
    {
        icon: '🌿',
        title: 'Экологические нарушения',
        description: 'Защита при проверках Росприроднадзора, споры об ущербе.'
  },
  {
        icon: '🛡️',
        title: 'Защита прав потребителей',
        description: 'Возврат денег, иски, досудебные претензии.'
  },
  {
        icon: '🛡️',
        title: 'Санитарно-эпидемиологическое благополучие населения',
        description: 'Защита позиций при проведении проверок органами Роспортребнадзора'
  },
  {
        icon: '📝',
        title: 'Консультации онлайн',
        description: 'Письменные и устные консультации по любым правовым вопросам.'
  },
  {
        icon: '🏢',
        title: 'Представительство в суде',
        description: 'Полное ведение дела от подготовки иска до получения решения.'
  },
]

const Services = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        slidesToScroll: 1,
        breakpoints: {
                '(min-width: 768px)': { slidesToScroll: 2 },
                '(min-width: 1024px)': { slidesToScroll: 3 }
        }
    })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Мои услуги
        </h2>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3"
              >
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition h-full">
                  <div className="text-green-600 text-4xl mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={scrollPrev}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition"
          >
            ◀
          </button>
          <button
            onClick={scrollNext}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services