import React from 'react'
import './feedback.css'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Navbar from '../../Components/Navbar/Navbar';
import Testimos from '../../Components/Testimos/Testimos'


const Feedback = () => {
  return (

    

    <>
    
    <Navbar />
    <div className='MainFeed'>
      <div className='Innerdiv'>
        <h1>SEND YOUR FEEDBACK</h1>
        <form action="https://api.web3forms.com/submit" method="POST"> 
        <input type="hidden" name="access_key" value="7abbf852-6d0d-442f-bb00-aa65820cd5a1"/>

        <label>YOUR NAME:</label><br></br>
        <input text='name' name='name' placeholder='Enter Your name' required /><br></br>
        <label>YOUR EMAIL:</label><br></br>
        <input text='email' name='email' placeholder='Enter Your email' required /><br></br>
        <label>RATE US:</label><br></br>
        {/* <select name="dropdown"  className='dropdn' required>
            <option value="option1" selected>1</option>
            <option value="option2">2</option>
            <option value="option3">3</option>
            <option value="option2">4</option>
            <option value="option3">5</option>
        </select><br></br> */}

<div class="star-rating">
    <input type="radio" id="star5" name="rating" value="5" />
    <label for="star5" title="5 stars">★</label>
    <input type="radio" id="star4" name="rating" value="4" />
    <label for="star4" title="4 stars">★</label>
    <input type="radio" id="star3" name="rating" value="3" />
    <label for="star3" title="3 stars">★</label>
    <input type="radio" id="star2" name="rating" value="2" />
    <label for="star2" title="2 stars">★</label>
    <input type="radio" id="star1" name="rating" value="1" />
    <label for="star1" title="1 star">★</label>
  </div>
        <label>YOUR FEEDBACk:</label><br></br>
        <textarea rows={5} placeholder='Enter your Message' required/><br></br>

        <button className='btn'> SUBMIT</button>

        </form>


      </div>


     


     </div>

     <Testimos />

    </>
    
  
   
  )
}

export default Feedback