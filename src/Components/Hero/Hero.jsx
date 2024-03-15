import React, { useEffect ,useRef} from 'react'
import './Hero.css'
import { delay, motion } from "framer-motion"
// import dark from '../../assets/dark-arrow.png'
import Typed from 'typed.js';


const Hero = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['ASSOCIATES'], // Array of strings to display
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
    
 
    <div className='hero container'>
        <div className="hero-text" 
        
        >
            <h1>DREAM HOME <span ref={typedElement}/></h1>
            <p>Welcome to Dream Home Associates,Your Gateway to Financial Solutions & Real Estate Excellence, your trusted partner in achieving your dream of homeownership and beyond</p>
            {/* <button className='btn'>Explore more <img src={dark} /></button> */}
        </div>

    </div>
    
    
  )
}

export default Hero