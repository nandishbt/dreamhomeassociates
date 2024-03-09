import React from 'react'
import './Contact.css'
import { Link } from 'react-scroll'

const Contact = () => {
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
                <input type='text' name='name' placeholder='Enter Your Name' required />
                <label>Your Mobile:</label>
                <input type='tel' name='phone' placeholder='Enter Your Name' required />
                <label>Write your messages here</label>
                <textarea name='message' rows='6' placeholder='Enter your message' required />
                <Link to='hero' smooth = {true} duration={600}  className='btn'>Submit Now</Link>
            </form>
        </div>
    </div>
  )
}

export default Contact