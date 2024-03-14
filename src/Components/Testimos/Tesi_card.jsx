import React from 'react'
import './Testimos.css'


const Tesi_card = ( {img,name,desc}) => {
  return (
    <div class="testimonial-card">
    <img src={img} alt="Testimonial Person" class="testimonial-img"/>
    <h2 class="testimonial-name">{name}</h2>
    <p class="testimonial-description">{desc}</p>
  </div>
  )
}

export default Tesi_card