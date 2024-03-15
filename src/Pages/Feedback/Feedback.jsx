import React from 'react'
import './feedback.css'
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const Feedback = () => {
  return (
    <div className='Feedmain'> 
       <form> <h2>FEEDBACK FORM</h2>
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Enter your name" required/>
  </div>
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Enter your email address" required/>
  </div>
  <div class="form-group">
    <label for="rating">Rating (1-5):</label>
    <div class="rating-container">
        
      <input type="radio" id="star1" name="rating" value="1" />
      <label for="star1">★</label>
      <input type="radio" id="star2" name="rating" value="2"/>
      <label for="star2">★</label>
      <input type="radio" id="star3" name="rating" value="3"/>
      <label for="star3">★</label>
      <input type="radio" id="star4" name="rating" value="4"/>
      <label for="star4">★</label>
      <input type="radio" id="star5" name="rating" value="5"/>
      <label for="star5">★</label>
    </div>
  </div>
  <div class="form-group">
    <label for="message">Message:</label>
    <textarea id="message" name="message" placeholder="Write your message here" rows="5" required></textarea>
  </div>
  <button type="submit">Send Message</button>
</form>

    </div>
   
  )
}

export default Feedback