import React from 'react'
import './Email.css'

const Email = () => {
  return (
  
    <div className='MainEmail'>
        <div className='InnerEmail1'>
        <h1>SEND US A MAIL</h1>
        <p>Dreamhome.associates2019@gmail.com</p>

        </div>
        <div className='InnerEmail2'>
           <form action="https://api.web3forms.com/submit" method="POST">
           <input type="hidden" name="access_key" value="7abbf852-6d0d-442f-bb00-aa65820cd5a1"/>
            <label>Your Name:</label><br></br>
            <input text='name' name='name' placeholder='Enter Your Name '  required /><br></br>
            <label>Your Mail:</label><br></br>
            <input text='email'  name='email' placeholder='Enter Your Email' required/><br></br>
            <label>Your Message:</label><br></br>
            <textarea  rows='6' cols='25' placeholder='Enter Your Message ' required/>

            <button className='EmailBtn'>Submit</button>

           </form>
        </div>
    
    </div>
  
  )
}

export default Email