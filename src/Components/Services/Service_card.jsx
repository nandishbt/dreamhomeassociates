import React from 'react'
import './Service_card.css'
import { HiOutlineHomeModern } from "react-icons/hi2";

const Service_card = () => {
  return (
    <div className='services'>
        <div className='service_desc'>
            <h1>Home Loan</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, sequi.</p>
        </div>
        <div className='service_img'>
            <HiOutlineHomeModern />

        </div>
        
    </div>
  )
}

export default Service_card