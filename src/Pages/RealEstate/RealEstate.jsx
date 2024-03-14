import React from 'react'
import './RealEstate.css'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar'
import Service_card from '../../Components/Services/Service_card'
import { BsHouses } from "react-icons/bs";

const RealEstate = () => {
  return (
   <div>
     <div className='estate'>
      <Navbar />
      <h1>REAL ESTATE SERVICES</h1>
       

    

    </div>
    <div className='estate_btm'>
      <p className='pp'>	Buying or selling a property? Look no further. Dream Home Associates specializes in real estate transactions.</p>
      <p className='pp'>	We assist you in finding your ideal home, evaluating properties, negotiating deals, and handling legal formalities.</p>
      <h1>TYPES OF SERVICES WE PROVIDE</h1>
      <div className=' display-flex '>
      <Service_card heading="Real Estate " subtitle="Residential Flats, Villas, Plots, and Communities in both affordable and premium ranges" icon={<BsHouses />}/>
      <Service_card heading="Commercial" subtitle="Commercial Property Solutions" icon={<BsHouses />}/>
      <Service_card heading="Interior Design " subtitle="Whether it’s a cozy apartment or fabulous Office spaces our experts curate designs that resonate with you." icon={<BsHouses />}/>
      <Service_card heading="Vastu " subtitle="Harmony starts at Home with Vastu. Our Vastu Experts & Architects design the house where Vastu science meets spirituality" icon={<BsHouses />}/>


      </div>

     
      
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