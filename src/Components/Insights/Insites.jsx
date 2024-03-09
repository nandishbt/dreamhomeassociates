import React, { useState } from 'react'
import './Insites.css'
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';


const Insites = ({Num,Headline}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
      });

      const { number } = useSpring({
        number: inView ?  Num: 0,
        from: { number: 0 },
        config: { duration: 2000}, // Adjust the duration as needed
      });
    
  

  return (
    <>
    <div className='insights'>
        <div className='insight'>
            <p>{Headline}</p>
            <div ref={ref}>
            <animated.div>
            {number.interpolate((val) => Math.floor(val))}
             </animated.div>
            </div>

        </div>


        

    </div>
    
    </>
  )
   
   
}

export default Insites