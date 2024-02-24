import React from 'react'
import './Banner4.css'
import banner4_bg_img from '../../../res/anner4_bgg.png'
import img_portrait from '../../../res/0uu.png';
import img_portrait1 from '../../../res/Layer 19.png';
import img_portrait2 from '../../../res/Layer 20.png';
import img_portrait3 from '../../../res/Layer 21.png';
import img_portrait4 from '../../../res/Layer 22.png';
import right_arrow from  '../../../res/right-arrow_545682.png'

const Banner4 = () => {
  return (
    <div className='Banner4'>
        <div className='banner4-bg'>
            <img src={banner4_bg_img} alt="" />
        </div>
        <div className='banner4-content'>
            <div className='banner4-content-left'>
                <img src={img_portrait} alt="" />
            </div>
            <div className='banner4-content-right'>
                <h1>Our gallery</h1>
                <div className='img-group'>
                    <img className='i-1' src={img_portrait1} alt="" />
                    <img className='i-2' src={img_portrait2} alt="" />
                    <img className='i-3' src={img_portrait3} alt="" />
                    <img className='i-4' src={img_portrait4} alt="" />
                </div>
            <p className='view-more'>View More<img src={right_arrow}/></p>
            </div>
        </div>
      
    </div>
  )
}

export default Banner4
