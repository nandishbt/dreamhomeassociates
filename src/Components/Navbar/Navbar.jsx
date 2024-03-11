import React, { useState } from 'react'
import './Navbar.css'

import { MdArrowDropDown } from "react-icons/md";
import { MdOutlineKeyboardBackspace } from "react-icons/md";


import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import menu from '../../assets/menu-icon.png'
// import logo from '../../assets/houselogo.png'

const Navbar = () => {
  
  const [Mobilemenu, setMobilemenu] = useState(false)

  const togglemenu = ()=>{
    Mobilemenu ? setMobilemenu(false) : setMobilemenu(true);
  }

  return (
    
    <nav className='container dark-nav'>   
        {/* <img src={logo} className='logo' /> */}
        <h1>DREAM HOME ASSOCIATES</h1>
        <ul className={Mobilemenu ?'':'hide-mobile-menu'}>
            <li> <Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
            <li> <Link to='Services'smooth={true} offset={-300} duration={500} >Services <MdArrowDropDown /></Link >
            
              <ul>
                <li><NavLink to='Loan'>Loan</NavLink> </li>
                <li><NavLink to='RealEstate'> Real Estate </NavLink> </li>
                
              </ul>
            
            
            </li>
            <li> <Link to='about' smooth={true} offset={-850} duration={500} className='mobile-scroll'>About Us</Link></li>
            <li> <Link to='hero' smooth={true} offset={-250} duration={500} >Testimonals</Link></li>
            <li> <Link to='contact' smooth={true} offset={-250} duration={500} className='btn' >Contact</Link> </li>
            <div className='backbutton' onClick={togglemenu}>
             <MdOutlineKeyboardBackspace />
            </div>
        </ul>
        <img src={menu} className='menu-icon'  onClick={togglemenu}/>

        

       

    </nav>
  )
}

export default Navbar