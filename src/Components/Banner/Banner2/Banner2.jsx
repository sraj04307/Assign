import React from 'react'
import './Banner2.css'
import B2_img from '../../../res/Layer 11.png'
import rightarrow from '../../../res/right-arrow_545682.png'

const Banner2 = () => {
  return (
    <div className='Banner2'>
      <span>About us</span>
      <div className='Banner2-content'>
        <div className="Banner2-content-left">
            <div className='img-container'>
                <img src={B2_img} alt="" />
            </div>
        </div>
        <div className="Banner2-content-right">
            <h1>Welcome to FST Beauty and Aesthetics.</h1>
            <span>
            I’m Tanya and I have been a qualified beautician for over 15 years. I am always looking to increase my skillset and offer more to my clients. I have 3 children and 4 dogs. As a working mother, I am very flexible with my opening hours and will always try to accommodate you as best as I can.
            </span>
            <div className='read-more-btn'>
                <span>read more</span>
                <img src={rightarrow} alt="" />
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner2
