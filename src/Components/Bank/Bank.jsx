import React from 'react'
import './Bank.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SBI from '../../assets/SBI.png'
import YES from '../../assets/YES.png'
import AXIS1 from '../../assets/AXIS1.jpg'
import ICICI from '../../assets/ICICI.svg'
import IDBI from '../../assets/IDBI.jpg'
import BOB1 from '../../assets/BOB1.jpg'
import IDFC from '../../assets/IDFC.jpg'
// import BAJAJ from '../../assets/BAJAJ.jpg'
import PIRAMAL1 from '../../assets/PIRAMAL1.svg'
import ANDT from '../../assets/ANDT.png'
import IND from '../../assets/IND.jpg'
import HDFC from '../../assets/HDFC.jpg'
import KOTAK from '../../assets/KOTAK.jpg'

import partner from '../../assets/partner.avif'


const Bank = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
        <div className='Main'>
          <h2>ABOUT CLIENTS</h2>
        <h1>Corporate/Channel partners:</h1>
        
        <div className='Bank'>
          
        <Slider {...settings}>
        <div>
        <img src={HDFC}/>
        </div>
        <div>
          <img src={SBI}/>
        </div>
        <div>
        <img src={YES}/>
        </div>
        <div>
        <img src={AXIS1}/>
        </div>
        <div>
        <img src={BOB1}/>
        </div>
        <div>
        <img src={ICICI}/>
        </div>
        <div>
        <img src={IDBI}/>
        </div>
        <div>
        <img src={IDFC}/>
        </div>
        <div>
        <img src={IND}/>
        </div>
        <div>
        <img src={KOTAK}/>
        </div>
         <div>
        <img src={PIRAMAL1}/>
        </div>
        <div>
        <img src={ANDT}/>
        </div>

      </Slider>

        </div>

        <div className='Bank__'>
        <div className='BankOther'>
         
         <h1>Other Partners: </h1>
         {/* <img src={partner} className='partnerphoto'/> */}
         <p>We work with almost 150+ distributors, 100+ Connectors, 100+ Developers </p>
         </div>
        <div className='BankOther'>
        <h1>Customer Base: </h1>
         <p>We have 2000+ happy customers from all ranges & we cater our services to IT, Financial, Medical, Educational & Self employed background </p>
 
        </div>
        </div>
       

        </div>
    
  )
}

export default Bank