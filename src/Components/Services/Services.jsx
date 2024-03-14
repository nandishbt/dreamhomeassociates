import React from 'react'

import Service_card from './Service_card'
import './Service_card.css'
import { HiOutlineHomeModern } from 'react-icons/hi2'
import { GoProjectRoadmap } from "react-icons/go";
import { MdCastForEducation } from "react-icons/md";
import { CiMoneyCheck1 } from "react-icons/ci";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa6";
import { BsHouses } from "react-icons/bs";



const Services = () => {
  return (
    <div className='main_service'>
      <Service_card heading="Housing Loan" subtitle="Loan for  direct purchase of flats/villas/independent houses." icon={<HiOutlineHomeModern/>}/>
      <Service_card heading="Project Loan" subtitle="Tailored solutions for project development" icon={<GoProjectRoadmap  />}/>
      <Service_card heading="Education Loan" subtitle="Loan for fulfilling dreams for higher studies" icon={<MdCastForEducation />}/>
      <Service_card heading="Mortgage Loan" subtitle="Loan against keeping the residential & commercial properties mortgaged"icon={<CiMoneyCheck1 />
}/>
      <Service_card heading="Personal Loan" subtitle="Loan for multi purpose financial emergencies" icon={<MdOutlinePersonalInjury />}/>
      <Service_card heading="Bussiness Loan" subtitle="Loans to the Entrepreneurs/Doctors etc for establishing new business" icon={<FaIndianRupeeSign />}/>
      <Service_card heading="Vehicle Loan" subtitle="Loan for getting dream vehicles " icon={<FaCarSide />}/>
      <Service_card heading="Real Estate " subtitle="We assist you in finding your ideal home, evaluating properties" icon={<BsHouses />}/>
      
    </div>
    
      
  )
}

export default Services