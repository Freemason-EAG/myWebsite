import { useNavigate } from "react-router-dom"

const FloatingContactButton = () => {
  const navigate = useNavigate()

  const handleContactClick = () => {
    const contactElement = document.getElementById("contact")

    if (contactElement) {
      contactElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    } else {
      navigate("/#contact")
    }
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">

      <div className="
        bg-white
        rounded-2xl
        shadow-2xl
        p-4
        border border-black/5
        max-w-xs
      ">

        <p className="text-primary font-semibold">
          Нужна юридическая помощь?
        </p>

        <p className="text-sm text-primary-light mt-1 mb-3">
          Расскажите о своей ситуации.
        </p>

        <button
          onClick={handleContactClick}
          className="
            block
            w-full
            text-center
            bg-accent
            hover:bg-accent-light
            text-white
            py-3
            rounded-lg
            transition
          "
        >
          Получить консультацию
        </button>

      </div>

    </div>
  )
}

export default FloatingContactButton