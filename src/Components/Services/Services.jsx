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
import { GiHouse } from "react-icons/gi";
import { GiMoneyStack } from "react-icons/gi";
import home from '../../assets/home.jpg'
import HOMELOAN1 from '../../assets/HOMELOAN1.jpg'
import mortgage from '../../assets/mortgage.jpg'
import personal1 from '../../assets/personal1.jpg'



const Services = () => {
  return (
    <div className='main_service display-flex1'>
      <Service_card heading="Home Loan" subtitle=" Attractive offers for housing Loans for direct purchase of flats/villas/independent houses." icon={HOMELOAN1}/>
      <Service_card heading="Mortgage Loan" subtitle="Loan against keeping the residential & commercial properties mortgaged"icon={mortgage
}/>
      <Service_card heading="Personal Quick Funds" subtitle=" Quick Funds for multi purpose financial emergencies" icon={personal1}/>
      
    </div>
    
      
  )
}

export default Services