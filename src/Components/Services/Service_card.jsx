import React from 'react'
import './Service_card.css'
import { HiOutlineHomeModern } from "react-icons/hi2";


const Service_card = ({heading,subtitle}) => {
  return (
    <div className='services'>
        <div className='service_desc'>
            <h1>{heading}</h1>
            <p>{subtitle}</p>
        </div>
        <div className='service_img'>
            <HiOutlineHomeModern/>

        </div>
        
    </div>
  )
}

export default Service_card