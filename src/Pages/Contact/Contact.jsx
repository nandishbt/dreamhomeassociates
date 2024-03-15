import React from 'react'
import Contact_card from '../../Components/Contact_card/Contact_card'
import Contact_1 from '../../Components/Contact/Contact'
import founder1 from "../../assets/Coufounder1.png"
import founder2 from "../../assets/Coufounder2.png"
import Tesi_card from '../../Components/Testimos/Tesi_card'
import Email from '../../Components/Email/Email'

const Contact = () => {
  return (
    <div>
      
      <Contact_card />

      <div className='container '>


      <Contact_1 />
      <Email />
      </div>
     
      
    </div>
  )
}

export default Contact