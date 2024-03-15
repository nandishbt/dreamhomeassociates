import React from 'react'
import './Service_card.css'
import home from '../../assets/home.jpg'



const Service_card = ({heading,subtitle,icon}) => {
  return (
    <div className='services'>
      <div>
        <img src={icon} className='services_img'/>

      </div>
      <div>
        <h1 className='heading'>{heading}</h1>
        <p className='subtitle'>{subtitle}</p>
      </div>
      
     
        
    </div>
  )
}

export default Service_card