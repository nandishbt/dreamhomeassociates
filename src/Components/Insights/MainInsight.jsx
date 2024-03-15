import React from 'react'
import Insites from './Insites'
import './Insites.css'

const MainInsight = () => {
  return (
    <div className='displayflex MainInsight'>
      <Insites Num={2405} Headline='NO OF CLIENTS'/>
      <Insites Num={1835} Headline='NO OF LOANS'/>
      <Insites Num={687} Headline='NO OF ESTATES'/>
      </div>
  )
}

export default MainInsight