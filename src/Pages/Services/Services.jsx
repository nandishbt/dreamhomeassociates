import React from 'react'
import './Services.css'
import Navbar from '../../Components/Navbar/Navbar'
import Typed from 'typed.js';
import  { useEffect ,useRef} from 'react'

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
    <div className='service_page'>
      <div className="service-text" >
        

            <h1><span ref={typedElement}/></h1>
            
        </div>
      <Navbar />
      
    </div>
  )
}

export default Services