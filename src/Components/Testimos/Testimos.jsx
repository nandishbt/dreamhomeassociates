import React from 'react'
import './Testimos.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import Service_card from '../Services/Service_card'

const Testimos = () => {
  return (
    <div className='test'>
        <h1>OUR TESTIMONIALS</h1>
          <div className='testimo'>
        <Service_card heading="HOME LOAN" subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, iste!"/>
        <Service_card heading="HOME LOAN" subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, iste!"/>
        <Service_card heading="HOME LOAN" subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, iste!"/>
        <Service_card heading="HOME LOAN" subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, iste!"/>
 
        
    </div>
    </div>
   
  )
}

export default Testimos