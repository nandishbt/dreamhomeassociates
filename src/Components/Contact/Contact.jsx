import React from 'react'
import './Contact.css'
import { Link } from 'react-scroll'
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {

    const whatsapp = ()=>{
        var phonenumber ='+919980860555'

        var name = document.querySelector('.name').value;
        var phone = document.querySelector('.phone').value;
        var message = document.querySelector('.message').value;

        var url = 'https://wa.me/' + phonenumber+ "?text="
        +"Name: "+name + "%0a"
        +"Message: "+ message +"%0a%0a"

        window.open(url,'_blank').focus();
    }

  return (
    <div className='contact'>
        <div className='contact-colum'>
            <h3>SEND US A MESSAGE</h3>
            {/* <p>Feel free to reach out through contact form or find our contact information below. Your feedback,suggestions, and questions are important to us as we strive to provide exceptional service.</p> */}
            <ul>
                {/* <li>contact@dreamhome.com</li> */}
                <li>+91-9980860555</li>
                <li># 1&2 MS Welkin Tower Beside SH, Amruth Nagar, Yelahanka Bangalore</li>
                {/* <li>GSTIN/UIN : 29AAIFI3812L1Z3</li> */}
                <li>STATE NAME: Karnataka, CODE: 29</li>
            </ul>
        </div>
        <div className='contact-colum'>
            <form>
                <label>Your Name:</label>
                <input type='text' name='name' placeholder='Enter Your Name' className='name' required />
                <label>Your Mobile:</label>
                <input type='tel' name='phone' placeholder='Enter Your Name' className='phone' required />
                <label>Write your messages here</label>
                <textarea name='message'  rows={4} placeholder='Enter your message' className='message' required />
                <button className='whats_app' onClick={whatsapp}>Send Via WhatsApp < FaWhatsapp/></button>
            </form>
        </div>
    </div>
  )
}

export default Contact