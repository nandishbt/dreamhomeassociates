import React from 'react'
import './About.css'
import cofounder1 from '../../assets/Coufounder1.png'
import cofounder2 from '../../assets/Coufounder2.png'
import { useSpring, animated } from 'react-spring';


const About = () => {

 
  return (
   <div className='about_summary'>
    <h1>ABOUT US</h1>
      <p>Established in 2019, Dream Home Associates is led by Co-Owners and Managing Partners Anindita Mukherjee and Ranganath Nandagiri, who bring years of expertise and dedication to the table.</p>
      
      <p>At Dream Home Associates, we understand that purchasing a home is one of the most significant decisions you'll ever make. That's why we offer a comprehensive range of services to cater to all your housing needs and aspirations. Whether you're looking to buy your first home, refinance your existing mortgage, or extend your current property, we've got you covered.</p>
   </div>
  )
}

export default About