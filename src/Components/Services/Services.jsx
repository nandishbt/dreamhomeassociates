import React from 'react'

import Service_card from './Service_card'
import './Service_card.css'


const Services = () => {
  return (
    <div className='main_service'>
      <Service_card heading="Housing Loan" subtitle="Loan for  direct purchase of flats/villas/independent houses."/>
      <Service_card heading="Project Loan" subtitle="Tailored solutions for project development"/>
      <Service_card heading="Education Loan" subtitle="Loan for fulfilling dreams for higher studies"/>
      <Service_card heading="Mortgage Loan" subtitle="Loan against keeping the residential & commercial properties mortgaged"/>
      <Service_card heading="Personal Loan" subtitle="Loan for multi purpose financial emergencies"/>
      <Service_card heading="Bussiness Loan" subtitle="Loans to the Entrepreneurs/Doctors etc for establishing new business"/>
      <Service_card heading="Vehicle Loan" subtitle="Loan for getting dream vehicles "/>
      <Service_card heading="Real Estate " subtitle="We assist you in finding your ideal home, evaluating properties"/>
      
    </div>
    
      
  )
}

export default Services