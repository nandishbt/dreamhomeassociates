import React from 'react'
import './About.css'
import cofounder1 from '../../assets/Coufounder1.png'
import cofounder2 from '../../assets/Coufounder2.png'
import { useSpring, animated } from 'react-spring';


const About = () => {

  const photoAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 } // Adjust the duration as needed
  });
  return (
    <>
      <div className='cofounders'>
      
      <div className='cofounder'>
        <animated.img
          src={cofounder1}
          alt=''
          style={{
            ...photoAnimation,
            maxWidth: '300px',
            borderRadius: '30%',
          }}
        />
        <h3>Anindita  </h3>
        <p>Co founder with 15 years of experience in industry</p>
      </div>

      <div className='cofounder'>
        <animated.img
          src={cofounder2}
          alt=''
          style={{
            ...photoAnimation,
            height:'450px',
            width:'250px',
            maxWidth: '300px',
            borderRadius: '30%',
          }}
        />
        <h3>Ranganath </h3>
        <p>Co founder with 18years of experience in industry</p>
      </div>
    </div>


    <div className='about'>
        <div className='col'>
        <p>Established in 2019, Dream Home Associates is led by Co-Owners and Managing Partners Anindita Mukherjee and Ranganath Nandagiri, who bring years of expertise and dedication to the table.</p>

        </div>

        <div className='col'>
        <p>At Dream Home Associates, we understand that purchasing a home is one of the most significant decisions you'll ever make. That's why we offer a comprehensive range of services to cater to all your housing needs and aspirations. Whether you're looking to buy your first home, refinance your existing mortgage, or extend your current property, we've got you covered.</p>

        </div>
    </div>
    </>
  )
}

export default About