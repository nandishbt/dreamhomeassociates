import React from 'react'
import './Contact_card.css'
import Navbar from '../../Components/Navbar/Navbar'
import Typed from 'typed.js';
import  { useEffect ,useRef} from 'react'


const Contact_card = () => {

  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['CONTACT US'], // Array of strings to display
      typeSpeed: 80, // Typing speed in milliseconds
      backSpeed: 80, // Backspacing speed in milliseconds
      loop: false // Whether to loop the strings
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy(); // Cleanup on component unmount
    };
  }, []);
  return (
    <>
     <div className='contact_page'>
      <div className="contact-text" >
        

            <h1><span ref={typedElement}/></h1>
            
        </div>
      <Navbar />
      
     
      
    </div>
    <div className='contact-card'>
        <div className='contact-card1'>
            

        </div>
        <div className='contact-card2'>
  
       
            
        </div>
        
    </div>
    </>
   
  )
}


export default Contact_card