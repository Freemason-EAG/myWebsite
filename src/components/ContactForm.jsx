const ContactForm = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Заголовок с декоративной линией */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 font-heading">
            Свяжитесь со мной
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-primary-light mt-3 font-body">
            Заполните форму, и я свяжусь с вами в ближайшее время
          </p>
        </div>
        
        {/* Карточка с формой */}
        <div className="bg-background-card rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <div className="p-1 bg-gradient-to-r from-accent to-accent-light"></div>
          <div className="p-6 md:p-8">
            <iframe
              src="https://forms.yandex.ru/u/6a15f8dd49af4719f1fd9f0a?iframe=1"
              width="100%"
              height="550"
              frameBorder="0"
              name="ya-form-6a15f8dd49af4719f1fd9f0a"
              title="Форма обратной связи"
              className="w-full rounded-lg"
              style={{ minHeight: '500px' }}
            ></iframe>
          </div>
        </div>
        
        {/* Блок с политикой конфиденциальности */}
        <div className="mt-6 text-center">
          <p className="text-xs text-primary-light/60">
            Нажимая на кнопку "Отправить", Вы даете согласие на хранение и обработку Ваших персональных данных.
          </p>
          <p className="text-xs text-primary-light/60 mt-2">
            Ваши данные не передаются третьим лицам и используются только для связи с Вами.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactForm