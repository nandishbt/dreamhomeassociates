import React from 'react'
import Insites from './Insites'
import './Insites.css'

const MainInsight = () => {
  return (
    <div className='displayflex'>
      <Insites Num={6854} Headline='NO OF CLIENTS'/>
      <Insites Num={4569} Headline='NO OF LOANS'/>
      <Insites Num={2564} Headline='NO OF ESTATES'/>
      </div>
  )
}

export default MainInsight