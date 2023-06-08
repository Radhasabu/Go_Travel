import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css" ;
const Navbar = () => {

  const [isMobile,setIsMobile]=useState(false);
  return (
    <nav className='navbar'>
        <div className="logo"><h1 className="animated infinite heartBeat">INDIA </h1></div>
          <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={()=>setIsMobile(false)}>
            <Link to="/" className='home'><li>Home</li></Link>
            <Link to="/about" className='about'><li>About</li></Link>
            <Link to="/contact" className='contact'><li>Contact</li></Link>
            <Link to="/signup" className='signup'><li>Signup</li></Link>
          </ul>
          <button className='mobile-menu-icon' onClick={()=>{
            console.log("clicked");
            if(isMobile===false)
              setIsMobile(true);
            else
              setIsMobile(false);
          }}>{isMobile ? 
          (<i className='fas fa-times'></i>): (<i className='fas fa-bars'></i>) }
          </button>
        </nav>
  )
}

export default Navbar
