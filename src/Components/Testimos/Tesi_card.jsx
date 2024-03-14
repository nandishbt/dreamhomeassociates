import React from 'react'
import './Testimos.css'


const Tesi_card = ( {name,position,desc}) => {
  return (
   <div className='Tesi_card'>
    <h1>{name}</h1>
    <h2>{position}</h2>
    <p>{desc}</p>
    


   </div>
  )
}

export default Tesi_card