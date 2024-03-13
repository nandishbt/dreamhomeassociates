import React from 'react'
import './Bank.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SBI from '../../assets/SBI.png'
import YES from '../../assets/YES.png'
import AXIS from '../../assets/AXIS.png'
import ICICI from '../../assets/ICICI.svg'



const Bank = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    

        <div className='Bank'>
        <Slider {...settings}>
        <div>
          <img src={SBI}/>
        </div>
        <div>
        <img src={YES}/>
        </div>
        <div>
        <img src={AXIS}/>
        </div>
        {/* <div>
        <img src={BOB}/>
        </div> */}
        <div>
        <img src={ICICI}/>
        </div>
        <div>
        <img src={SBI}/>
        </div>
      </Slider>

        </div>
    
  )
}

export default Bank