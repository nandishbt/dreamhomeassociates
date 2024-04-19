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
import MainInsight from '../../Components/Insights/MainInsight'
import Bank from '../../Components/Bank/Bank'
import Tesi_card from '../../Components/Testimos/Tesi_card'

import founder1 from "../../assets/Coufounder1.png"
import Email from '../../Components/Email/Email'



import Service_card from '../../Components/Services/Service_card'
import HOMELOAN1 from '../../assets/HOMELOAN1.jpg'
import mortgage from '../../assets/mortgage.jpg'
import personal1 from '../../assets/personal1.jpg'
import REALESTATE from '../../assets/REALESTATE.jpg'
import commercial from '../../assets/commercial.jpg'
import firmland from '../../assets/firmland.jpg'
import INTERIOR1 from '../../assets/INTERIOR1.jpg'
import compass from '../../assets/compass.jpg'
import transfer from '../../assets/transfer.jpg'
import top from '../../assets/top.jpg'
import ext from '../../assets/ext.jpg'
import int from '../../assets/int.jpg'
import od from '../../assets/od.jpg'




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

        {/* <h1 className='display-flex1 heading_'>OUR SERVICES</h1> */}
        {/* <Title subtitle='LOAN' title='SERVICES' navigate='/Loan'/>
        <div className='display-flex1'>
        
      <Service_card heading="Home Loan" subtitle="Attractive offers for housing Loans for  direct purchase of flats/villas/independent houses." icon={HOMELOAN1}/>
      <Service_card heading="Mortgage Loan" subtitle="Loan against keeping the residential & commercial properties mortgaged"icon={mortgage}/>
      <Service_card heading="Personal Quick Funds" subtitle=" Quick Funds for multi purpose financial emergencies" icon={personal1}/>

        </div> */}

        {/* <Title subtitle='REAL ESTATE' title='SERVICES' navigate='/RealEstate'/>
        <div className='display-flex1'>
        
        <Service_card heading="Real Estate " subtitle="Residential Flats, Villas, Plots, and Communities in both affordable and premium ranges" icon={REALESTATE}/>
      <Service_card heading="Commercial" subtitle="Commercial Property Solutions" icon={commercial}/>
      <Service_card heading="Farm Land" subtitle="Discover the Ultimate Gateway Experience of 'Nature Inspired' eco living project, designed exquisitely and beautifully" icon={firmland}/>

        </div> */}

        {/* <Title subtitle='INTERIOR DECORATION' title='SERVICES' navigate='/InteriorDecoration'/>
        <div className='display-flex1'>
        
        <Service_card heading="Interiors" subtitle="Whether it’s a cozy apartment or a sprawling villa or fabulous Office spaces our experts curate designs that resonate with you." icon={INTERIOR1}/>
      <Service_card heading="Vastu" subtitle="The art and science behind Vastu help promote internal peace and calm." icon={compass}/>
        </div> */}

     

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