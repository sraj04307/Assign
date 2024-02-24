import React from 'react'
import banner3_bg from '../../../res/banner bg.png';
import './Banner3.css';
import { banner3_data } from '../../../Constant';

const Banner3 = () => {
  return (
    <div className='Banner3'>
        <div className='Banner3-bg'>
            <img src={banner3_bg} alt="" />
        </div>
        <div className='Banner3-content'>
            {banner3_data.map((item,inex)=>(
                <div className='banner3-card'>
                    <img src={item.b_img} alt="" />
                    <h2>{item.heaing}</h2>
                    <p>{item.b_ques}</p>
                    <span>{item.b_ans}</span>
                    <button>+</button>
                </div>

            ))}

        </div>
    </div>
  )
}

export default Banner3
