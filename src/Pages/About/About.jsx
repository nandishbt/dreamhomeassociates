import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './About.css'
import Typed from 'typed.js';
import  { useEffect ,useRef} from 'react'


const About = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['ABOUT US'], // Array of strings to display
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
    <div className='about_page'>
    <div className="about_text" >
      

          <h1><span ref={typedElement}/></h1>
          
      </div>
    <Navbar />
    
   
    
  </div>
  )
}

export default About