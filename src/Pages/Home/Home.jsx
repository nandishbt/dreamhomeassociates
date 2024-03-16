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
import Bank from '../../Components/Bank/Bank'
import Tesi_card from '../../Components/Testimos/Tesi_card'

import founder1 from "../../assets/Coufounder1.png"
import Email from '../../Components/Email/Email'

import LoanCalculator from '../../Components/LoanCal/LoanCalculator'



const Home = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <MainInsight />
   

      <div className='container'>
        <Title subtitle='Our Services' title='WHAT WE OFFER FOR YOU' navigate='/Services'/>
        <Services />
        {/* <Title subtitle='About Us' title='WHO ARE WE' navigate='/About'/>
        <About /> */}

       <LoanCalculator />

        <Testimos />
        
       
        <Bank />
        <Title subtitle='Contact Us' title='GET IN TOUCH' navigate='/Contact'/>
        <Contact />
        <Email />

        <Footer />
        
        {/* <Tesi_card img={founder1} name='Aninditha' desc='Passionate & business oriented Professional having over 15 years of experience across Financial Industries. Sound knowledge in Human Resource Management & Business Acumen. Post Graduate From Kolkata'/> */}
      
       
      </div>
      

    
    </div>
  )
}

export default Home