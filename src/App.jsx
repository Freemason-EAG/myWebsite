import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="font-body">
      <Header />
      <Hero />
      
      <section id="services">
        <Services />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='contact'>
        <ContactForm />
      </section>
      
      <Footer />
    </div>
  )
}

export default App