import React from 'react'
import './Loan.css'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from 'react-router-dom';


const Loan = () => {
  return (
    
    <div className='loan'>
      <div className='loan_col'>
        <h4>Housing Loan Solutions</h4>

      </div>

      <div className='loan_col'>
        <ul>
          <li>Direct Purchase Loans.</li>
          <li>Refinance Options.</li>
          <li>Balance Transfer Facilities.</li>
          <li>Top-Up Loans.</li>
          <li>Extensions for all Khatas.</li>
          <li>Mortgage Loan Options.</li>
        </ul>
        <div className='loan_backbutton'>
        <Link to='/'><MdOutlineKeyboardBackspace /></Link>
        </div>

        

      </div>

      

     
      





      
 
    </div>
  )
}

export default Loan