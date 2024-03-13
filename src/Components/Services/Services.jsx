import React from 'react'

import Service_card from './Service_card'
import './Service_card.css'


const Services = () => {
  return (
    <div className='main_service'>
      <Service_card heading="Home Loan" subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, iste!"/>
      <Service_card heading="Purchase Loan" subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, iste!"/>
      <Service_card heading="Top-up Loan" subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, iste!"/>
      <Service_card heading="Mortgage Loan" subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, iste!"/>
      <Service_card heading="Personal Loan" subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, iste!"/>
      <Service_card heading="Bussiness Loan" subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, iste!"/>
      <Service_card heading="Vehicle Loan" subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, iste!"/>
      <Service_card heading="Real Estate " subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, iste!"/>
      
    </div>
    
      
  )
}

export default Services