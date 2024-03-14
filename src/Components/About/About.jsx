import React from 'react'
import './About.css'
import cofounder1 from '../../assets/Coufounder1.png'
import cofounder2 from '../../assets/Coufounder2.png'
import { useSpring, animated } from 'react-spring';


const About = () => {

 
  return (
   <div className='about_summary'>
    <h1></h1>
      <p>Dream Home Associates would like to introduce as the young & promising financial consultancy established on 2019, located at Amruth Nagar, Bengaluru, India. We take this opportunity to offer our services to cater to any financial needs like all kinds of Loans, Real Eastate & Interior Decoration the most effective manner. We will guide, compare & offer you the best services & Prices as per the customer requirement.</p>
      <p>At Dream Home Associates, we understand that purchasing a home is one of the most significant decisions you'll ever make. That's why we offer a comprehensive range of services to cater to all your housing needs and aspirations. Whether you're looking to buy your first home, refinance your existing mortgage, or extend your current property, we've got you covered.</p>
      
      {/* <p>We pride ourselves on offering end-to-end services to our customers. From the initial consultation 
        to the final disbursement, we are committed to guiding you through every step of the process. Our team 
        of experts provides assistance with legal procedures, house searches, registration, house design, interior decoration,
         Vastu consultation, and more.</p>
      <p>At Dream Home Associates, we believe in building lasting relationships with our clients by providing exceptional service
           and personalized solutions. Your dream home journey starts here – let us help you turn your aspirations into reality. Contact
            us today to embark on your path to homeownership and beyond!</p> */}
      <p><b>Meet Our Leaders:</b></p>
      <p><strong>Anindita Mukherjee </strong>and <strong>Ranganath Nandagiri,</strong> our Co-Owners and Managing Partners, bring years of expertise and dedication to the table. With their guidance, Dream Home Associates ensures excellence in every aspect of your real estate journey.</p>

   </div>
  )
}

export default About