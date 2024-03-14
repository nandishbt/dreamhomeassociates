import React, { useEffect, useState } from 'react'
import './Navbar.css'

import { MdArrowDropDown } from "react-icons/md";
import { MdOutlineKeyboardBackspace } from "react-icons/md";


import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import menu from '../../assets/menu-icon.png'
// import logo from '../../assets/houselogo.png'

const Navbar = () => {
  const [sticky, setsticky] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      scrollY>100?setsticky(true):setsticky(false)
    })
  },[])
  
  const [Mobilemenu, setMobilemenu] = useState(false)

  const togglemenu = ()=>{
    Mobilemenu ? setMobilemenu(false) : setMobilemenu(true);
  }

  return (

    
    
    <nav className={`container ${sticky?'dark-nav':''}`}>   
        {/* <img src={logo} className='logo' /> */}
        <h1>DREAM HOME ASSOCIATES</h1>
        <ul className={Mobilemenu ?'':'hide-mobile-menu'}>
            <li> <NavLink to='/' smooth={true} offset={0} duration={500} >Home</NavLink></li>
            <li> <NavLink to='/Services'smooth={true} offset={-300} duration={500} >Services <MdArrowDropDown /></NavLink >
            
              <ul>
                <li><NavLink to='/Loan'>Loan</NavLink> </li>
                <li><NavLink to='/RealEstate'> Real Estate </NavLink> </li>
                
              </ul>
            
            
            </li>
            <li> <NavLink to='/About' smooth={true} offset={-850} duration={500} className='mobile-scroll'>About Us</NavLink></li>
            {/* <li> <NavLink to='/' smooth={true} offset={-250} duration={500} >Testimonals</NavLink></li> */}
            <li> <NavLink to='/contact' smooth={true} offset={-250} duration={500} >Contact</NavLink> </li>
            <div className='backbutton' onClick={togglemenu}>
             <MdOutlineKeyboardBackspace />
            </div>
        </ul>
        <img src={menu} className='menu-icon'  onClick={togglemenu}/>

        

       

    </nav>
  )
}

export default Navbar