import React from 'react'
import './Banner5.css'
import card_bg from '../../../res/Layer 25 copy.png';
import gift_img from '../../../res/Layer 24.png'
import fbicon from '../../../res/fbicon.png'
import insicon from '../../../res/instaicon.png'

const Banner5 = () => {
  return (
    <div className='Banner5'>
        <div className="bg-img">
            <img src={card_bg} alt="" />
        </div>
        <div className="bg-content">
            <div className="inner-content">
                <h1>Special Offers</h1>
                <p>Keep an eye out on FST Beauty & Aesthetic social media pages for exclusive special offers.</p>
                <img src={gift_img} alt="" />

                <div className="Banner5-socail-icons">
                    <div className="social-icon1">
                        <img src={fbicon} alt="" />
                        <p>Faceook</p>
                    </div>
                    <div className="social-icon2">
                        <img src={insicon} alt="" />
                        <p>Instagram</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
} 

export default Banner5
