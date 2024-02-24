import React from 'react'
import'./Banner1.css'
import banner_img from '../../../res/Layer 1.png'
import right_arrow from '../../../res/right-arrow_545682.png'
import layer_3 from '../../../res/Layer111111 1.png'

const Banner1 = () => {
  return (
    <div className='Banner1'>
        <img className='Banner1-bg'src={banner_img} alt="" />
        <div className="banner1-content">
            <div className="banner1-content-left">
                <h1>FST Beauty &<br/> Athetics</h1>
                <p>A Beauty salon Based on Mersea Island,Essex</p>
                <span className='read_more'>Read more <img src={right_arrow} alt="" /></span>
            </div>
            <div className="banner1-content-right">
                    <img src={layer_3} alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Banner1
