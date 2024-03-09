import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subtitle='Our Services' title='What We Offer' />
        <Services />
        <Title subtitle='About Us' title='Who are we' />
        <About />
        <Title subtitle='Contact Us' title='Get in Touch' />
        <Contact />
        <Footer />
      </div>
      
    </div>
  )
}

export default App