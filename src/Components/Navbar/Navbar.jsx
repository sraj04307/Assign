import React from 'react';
import './Navbar.css';
import logo from '../../res/logo copy.png'
import call_icon from "../../res/Layer 7.png"
import social1 from '../../res/Layer 5 copy 2.png'
import social2 from '../../res/Layer 6 copy.png'
import social3 from '../../res/Rectangle 1 copy 6.png'

const Navbar = () => {
  return ( 
    <div className='Navbar'>
      <div className="Navbar-top">
            <div className="Navbar-top-left">
              <img src={call_icon} alt="" />
              <span>Call Now: 07500 838715</span>
            </div>
            <div className="Navbar-top-right">
              <img src={social1} alt="" />
              <img src={social2} alt="" />
              <img src={social3} alt="" />
            </div>
      </div>
      <div className="Navbar-bottom">
        
            <ul className="Navbar-bottom-left">
                <li>Home</li>
                <li>About</li>
                <li>Gallery</li>
            </ul>
            <div className="Navbar-bottom-mid">
                <img src={logo} alt="" />
            </div>
            <ul className="Navbar-bottom-right">
                <li>Price List</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
      </div>
    </div>
  )
}

export default Navbar
