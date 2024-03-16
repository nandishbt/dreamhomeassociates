import React from 'react'
import './Loan.css'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar'
import Service_card from '../../Components/Services/Service_card'

import HOMELOAN1 from '../../assets/HOMELOAN1.jpg'
import mortgage from '../../assets/mortgage.jpg'
import personal1 from '../../assets/personal1.jpg'

import pr1 from '../../assets/pr1.jpg'
import bu from '../../assets/bu.jpg'
import ve from '../../assets/ve.jpg'
import ed from '../../assets/ed.avif'


import { HiOutlineHomeModern } from 'react-icons/hi2'
import { GoProjectRoadmap } from "react-icons/go";
import { MdCastForEducation } from "react-icons/md";
import { CiMoneyCheck1 } from "react-icons/ci";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa6";
import { BsHouses } from "react-icons/bs";
import { GiHouse } from "react-icons/gi";



const Loan = () => {
  return (
    <div>
       <div className='loan'>
      <Navbar />
      <h2>LOAN SERVICES</h2>
      

      
        

      </div>

      <div className='Loan_btm'>
 

       
        <div className='container display-flex'>     
        <p>Whether you’re a First-time Homebuyer or an investor, we offer a range of <strong>Financial Solution</strong> From Home Loans to Project Financing, we guide you through the process, ensuring you make informed decisions.
<p>Our team compares various loan options, interest rates, and repayment terms, tailoring them to your unique requirements.
</p></p></div></div>

<div className='display-flex1 container'>
<Service_card heading="Housing Loan" subtitle="Attractive offers for housing Loans for  direct purchase of flats/villas/independent houses." icon={HOMELOAN1}/>


    <Service_card heading="Mortgage Loan" subtitle="Loan against keeping the residential & commercial properties mortgaged"icon={mortgage}/>
    <Service_card heading="Personal Quick Funds" subtitle=" Quick Funds for multi purpose financial emergencies" icon={personal1}/>
    <Service_card heading="Education Loan" subtitle="Loan for fulfilling dreams for higher studies" icon={ed}/>
    <Service_card heading="Project Loan" subtitle="Tailored solutions for project development" icon={pr1}/>



      <Service_card heading="Bussiness Loan" subtitle="Loans to the Entrepreneurs, Doctors etc for establishing new business, start ups." icon={bu}/>
      <Service_card heading="Vehicle Loan" subtitle="Loan for getting dream vehicles " icon={ve}/>
      
    </div>
   

      </div>
    
   

      

     
      





      
 
    
  )
}

export default Loan