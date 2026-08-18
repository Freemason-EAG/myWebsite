import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout"
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import ContactForm from './components/ContactForm'
import Career from "./pages/Career"
import Business from "./pages/Business"
import Citizens from "./pages/Citizens"
import FloatingContactButton from "./components/FloatingContactButton"
import ServicePage from "./pages/ServicePage"
import ScrollToTop from "./components/ScrollToTop"


const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <>
              <Hero />
              <section id="about">
                <About />
              </section>


              <section id="services">
                <Services />
              </section>

              <section id="contact">
                <ContactForm />
              </section>

            </>
          } />
          <Route path="career" element={<Career />} />

          <Route path="business" element={<Business />} />

          <Route 
            path="business/:slug" 
            element={<ServicePage />} 
          />

          <Route path="citizens" element={<Citizens />} />
          
        </Route>
      </Routes>
      <FloatingContactButton />
    </BrowserRouter>
  )
}

export default App