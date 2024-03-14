import React from 'react'
import './Loan.css'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar'
import Service_card from '../../Components/Services/Service_card'

import { HiOutlineHomeModern } from 'react-icons/hi2'
import { GoProjectRoadmap } from "react-icons/go";
import { MdCastForEducation } from "react-icons/md";
import { CiMoneyCheck1 } from "react-icons/ci";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa6";
import { BsHouses } from "react-icons/bs";



const Loan = () => {
  return (
    <div>
       <div className='loan'>
      <Navbar />
      <h1>LOAN SERVICES</h1>
      

      
        

      </div>

      <div className='Loan_btm'>
 

       
        <div className='container'>     <p>	Whether you’re a first-time homebuyer or an investor, we offer a range of financial solutions. From home loans to project financing, we guide you through the process, ensuring you make informed decisions.
<p>	Our team compares various loan options, interest rates, and repayment terms, tailoring them to your unique requirements.
</p></p></div>
<div className='display-flex container'>
      <Service_card heading="Housing Loan" subtitle="Loan for  direct purchase of flats/villas/independent houses." icon={<HiOutlineHomeModern/>}/>
      <Service_card heading="Project Loan" subtitle="Tailored solutions for project development" icon={<GoProjectRoadmap  />}/>
      <Service_card heading="Education Loan" subtitle="Loan for fulfilling dreams for higher studies" icon={<MdCastForEducation />}/>
      <Service_card heading="Mortgage Loan" subtitle="Loan against keeping the residential & commercial properties mortgaged"icon={<CiMoneyCheck1 />
}/>
      <Service_card heading="Personal Loan" subtitle="Loan for multi purpose financial emergencies" icon={<MdOutlinePersonalInjury />}/>
      <Service_card heading="Bussiness Loan" subtitle="Loans to the Entrepreneurs/Doctors etc for establishing new business" icon={<FaIndianRupeeSign />}/>
      <Service_card heading="Vehicle Loan" subtitle="Loan for getting dream vehicles " icon={<FaCarSide />}/>
      
    </div>
   

      </div>
    </div>
   

      

     
      





      
 
    
  )
}

export default Loan