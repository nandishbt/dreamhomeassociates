import React from 'react'
import './Title.css'
import { Link } from 'react-router-dom'

const Title = ({subtitle,title,navigate}) => {


 
    
  return (
    <div className='titlepage'>
      <div className='titles'>
        <h6>{subtitle}</h6>
        <p>{title}</p>

      </div>
      <div className='view'>
        <Link to={navigate}>VIEW ALL</Link>
      </div>

    </div>
    
   
  )
}

export default Title