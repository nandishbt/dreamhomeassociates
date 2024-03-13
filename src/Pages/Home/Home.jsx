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
import Loan_Calculator from '../../Components/Loan_Calculator/Loan_Calculator'


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
        <Title subtitle='Our Services' title='WHAT WE OFFER FOR YOU' navigate='/Services'/>
        <Services />
        <Title subtitle='About Us' title='Who are we' navigate='/About'/>
        <About />
        {/* <Title subtitle='Loan Calculator' title="See Our Plans" navigate='/About' />
        <Loan_Calculator /> */}
        
        <Title subtitle='Contact Us' title='Get in Touch' navigate='/Contact'/>
        <Contact />
        <Footer />
      
       
      </div>
      

    
    </div>
  )
}

export default Home