import React from 'react'
import './feedback.css'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Navbar from '../../Components/Navbar/Navbar';

const Feedback = () => {
  return (

    <>
    <Navbar />
    <div className='MainFeed'>
      <div className='Innerdiv'>
        <h1>SEND YOUR FEEDBACK</h1>
        <form action="https://api.web3forms.com/submit" method="POST"> 
        <input type="hidden" name="access_key" value="f49eecec-7e5d-4ccb-b536-86e1fddddd06"/>

        <label>YOUR NAME:</label><br></br>
        <input text='name' name='name' placeholder='Enter Your name' required /><br></br>
        <label>YOUR EMAIL:</label><br></br>
        <input text='email' name='email' placeholder='Enter Your email' required /><br></br>
        <label>RATING(1-5) (1 being the low & 5 being the high)</label><br></br>
        <select name="dropdown"  className='dropdn' required>
            <option value="option1" selected>1</option>
            <option value="option2">2</option>
            <option value="option3">3</option>
            <option value="option2">4</option>
            <option value="option3">5</option>
        </select><br></br>
        <label>YOUR FEEDBACk:</label><br></br>
        <textarea rows={5} placeholder='Enter your Message' required/><br></br>

        <button className='btn'> SUBMIT</button>

        </form>

      </div>
     


     </div>
    </>
    
  
   
  )
}

export default Feedback