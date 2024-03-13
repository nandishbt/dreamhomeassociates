import React from 'react'


import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Navbar from './Components/Navbar/Navbar'
// import Hero from './Components/Hero/Hero'
// import Services from './Components/Services/Services'
// import Title from './Components/Title/Title'
// import About from './Components/About/About'
// import Contact from './Components/Contact/Contact'
// import Footer from './Components/Footer/Footer'
// import Insites from './Components/Insights/Insites'

import Loan from './Pages/Loan/Loan';
import RealEstate  from './Pages/RealEstate/RealEstate';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';



const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Loan"  element={<Loan/>} />
        <Route path="/RealEstate" element={<RealEstate/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>

    {/* <div>
    <Navbar />
      <Hero />
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

   

     
      
    </div> */}
    </>
  )
}

export default App