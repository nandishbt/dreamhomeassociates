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
        <p>our home should reflect your personality and style. Our interior design services transform spaces into havens of comfort and aesthetics.</p>
        <p>Whether it’s a cozy apartment or a sprawling villa or fabulous Office spaces our experts curate designs that resonate with you.</p>

    </div>
    <div className='display-flex1'>

    <Service_card heading="Interiors" subtitle="Interiors at Unbelievable Cost, Expert Designers's plans as per the latest trend keeping all luxurious design in view, End to End service from design to installation." icon={INTERIOR1}/>
      <Service_card heading="Vastu" subtitle="Harmony starts at Home. The art and science behind Vastu help promote internal peace and calm." icon={compass}/>

    </div>

    </div>
    </div>

  )
}

export default InteriorDec