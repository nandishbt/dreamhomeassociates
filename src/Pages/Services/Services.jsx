import React from 'react'
import './Services.css'
import Navbar from '../../Components/Navbar/Navbar'
import Typed from 'typed.js';
import  { useEffect ,useRef} from 'react'
import Title from '../../Components/Title/Title'
import Service_card from '../../Components/Services/Service_card'
import HOMELOAN1 from '../../assets/HOMELOAN1.jpg'
import mortgage from '../../assets/mortgage.jpg'
import personal1 from '../../assets/personal1.jpg'
import REALESTATE from '../../assets/REALESTATE.jpg'
import commercial from '../../assets/commercial.jpg'
import firmland from '../../assets/firmland.jpg'
import INTERIOR1 from '../../assets/INTERIOR1.jpg'
import compass from '../../assets/compass.jpg'
import transfer from '../../assets/transfer.jpg'
import top from '../../assets/top.jpg'
import ext from '../../assets/ext.jpg'
import int from '../../assets/int.jpg'
import od from '../../assets/od.jpg'




import { HiOutlineHomeModern } from 'react-icons/hi2'
import { GoProjectRoadmap } from "react-icons/go";
import { MdCastForEducation } from "react-icons/md";
import { CiMoneyCheck1 } from "react-icons/ci";
import { BsHouses } from "react-icons/bs";
import { GiHouse } from "react-icons/gi";

const Services = () => {

  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['SERVICES','LOANS','REAL ESTATE','INTERIOR DECORATION'], // Array of strings to display
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

    <div className='service-btm container display-flex1'>
      <h3>We pride ourselves on offering end-to-end services to our customers. From the initial consultation to the final disbursement, we are committed to guiding you through every step of the process. Our team of experts provide assistance with legal procedures, house searches, registration, house design, interior decoration, Vastu consultation, and more.<br></br>

At Dream Home Associates, we believe in building lasting relationships with our clients by providing exceptional service and personalized solutions. Your dream home journey starts here – let us help you turn your aspirations into reality. Contact us today to embark on your path to homeownership and beyond!
</h3>
    <Title subtitle='LOAN' title='SERVICES' navigate='/Loan'/>
    <Service_card heading="Home Loan" subtitle="Attractive offers for housing Loans for  direct purchase of flats/villas/independent houses." icon={HOMELOAN1}/>
    <Service_card heading="Mortgage Loan" subtitle="Loan against keeping the residential & commercial properties mortgaged"icon={mortgage}/>
    <Service_card heading="Personal Quick Funds" subtitle=" Quick Funds for multi purpose financial emergencies" icon={personal1}/>


      <Title subtitle='REAL ESTATE' title='SERVICES' navigate='/RealEstate'/>
      <Service_card heading="Real Estate " subtitle="Residential Flats, Villas, Plots, and Communities in both affordable and premium ranges" icon={REALESTATE}/>
      <Service_card heading="Commercial" subtitle="Commercial Property Solutions" icon={commercial}/>
      <Service_card heading="Farm Land" subtitle="Discover the Ultimate Gateway Experience of 'Nature Inspired' eco living project, designed exquisitely and beautifully" icon={firmland}/>

      <Title subtitle='INTERIOR DECORATION' title='SERVICES' navigate='/InteriorDecoration'/>
    <Service_card heading="Interiors" subtitle="Whether it’s a cozy apartment or a sprawling villa or fabulous Office spaces our experts curate designs that resonate with you." icon={INTERIOR1}/>
      <Service_card heading="Vastu" subtitle="The art and science behind Vastu help promote internal peace and calm." icon={compass}/>

      <h6 className='other'> OTHER SERVICES</h6>
      <Service_card heading="Balance transfer" subtitle=" Move debt from one credit card to another to consolidate, save on interest" icon={transfer}/>
      <Service_card heading="Top-Up" subtitle="Convenient method to add credit or funds to prepaid accounts for various services or utilities." icon={top}/>
      <Service_card heading="Home Extension" subtitle="Expand living space with new rooms or areas, enhancing comfort and increasing property value." icon={ext}/>
      <Service_card heading="Interior Loan" subtitle="Interior Loan offers flexible financing solutions for homeowners seeking to enhance their living spaces affordably" icon={int}/>
      <Service_card heading="Overdraft facility" subtitle="Overdraft facility allows account holders to withdraw more money than available, up to a certain limit." icon={od}/>




    </div>
    </div>
  
  )
}

export default Services