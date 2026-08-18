import { useLocation, useNavigate } from "react-router-dom"

const ContactLink = ({
  children = "Получить консультацию",
  className = "",
}) => {

  const navigate = useNavigate()
  const location = useLocation()


  const handleClick = (event) => {

    event.preventDefault()


    if (location.pathname === "/") {

      const contactElement = document.getElementById("contact")

      if (contactElement) {

        contactElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })

      }

      return
    }


    navigate("/#contact")

  }


  return (

    <a
      href="/#contact"
      onClick={handleClick}
      className={className}
    >

      {children}

    </a>

  )

}


export default ContactLink