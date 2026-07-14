const Career = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Заголовок */}
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-3">
          Профессиональный путь
        </h1>

        <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>

        <p className="text-lg text-primary-light leading-relaxed max-w-4xl mb-14">
          За годы юридической практики мне довелось работать в судебной системе,
          коммерческих организациях, правоохранительных и государственных
          надзорных органах. Каждый этап дал практический опыт, который сегодня
          помогает комплексно оценивать ситуацию, понимать логику принятия
          решений государственными органами и эффективно защищать интересы
          доверителей.
        </p>

        {/* Суд */}
        <div className="bg-background-card rounded-xl shadow-md p-8 mb-8 border-l-4 border-accent">
          <h2 className="text-2xl font-bold font-heading text-primary mb-3">
            Судебная система
          </h2>

          <p className="text-primary-light leading-relaxed">
            Мой профессиональный путь начался в Ленинском районном суде города
            Омска, что позволило мне увидеть судебный процесс изнутри: понять, каким образом суд исследует
            доказательства, оценивает позиции сторон и принимает решения. Этот
            опыт стал прочной основой для дальнейшей юридической практики.
          </p>

          <p className="text-sm text-primary-light/60 mt-4">
            Ленинский районный суд г. Омска · 2013 год
          </p>
        </div>

        {/* Корпоративная практика */}
        <div className="bg-background-card rounded-xl shadow-md p-8 mb-8 border-l-4 border-accent">
          <h2 className="text-2xl font-bold font-heading text-primary mb-3">
            Корпоративная практика
          </h2>

          <p className="text-primary-light leading-relaxed">
            В качестве ведущего юрисконсульта сопровождал деятельность
            коммерческой организации, включая договорную работу, судебное
            представительство и сопровождение проектов в сфере долевого
            строительства. За время работы было подготовлено и зарегистрировано
            более 300 договоров участия в долевом строительстве, дополнительных
            соглашений и иной сопутствующей документации.
          </p>

          <p className="text-sm text-primary-light/60 mt-4">
            ОАО «Омский речной порт» · 2013–2015 годы
          </p>
        </div>

        {/* МВД */}
        <div className="bg-background-card rounded-xl shadow-md p-8 mb-8 border-l-4 border-accent">
          <h2 className="text-2xl font-bold font-heading text-primary mb-3">
            Правоохранительная практика
          </h2>

          <p className="text-primary-light leading-relaxed">
            Служба в уголовном розыске сформировала навыки юридического анализа,
            оценки доказательств и принятия решений в сложных ситуациях.
            Постоянное взаимодействие со следственными подразделениями,
            прокуратурой и судами позволило глубже понять механизм применения
            законодательства на практике.
          </p>

          <div className="mt-4 text-sm text-accent">
            Благодарность начальника УМВД России по Омской области
          </div>

          <p className="text-sm text-primary-light/60 mt-2">
            УМВД России по г. Омску · 2016–2021 годы
          </p>
        </div>

        {/* Роспотребнадзор */}
        <div className="bg-background-card rounded-xl shadow-md p-8 mb-8 border-l-4 border-accent">
          <h2 className="text-2xl font-bold font-heading text-primary mb-3">
            Государственный контроль и защита прав потребителей
          </h2>

          <p className="text-primary-light leading-relaxed">
            Более трёх лет работал в Управлении Роспотребнадзора по городу
            Москве. Участвовал в проведении контрольных мероприятий,
            административной практике, судебной защите прав потребителей,
            рассмотрении обращений граждан и взаимодействии с органами власти.
            Этот опыт позволяет понимать, как формируются решения контролирующих
            органов и какие правовые аргументы действительно имеют значение.
          </p>

          <div className="mt-4 text-sm text-accent">
            Благодарность руководителя Управления Роспотребнадзора по г. Москве
          </div>

          <p className="text-sm text-primary-light/60 mt-2">
            Управление Роспотребнадзора по г. Москве · 2021–2025 годы
          </p>
        </div>

        {/* Департамент */}
        <div className="bg-background-card rounded-xl shadow-md p-8 mb-12 border-l-4 border-accent">
          <h2 className="text-2xl font-bold font-heading text-primary mb-3">
            Государственный экологический контроль
          </h2>

          <p className="text-primary-light leading-relaxed">
            Работа в сфере государственного экологического надзора позволила
            получить практический опыт применения Федерального закона № 248-ФЗ,
            участия в контрольных и профилактических мероприятиях,
            административной практике, рассмотрении обращений граждан и
            взаимодействии с прокуратурой, Росприроднадзором и органами местного
            самоуправления.
          </p>

          <p className="text-sm text-primary-light/60 mt-4">
            Департамент природопользования и охраны окружающей среды · 2026 —
            настоящее время
          </p>
        </div>

        {/* Компетенции */}
        <h2 className="text-3xl font-bold font-heading text-primary mb-6">
          Основные направления практики
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-12">

          <div className="bg-background-card rounded-xl p-5 shadow">
            <h3 className="font-semibold text-primary mb-2">
              Контрольные мероприятия
            </h3>
            <p className="text-primary-light text-sm">
              Сопровождение проверок, взаимодействие с контролирующими органами,
              подготовка правовой позиции.
            </p>
          </div>

          <div className="bg-background-card rounded-xl p-5 shadow">
            <h3 className="font-semibold text-primary mb-2">
              Административные дела
            </h3>
            <p className="text-primary-light text-sm">
              Защита интересов доверителей по делам об административных
              правонарушениях, подготовка жалоб и процессуальных документов.
            </p>
          </div>

          <div className="bg-background-card rounded-xl p-5 shadow">
            <h3 className="font-semibold text-primary mb-2">
              Судебная работа
            </h3>
            <p className="text-primary-light text-sm">
              Подготовка исковых заявлений, отзывов, возражений и иных
              процессуальных документов.
            </p>
          </div>

          <div className="bg-background-card rounded-xl p-5 shadow">
            <h3 className="font-semibold text-primary mb-2">
              Правовой анализ
            </h3>
            <p className="text-primary-light text-sm">
              Анализ законодательства, подготовка правовых заключений и поиск
              оптимальных решений в сложных правовых ситуациях.
            </p>
          </div>

        </div>

        {/* Образование */}

        <h2 className="text-3xl font-bold font-heading text-primary mb-6">
          Образование
        </h2>

        <div className="bg-background-card rounded-xl shadow-md p-8">

          <h3 className="text-xl font-semibold text-primary mb-2">
            Омский государственный университет имени Ф.М. Достоевского
          </h3>

          <p className="text-primary-light">
            Юридический факультет
          </p>

          <p className="text-primary-light/70 mt-1">
            Высшее юридическое образование · 2012 год
          </p>

        </div>

      </div>
    </div>
  )
}

export default Career


// const Career = () => {
//   return (
//     <div className="min-h-screen bg-background py-16">
//       <div className="container mx-auto px-4 max-w-4xl">
        
//         {/* Заголовок */}
//         <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-2">
//           Опыт, который работает в интересах клиента
//         </h1>
//         <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
        
//         {/* Опыт работы */}
//         <h2 className="text-2xl font-bold font-heading text-primary mb-6">Опыт работы</h2>
        
//         <div className="space-y-8">
//           {/* 1. Департамент природопользования */}
//           <div className="bg-background-card rounded-xl shadow-md p-6 border-l-4 border-accent">
//             <div className="flex flex-wrap justify-between items-start mb-2">
//               <h3 className="text-xl font-bold font-heading text-primary">Департамент природопользования и охраны окружающей среды</h3>
//               <span className="text-accent font-medium text-sm whitespace-nowrap ml-4">2026</span>
//             </div>
//             <p className="text-primary-light font-medium mb-2">Старший инспектор</p>
//             <ul className="text-primary-light/80 space-y-1 text-sm list-disc list-inside">
//               <li>Контрольная (надзорная) деятельность по 248-ФЗ</li>
//               <li>Административное производство (КоАП РФ)</li>
//               <li>Межведомственное взаимодействие с прокуратурой, Росприроднадзором</li>
//               <li>Рассмотрение обращений граждан и юр. лиц</li>
//             </ul>
//           </div>
          
