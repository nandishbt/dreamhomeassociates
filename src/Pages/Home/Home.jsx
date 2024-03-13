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
import Testimos from '../../Components/Testimos/Testimos'
import MainInsight from '../../Components/Insights/MainInsight'



const Home = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <MainInsight />
   

      <div className='container'>
        <Title subtitle='Our Services' title='WHAT WE OFFER FOR YOU' navigate='/Services'/>
        <Services />
        <Title subtitle='About Us' title='WHO ARE WE' navigate='/About'/>
        <About />

        <Testimos />
        
       
        
        <Title subtitle='Contact Us' title='GET IN TOUCH' navigate='/Contact'/>
        <Contact />
        <Footer />
      
       
      </div>
      

    
    </div>
  )
}

export default Home