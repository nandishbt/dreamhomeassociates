import React from 'react'
import Contact_card from '../../Components/Contact_card/Contact_card'
import Contact_1 from '../../Components/Contact/Contact'
import founder1 from "../../assets/Coufounder1.png"
import founder2 from "../../assets/Coufounder2.png"
import Tesi_card from '../../Components/Testimos/Tesi_card'
import Email from '../../Components/Email/Email'

import './Contact.css'

const Contact = () => {
  return (
    <div>
      
      <Contact_card />

      <div className='container '>


      <Contact_1 />
      <Email />

      <h1 className='m'>REACH US</h1>


      <div className='map-responsive'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6304211489596!2d77.59619737460513!3d13.059180712953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19a210564e9b%3A0x94014022b3e31a5c!2sMS%20WELKIN%20TOWER!5e0!3m2!1sen!2sin!4v1710573703632!5m2!1sen!2sin" 
            width="1100" 
            height="450" 
          
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title='Responsive google map'>

            </iframe>


      </div>
      </div>
     
      
    </div>
  )
}

export default Contact