import React from 'react'
import './InteriorDec.css'
import Navbar from '../../Components/Navbar/Navbar'
import Service_card from '../../Components/Services/Service_card'
import { BsHouses } from "react-icons/bs";

import INTERIOR1 from '../../assets/INTERIOR1.jpg'
import compass from '../../assets/compass.jpg'


const InteriorDec = () => {
  return (
    <div>
    <div className='MainDeco'>
        <Navbar />
        <h2>INTERIOR DECORATIONS</h2>
    </div>

    <div className='MainDeco_btm container'> 
    <div className='MainDeco_desc'>
        <p className='decdesc'>Interiors at Unbelievable Cost, <strong>Expert Designers's plans</strong> as per the latest trend keeping all <strong>luxurious design </strong>in view, End to End service from <strong>Design</strong> to <strong>Installation</strong>, Transparent pricind and <strong>On-time</strong> are some factors which make us Unique.</p>
        <p className='decdesc'>our home should reflect your personality and style. Our interior design services transform spaces into havens of comfort and aesthetics.</p>
        <p className='decdesc'> Harmony starts with Home. Improve your Aura & Energies of House and Workspace. WE execute simple and functional arrangements which make your space <strong>Vastu</strong> Perfect.</p>
    </div>
    <div className='display-flex1'>

    <Service_card heading="Interiors" subtitle="Whether it’s a cozy apartment or a sprawling villa or fabulous Office spaces our experts curate designs that resonate with you." icon={INTERIOR1}/>
      <Service_card heading="Vastu" subtitle="The art and science behind Vastu help promote internal peace and calm." icon={compass}/>

    </div>

    </div>
    </div>

  )
}

export default InteriorDec

// 