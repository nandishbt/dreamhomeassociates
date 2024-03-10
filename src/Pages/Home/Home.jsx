import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Insites from '../../Components/Insights/Insites'
import About from '../../Components/About/About'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'
import Services from '../../Components/Services/Services'
import Title from '../../Components/Title/Title'


const Home = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <div className='displayflex'>
      <Insites Num={6854} Headline='NO OF CLIENTS'/>
      <Insites Num={4569} Headline='NO OF LOANS'/>
      <Insites Num={2564} Headline='NO OF ESTATES'/>
      </div>

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

export default Home