import heroBg from "../assets/IMG_0587.webp"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center text-white"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(7,23,57,0.88) 0%, rgba(7,23,57,0.62) 45%, rgba(166,136,104,0.18) 100%), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6">

        <div className="max-w-3xl">

          {/* Имя */}

          <p className="uppercase tracking-[0.25em] text-accent text-sm font-medium mb-4">

            Юрист · Арутюн Егоян

          </p>


          {/* Заголовок */}

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-8">

            Помогаю защитить
            <br />

            <span className="text-accent">
              интересы бизнеса
            </span>

            <br />

            и граждан

          </h1>


          {/* Основной текст */}

          <p className="text-xl md:text-2xl text-white/85 leading-relaxed max-w-2xl">

            Сопровождение проверок государственных органов,
            защита по административным делам,
            судебное представительство
            и правовой анализ сложных ситуаций.

          </p>


          {/* Опыт */}

          <div className="mt-8 pl-5 border-l-2 border-accent max-w-2xl">

            <p className="text-lg leading-relaxed text-white/90">

              <span className="font-semibold text-accent">

                Более 10 лет практического опыта

              </span>

              {" "}в судебной системе, правоохранительных и
              надзорных органах.

            </p>


            <p className="text-white/70 mt-3">

              Этот опыт позволяет понимать,
              как принимаются решения внутри государственных органов
              и эффективно защищать интересы доверителей
              при взаимодействии с ними.

            </p>

          </div>


 {/* Выбор направления */}

<div className="mt-8">

  <p className="text-white/70 mb-4 text-lg">
    Выберите направление помощи:
  </p>


  <div className="flex flex-wrap gap-4">


    <Link
      to="/business"
      className="border border-accent text-accent
                 px-6 py-3 rounded-lg
                 transition-all duration-300
                 hover:bg-accent hover:text-white"
    >
      Для бизнеса
    </Link>


    <Link
      to="/citizens"
      className="border border-white/30 text-white
                 px-6 py-3 rounded-lg
                 transition-all duration-300
                 hover:bg-white hover:text-primary"
    >
      Для граждан
    </Link>


  </div>

</div>

         {/* Основная кнопка */}

          <div className="mt-10">

            <a
              href="#contact"
              className="inline-block bg-accent hover:bg-accent-light
                         text-white px-8 py-4 rounded-lg
                         transition-all duration-300
                         shadow-xl text-lg font-medium"
            >

              Обсудить ситуацию

            </a>

          </div>


        </div>

      </div>
    </section>
  )
}

export default Hero


// import heroBg from "../assets/IMG_0587.webp"

// const Hero = () => {
//   return (
//     <section
//       className="relative min-h-screen flex items-center text-white"
//       style={{
//         backgroundImage: `linear-gradient(to right, rgba(7,23,57,0.88) 0%, rgba(7,23,57,0.62) 45%, rgba(166,136,104,0.18) 100%), url(${heroBg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="container mx-auto px-6">

//         <div className="max-w-3xl">

//           {/* Имя */}

//           <p className="uppercase tracking-[0.25em] text-accent text-sm font-medium mb-4">

//             Юрист · Арутюн Егоян

//           </p>

//           {/* Заголовок */}

//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-8">

//             Помогаю защитить
//             <br />

//             <span className="text-accent">
//               интересы бизнеса
//             </span>

//             <br />

//             и граждан

//           </h1>

//           {/* Основной текст */}

//           <p className="text-xl md:text-2xl text-white/85 leading-relaxed max-w-2xl">

//             Сопровождение проверок государственных органов,
//             защита по административным делам,
//             судебное представительство
//             и правовой анализ сложных ситуаций.

//           </p>

//           {/* Опыт */}

//           <div className="mt-8 pl-5 border-l-2 border-accent max-w-2xl">

//             <p className="text-lg leading-relaxed text-white/90">

//               <span className="font-semibold text-accent">

//                 Более 10 лет практического опыта

//               </span>

//               {" "}в судебной системе, правоохранительных и
//               надзорных органах.

//             </p>

//             <p className="text-white/70 mt-3">

//               Этот опыт позволяет понимать,
//               как принимаются решения внутри государственных органов
//               и эффективно защищать интересы доверителей
//               при взаимодействии с ними.

//             </p>

//           </div>

//           {/* Кнопка */}

//           <div className="mt-10">

//             <a
//               href="#contact"
//               className="inline-block bg-accent hover:bg-accent-light
//                          text-white px-8 py-4 rounded-lg
//                          transition-all duration-300
//                          shadow-xl text-lg font-medium"
//             >

//               Обсудить ситуацию

//             </a>

//           </div>

//           {/* Нижние факты */}

//           {/* <div className="mt-14 flex flex-wrap gap-8 text-sm text-white/70">

//             <div>

//               <span className="block text-3xl font-heading text-accent">

//                 10+

//               </span>

//               лет юридической практики

//             </div>

//             <div>

//               <span className="block text-3xl font-heading text-accent">

//                 5+

//               </span>

//               лет в надзорных органах

//             </div>

//             <div>

//               <span className="block text-3xl font-heading text-accent">

//                 300+

//               </span>

//               сопровождённых договоров

//             </div>

//           </div> */}

//         </div>

//       </div>
//     </section>
//   )
// }

// export default Hero

