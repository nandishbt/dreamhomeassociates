import React from 'react'
import './Hero.css'
import { delay, motion } from "framer-motion"
// import dark from '../../assets/dark-arrow.png'


const Hero = () => {



  return (
    <>
    <div className='hero container'>
        <motion.div className="hero-text" animate={{ y: 40 , x:300}}
        transition={{ type: "spring", stiffness: 50, delay:0.5}}
        >
            <h1>DREAM HOME ASSOCIATES</h1>
            <p>Welcome to Dream Home Associates,your trusted partner in achieving your dream of homeownership and beyond</p>
            {/* <button className='btn'>Explore more <img src={dark} /></button> */}
        </motion.div>
       
    </div>
    
    </>
  )
}

export default Hero