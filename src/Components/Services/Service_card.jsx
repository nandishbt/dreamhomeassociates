import React from 'react'
import './Service_card.css'



const Service_card = ({heading,subtitle,icon}) => {
  return (
    <div className='services'>
        <div className='service_desc'>
            <h1>{heading}</h1>
            <p>{subtitle}</p>
        </div>
        <div className='service_img'>
            {icon}
        </div>
        
    </div>
  )
}

export default Service_card