const ContactForm = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Свяжитесь со мной
        </h2>
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Ваше имя" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <input 
            type="tel" 
            placeholder="Ваш телефон" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <textarea 
            rows="4" 
            placeholder="Опишите ситуацию" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <button 
            type="submit" 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
          >
            Отправить
          </button>
        </form>
        <p className="text-xs text-gray-500 text-center mt-4">
          Нажимая на кнопку, вы даете согласие на хранение и обработку своих персональных данных и соглашаетесь с условиями их обработки.
        </p>
      </div>
    </section>
  )
}

export default ContactForm