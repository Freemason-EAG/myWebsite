const Career = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Заголовок */}
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-2">
          Карьера
        </h1>
        <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
        
        {/* Опыт работы */}
        <h2 className="text-2xl font-bold font-heading text-primary mb-6">Опыт работы</h2>
        
        <div className="space-y-8">
          {/* 1. Департамент природопользования */}
          <div className="bg-background-card rounded-xl shadow-md p-6 border-l-4 border-accent">
            <div className="flex flex-wrap justify-between items-start mb-2">
              <h3 className="text-xl font-bold font-heading text-primary">Департамент природопользования и охраны окружающей среды</h3>
              <span className="text-accent font-medium text-sm whitespace-nowrap ml-4">2026</span>
            </div>
            <p className="text-primary-light font-medium mb-2">Старший инспектор</p>
            <ul className="text-primary-light/80 space-y-1 text-sm list-disc list-inside">
              <li>Контрольная (надзорная) деятельность по 248-ФЗ</li>
              <li>Административное производство (КоАП РФ)</li>
              <li>Межведомственное взаимодействие с прокуратурой, Росприроднадзором</li>
              <li>Рассмотрение обращений граждан и юр. лиц</li>
            </ul>
          </div>
          
          {/* 2. Роспотребнадзор */}
          <div className="bg-background-card rounded-xl shadow-md p-6 border-l-4 border-accent">
            <div className="flex flex-wrap justify-between items-start mb-2">
              <h3 className="text-xl font-bold font-heading text-primary">Управление Роспотребнадзора по г. Москве</h3>
              <span className="text-accent font-medium text-sm whitespace-nowrap ml-4">2021-2025</span>
            </div>
            <p className="text-primary-light font-medium mb-2">Ведущий специалист-эксперт</p>
            <div className="mb-2 text-sm text-accent font-medium">⭐ Благодарность от руководителя</div>
            <ul className="text-primary-light/80 space-y-1 text-sm list-disc list-inside">
              <li>Проверки и надзорная деятельность</li>
              <li>Подготовка исков в защиту прав потребителей</li>
              <li>Работа с обращениями граждан</li>
              <li>Судебное представительство</li>
            </ul>
          </div>
          
          {/* 3. УМВД */}
          <div className="bg-background-card rounded-xl shadow-md p-6 border-l-4 border-accent">
            <div className="flex flex-wrap justify-between items-start mb-2">
              <h3 className="text-xl font-bold font-heading text-primary">УМВД России по г. Омску</h3>
              <span className="text-accent font-medium text-sm whitespace-nowrap ml-4">2016-2021</span>
            </div>
            <p className="text-primary-light font-medium mb-2">Оперуполномоченный уголовного розыска</p>
            <div className="mb-2 text-sm text-accent font-medium">⭐ Благодарность от начальника УМВД</div>
            <ul className="text-primary-light/80 space-y-1 text-sm list-disc list-inside">
              <li>Проверка сообщений о преступлениях (УПК РФ)</li>
              <li>Оперативно-розыскная деятельность</li>
              <li>Взаимодействие со следствием и прокуратурой</li>
            </ul>
          </div>
          
          {/* 4. Омский речной порт */}
          <div className="bg-background-card rounded-xl shadow-md p-6 border-l-4 border-accent">
            <div className="flex flex-wrap justify-between items-start mb-2">
              <h3 className="text-xl font-bold font-heading text-primary">ОАО "Омский речной порт"</h3>
              <span className="text-accent font-medium text-sm whitespace-nowrap ml-4">2013-2015</span>
            </div>
            <p className="text-primary-light font-medium mb-2">Ведущий юрисконсульт</p>
            <ul className="text-primary-light/80 space-y-1 text-sm list-disc list-inside">
              <li>300+ договоров ДДУ, регистрация в Росреестре</li>
              <li>Представительство в судах всех инстанций</li>
              <li>Подготовка исков, жалоб, отзывов</li>
            </ul>
          </div>
          
          {/* 5. Ленинский районный суд */}
          <div className="bg-background-card rounded-xl shadow-md p-6 border-l-4 border-accent">
            <div className="flex flex-wrap justify-between items-start mb-2">
              <h3 className="text-xl font-bold font-heading text-primary">Ленинский районный суд г. Омска</h3>
              <span className="text-accent font-medium text-sm whitespace-nowrap ml-4">2013</span>
            </div>
            <p className="text-primary-light font-medium mb-2">Секретарь судебного заседания</p>
            <ul className="text-primary-light/80 space-y-1 text-sm list-disc list-inside">
              <li>Ведение протоколов судебных заседаний</li>
              <li>Юридическая оценка позиций сторон</li>
              <li>Изучение судебных дел</li>
            </ul>
          </div>
        </div>
        
        {/* Образование */}
        <h2 className="text-2xl font-bold font-heading text-primary mt-12 mb-6">Образование</h2>
        <div className="bg-background-card rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold font-heading text-primary">Омский государственный университет им. Ф.М. Достоевского</h3>
          <p className="text-primary-light">Юридический факультет, 2012</p>
        </div>
        
        {/* Навыки */}
        <h2 className="text-2xl font-bold font-heading text-primary mt-12 mb-6">Ключевые навыки</h2>
        <div className="bg-background-card rounded-xl shadow-md p-6">
          <div className="flex flex-wrap gap-2">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">Административное производство (КоАП РФ)</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">Контрольная деятельность (248-ФЗ)</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">Судебное представительство</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">Межведомственное взаимодействие</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">Делопроизводство и ЭДО</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">Работа с обращениями граждан</span>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Career