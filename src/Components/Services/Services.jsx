import React from 'react'
import './Services.css'
import home from '../../assets/home.jpg'
import khata from '../../assets/khata.avif'
import estate from '../../assets/estate.avif'

const Services = () => {
  return (
    <div className='Services'>
        <div className='Service'>
            <img src={home} />
            <div className='caption'>
            <h2>Home Loan</h2>
            <p>Direct Purchase Loans, Refinance options, Top-up Loans etc.</p>
            </div>
           
        </div>
        <div className='Service'>
            <img src={khata} />
            <div className='caption'>
            <h2>Loan against property</h2>
            <p>Project Financing, personal Loans, Bussiness Loans etc.</p>
            </div>
          
        </div>
        <div className='Service'>
            <img src={estate} />
            <div className='caption'>
            <h2 >Real Estate</h2>
            <p>Marketing, Interior Decoration, Vastu Consultion etc.</p>
            </div>
            
        </div>

    </div>
  )
}

export default Services