import React from 'react'
import './Banner7.css'
import { banner7_data } from '../../../Constant';
import coma from "../../../res/“.png"

const Banner7 = () => {
  return (
    <div className='Banner7'>
      <div className='Banner7-bg-txt'>
        <h1>Testimonial</h1>
      </div>
      <div className='Banner7-content'>
        <h1>What people say</h1>

        <div className="reiewcard">
            {banner7_data.map((item,index)=>(
                <div  className='review-item-container'>
                <p>{item.desc}</p>
                <div className='review-item-img-container'>
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                    <img src={coma} alt="" />
                </div>
                </div>
            ))}
        </div>
      </div>


    </div>
  )
}

export default Banner7;
