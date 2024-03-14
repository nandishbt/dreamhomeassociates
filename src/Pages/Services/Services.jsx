import React from 'react'
import './Services.css'
import Navbar from '../../Components/Navbar/Navbar'
import Typed from 'typed.js';
import  { useEffect ,useRef} from 'react'
import Title from '../../Components/Title/Title'
import Service_card from '../../Components/Services/Service_card'

import { HiOutlineHomeModern } from 'react-icons/hi2'
import { GoProjectRoadmap } from "react-icons/go";
import { MdCastForEducation } from "react-icons/md";
import { CiMoneyCheck1 } from "react-icons/ci";
import { BsHouses } from "react-icons/bs";

const Services = () => {

  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['SERVICES','LOANS','REAL ESTATE'], // Array of strings to display
      typeSpeed: 80, // Typing speed in milliseconds
      backSpeed: 80, // Backspacing speed in milliseconds
      loop: true // Whether to loop the strings
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy(); // Cleanup on component unmount
    };
  }, []);
  return (

    <div>
        <div className='service_page'>
      <div className="service-text" >
        

            <h1><span ref={typedElement}/></h1>
            
        </div>
      <Navbar />
      
    </div>
    <div className='service-btm container display-flex'>
    <Title subtitle='LOAN' title='SERVICES' navigate='/Loan'/>
    <Service_card heading="Housing Loan" subtitle="Loan for  direct purchase of flats/villas/independent houses." icon={<HiOutlineHomeModern/>}/>
      <Service_card heading="Project Loan" subtitle="Tailored solutions for project development" icon={<GoProjectRoadmap  />}/>
      <Service_card heading="Education Loan" subtitle="Loan for fulfilling dreams for higher studies" icon={<MdCastForEducation />}/>
      <Service_card heading="Mortgage Loan" subtitle="Loan against keeping the residential & commercial properties mortgaged"icon={<CiMoneyCheck1 />}/>

      <Title subtitle='REAL ESTATE' title='SERVICES' navigate='/RealEstate'/>
      <Service_card heading="Real Estate " subtitle="Residential Flats, Villas, Plots, and Communities in both affordable and premium ranges" icon={<BsHouses />}/>
      <Service_card heading="Commercial" subtitle="Commercial Property Solutions" icon={<BsHouses />}/>
      <Service_card heading="Interior Design " subtitle="Whether it’s a cozy apartment fabulous Office spaces our experts curate designs that resonate with you." icon={<BsHouses />}/>
      <Service_card heading="Vastu " subtitle="Harmony starts at Home with Vastu. Our Vastu Experts & Architects design the house where Vastu science meets spirituality" icon={<BsHouses />}/>





    </div>
    </div>
  
  )
}

export default Services