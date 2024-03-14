import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import About_card from '../../Components/About/About'
import './About.css'
import Typed from 'typed.js';
import  { useEffect ,useRef} from 'react'
import founder1 from "../../assets/Coufounder1.png"
import founder2 from "../../assets/Coufounder2.png"
import Tesi_card from '../../Components/Testimos/Tesi_card'


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
    <>
    
     <div className='about_page'>
    <div className="about_text" >
      

          <h1><span ref={typedElement}/></h1>
          
      </div>
    <Navbar />

    
   
    
  </div>
  {/* <div className='tt'>
  <Tesi_card img={founder1} name='  Anindita Mukherjee ' desc='Passionate & business oriented Professional having over 15 years of experience across Financial Industries. Sound knowledge in Human Resource Management & Business Acumen. Post Graduate From Kolkata'/>
  <Tesi_card img={founder2} name='Ranganath Nandagiri ' desc='Expert from Financial Industry having over 20 years of experience in Stategic planning, Sales & Marketing & Channel Development. Graduate In Commerce.'/>

  </div> */}


  <About_card/>
  
  </>
   
  )
}

export default About