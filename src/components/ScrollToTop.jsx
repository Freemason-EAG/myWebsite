import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollToTop = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const scrollToElement = () => {
        const element = document.getElementById(hash.substring(1))

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })

          return true
        }

        return false
      }

      // Пытаемся найти элемент после рендера страницы
      requestAnimationFrame(() => {
        if (!scrollToElement()) {
          setTimeout(scrollToElement, 100)
        }
      })

      return
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default ScrollToTop