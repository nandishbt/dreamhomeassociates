import React from 'react'
import './RealEstate.css'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar'
import Service_card from '../../Components/Services/Service_card'
import { BsHouses } from "react-icons/bs";

import REALESTATE from '../../assets/REALESTATE.jpg'
import commercial from '../../assets/commercial.jpg'
import firmland from '../../assets/firmland.jpg'


const RealEstate = () => {
  return (
   <div>
     <div className='estate'>
      <Navbar />
      <h2>REAL ESTATE SERVICES</h2>
       

    

    </div>

    
    <div className='estate_btm'>

      <p className='pp'>Buying or selling a property? Look no further. Dream Home Associates specializes in real estate transactions in both <strong>PREMIUM</strong> and <strong>AFFORDABLE</strong> ranges</p>
      <p className='pp'>We assist you in finding your Ideal home, Evaluating properties, Negotiating deals, and Handling legal formalities.</p>
      <h1>TYPES OF SERVICES WE PROVIDE</h1>
      

      </div>
      

      <div className=' display-flex1 container'>
      <Service_card heading="Real Estate " subtitle="Residential Flats, Villas, Plots, and Communities in both affordable and premium ranges" icon={REALESTATE}/>
      <Service_card heading="Commercial" subtitle="Commercial Property Solutions" icon={commercial}/>
      <Service_card heading="Firm Land" subtitle="Discover the Ultimate Gateway Experience of 'Nature Inspired' eco living project, designed exquisitely and beautifully" icon={firmland}/>




      </div>

     
      
    
   </div>
  )
}

export default RealEstate


// Marketing of Residential Flats, Villas, Plots, and Communities in both affordable and premium ranges
// Commercial Property Solutions
// House Interior Decoration

// Transforming your house into your dream home
// Expert Vastu Consultation, Architectural, and Designing Services