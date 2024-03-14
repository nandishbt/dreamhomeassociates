import React from 'react'
import './Testimos.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import Service_card from '../Services/Service_card'
import founder1 from "../../assets/Coufounder1.png"
import founder2 from "../../assets/Coufounder2.png"
import Tesi_card from '../../Components/Testimos/Tesi_card'

const Testimos = () => {
  return (
    <div className='test'>
        <h1>OUR TESTIMONIALS</h1>
          <div className='testimo'>
          <Tesi_card img={founder1} name='  Anindita Mukherjee ' desc='Passionate & business oriented Professional having over 15 years of experience across Financial Industries. Sound knowledge in Human Resource Management & Business Acumen. Post Graduate From Kolkata'/>
          <Tesi_card img={founder2} name='Ranganath Nandagiri ' desc='Expert from Financial Industry having over 20 years of experience in Stategic planning, Sales & Marketing & Channel Development. Graduate In Commerce.'/>
          <Tesi_card img={founder1} name='  Anindita Mukherjee ' desc='Passionate & business oriented Professional having over 15 years of experience across Financial Industries. Sound knowledge in Human Resource Management & Business Acumen. Post Graduate From Kolkata'/>

       
        
    </div>
    </div>
   
  )
}

export default Testimos