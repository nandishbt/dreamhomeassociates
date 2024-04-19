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
import REALESTATE from '../../assets/REALESTATE.jpg'
import INTERIOR1 from '../../assets/INTERIOR1.jpg'



const Services = () => {
  return (
    <div className='main_service display-flex1'>
      <Service_card heading="Loans" subtitle="Accessible funding solutions for various needs, tailored terms, quick approval, and reliable customer support." icon={HOMELOAN1}/>
      <Service_card heading="Real Estate " subtitle="Residential Flats, Villas, Plots, and Communities in both affordable and premium ranges" icon={REALESTATE}/>

      <Service_card heading="Interiors" subtitle="Whether it’s a cozy apartment or a sprawling villa or fabulous Office spaces our experts curate designs that resonate with you." icon={INTERIOR1}/>
      
    </div>
    
      
  )
}

export default Services