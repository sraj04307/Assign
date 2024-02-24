import React from 'react'
import './Footer.css'
import logo from '../../res/logo copy.png'
import social1 from '../../res/Layer 5 copy 2.png'
import social2 from '../../res/Rectangle 1 copy 6.png'
import social3 from '../../res/Layer 6 copy.png'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="footer-container">
          <div className="footer-container-top">
            <img className='logo-container' src={logo} alt="" />
            <div className="email-container">
              <input type="email" placeholder='Enter your email adress...' />
              <button>Subscribe</button>
            </div>
            <div className="social-container">
              <p>Follow us</p>
              <div className="social-icon-group">
                <img src={social1} alt="" />
                <img src={social3} alt="" />
                <img src={social2} alt="" />
              </div>
            </div>
          </div>
          <div className="footer-container-mid">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Gallery</li>
              <li>price List</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-container-bottom">
            <p>©Copyright 2021 FST Beauty & Aesthetics. All Rights Reserved</p>
          </div>
        </div>
    </div>
  )
}

export default Footer
