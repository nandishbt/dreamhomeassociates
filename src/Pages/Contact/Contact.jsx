import React from 'react'
import Contact_card from '../../Components/Contact_card/Contact_card'
import Contact_1 from '../../Components/Contact/Contact'
import founder1 from "../../assets/Coufounder1.png"
import founder2 from "../../assets/Coufounder2.png"
import Tesi_card from '../../Components/Testimos/Tesi_card'

const Contact = () => {
  return (
    <div>
      
      <Contact_card />

      <div className='container '>
        <div className='display-flex'>
        <Tesi_card img={founder1} name='  Anindita Mukherjee ' desc='Passionate & business oriented Professional having over 15 years of experience across Financial Industries. Sound knowledge in Human Resource Management & Business Acumen. Post Graduate From Kolkata'/>
          <Tesi_card img={founder2} name='Ranganath Nandagiri ' desc='Expert from Financial Industry having over 20 years of experience in Stategic planning, Sales & Marketing & Channel Development. Graduate In Commerce.'/>

        </div>

      <Contact_1 />
      </div>
      
    </div>
  )
}

export default Contact