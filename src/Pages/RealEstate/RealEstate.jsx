import React from 'react'
import './RealEstate.css'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from 'react-router-dom';

const RealEstate = () => {
  return (
    <div className='estate'>
       <div className='estate_col'>
        <h4>Real Estate Services</h4>

      </div>

      <div className='estate_col'>
        <ul>
          <li>Marketing of Residential Flats, Villas, Plots, and Communities in both affordable and premium ranges.</li>
          <li>Commercial Property Solutions.</li>
          <li>House Interior Decoration.</li>
          <li>Transforming your house into your dream home.</li>
          <li>Architectural, and Designing Services.</li>
          <li>Expert Vastu Consultation.</li>
        </ul>
        <div className='estate_backbutton'>
        <Link to='/'><MdOutlineKeyboardBackspace /></Link>
        </div>

      </div>

    </div>
  )
}

export default RealEstate


// Marketing of Residential Flats, Villas, Plots, and Communities in both affordable and premium ranges
// Commercial Property Solutions
// House Interior Decoration

// Transforming your house into your dream home
// Expert Vastu Consultation, Architectural, and Designing Services