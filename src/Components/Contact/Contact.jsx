import React from 'react'
import './Contact.css'
import { Link } from 'react-scroll'

const Contact = () => {

    const whatsapp = ()=>{
        var phonenumber ='+916361464986'

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
            <h3>Send us a message</h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback,suggestions, and questions are important to us as we strive to provide exceptional service.</p>
            <ul>
                <li>contact@dreamhome.com</li>
                <li>+91-1112223334</li>
                <li>RR Nagar,Bangalore  </li>
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
                <button className='btn' onClick={whatsapp}>Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact