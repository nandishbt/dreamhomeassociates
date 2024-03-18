import React from 'react'
import './Testimos.css'


const Tesi_card = ( {name,position,desc,stars}) => {
  return (
   <div className='Tesi_card'>
    <h1>{name}<h1 className='star'>{stars}</h1></h1>
    <h2>{position}</h2>
    <p>{desc}</p>
    


   </div>
  )
}

export default Tesi_card