import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
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
            <li> <Link to='Services' smooth={true} offset={-260} duration={500} >Services</Link></li>
            <li> <Link to='about' smooth={true} offset={-800} duration={500} >About Us</Link></li>
            <li> <Link to='hero' smooth={true} offset={-250} duration={500} >Testimonals</Link></li>
            <li> <Link to='contact' smooth={true} offset={-250} duration={500} className='btn' >Contact</Link> </li>
        </ul>
        <img src={menu} className='menu-icon'  onClick={togglemenu}/>

    </nav>
  )
}

export default Navbar