//           {/* 2. Роспотребнадзор */}
//           <div className="bg-background-card rounded-xl shadow-md p-6 border-l-4 border-accent">
//             <div className="flex flex-wrap justify-between items-start mb-2">
//               <h3 className="text-xl font-bold font-heading text-primary">Управление Роспотребнадзора по г. Москве</h3>
//               <span className="text-accent font-medium text-sm whitespace-nowrap ml-4">2021-2025</span>
//             </div>
//             <p className="text-primary-light font-medium mb-2">Ведущий специалист-эксперт</p>
//             <div className="mb-2 text-sm text-accent font-medium">⭐ Благодарность от руководителя</div>
//             <ul className="text-primary-light/80 space-y-1 text-sm list-disc list-inside">
//               <li>Проверки и надзорная деятельность</li>
//               <li>Подготовка исков в защиту прав потребителей</li>
//               <li>Работа с обращениями граждан</li>
//               <li>Судебное представительство</li>
//             </ul>
//           </div>
          
//           {/* 3. УМВД */}
//           <div className="bg-background-card rounded-xl shadow-md p-6 border-l-4 border-accent">
//             <div className="flex flex-wrap justify-between items-start mb-2">
//               <h3 className="text-xl font-bold font-heading text-primary">УМВД России по г. Омску</h3>
//               <span className="text-accent font-medium text-sm whitespace-nowrap ml-4">2016-2021</span>
//             </div>
//             <p className="text-primary-light font-medium mb-2">Оперуполномоченный уголовного розыска</p>
//             <div className="mb-2 text-sm text-accent font-medium">⭐ Благодарность от начальника УМВД</div>
//             <ul className="text-primary-light/80 space-y-1 text-sm list-disc list-inside">
//               <li>Проверка сообщений о преступлениях (УПК РФ)</li>
//               <li>Оперативно-розыскная деятельность</li>
//               <li>Взаимодействие со следствием и прокуратурой</li>
//             </ul>
//           </div>
          
//           {/* 4. Омский речной порт */}
//           <div className="bg-background-card rounded-xl shadow-md p-6 border-l-4 border-accent">
//             <div className="flex flex-wrap justify-between items-start mb-2">
//               <h3 className="text-xl font-bold font-heading text-primary">ОАО "Омский речной порт"</h3>
//               <span className="text-accent font-medium text-sm whitespace-nowrap ml-4">2013-2015</span>
//             </div>
//             <p className="text-primary-light font-medium mb-2">Ведущий юрисконсульт</p>
//             <ul className="text-primary-light/80 space-y-1 text-sm list-disc list-inside">
//               <li>300+ договоров ДДУ, регистрация в Росреестре</li>
//               <li>Представительство в судах всех инстанций</li>
//               <li>Подготовка исков, жалоб, отзывов</li>
//             </ul>
//           </div>
          
//           {/* 5. Ленинский районный суд */}
//           <div className="bg-background-card rounded-xl shadow-md p-6 border-l-4 border-accent">
//             <div className="flex flex-wrap justify-between items-start mb-2">
//               <h3 className="text-xl font-bold font-heading text-primary">Ленинский районный суд г. Омска</h3>
//               <span className="text-accent font-medium text-sm whitespace-nowrap ml-4">2013</span>
//             </div>
//             <p className="text-primary-light font-medium mb-2">Секретарь судебного заседания</p>
//             <ul className="text-primary-light/80 space-y-1 text-sm list-disc list-inside">
//               <li>Ведение протоколов судебных заседаний</li>
//               <li>Юридическая оценка позиций сторон</li>
//               <li>Изучение судебных дел</li>
//             </ul>
//           </div>
//         </div>
        
//         {/* Образование */}
//         <h2 className="text-2xl font-bold font-heading text-primary mt-12 mb-6">Образование</h2>
//         <div className="bg-background-card rounded-xl shadow-md p-6">
//           <h3 className="text-xl font-bold font-heading text-primary">Омский государственный университет им. Ф.М. Достоевского</h3>
//           <p className="text-primary-light">Юридический факультет, 2012</p>
//         </div>
        
//         {/* Навыки */}
//         <h2 className="text-2xl font-bold font-heading text-primary mt-12 mb-6">Ключевые навыки</h2>
//         <div className="bg-background-card rounded-xl shadow-md p-6">
//           <div className="flex flex-wrap gap-2">
//             <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">Административное производство (КоАП РФ)</span>
//             <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">Контрольная деятельность (248-ФЗ)</span>
//             <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">Судебное представительство</span>
//             <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">Межведомственное взаимодействие</span>
//             <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">Делопроизводство и ЭДО</span>
//             <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">Работа с обращениями граждан</span>
//           </div>
//         </div>
        
//       </div>
//     </div>
//   )
// }

// export default Career