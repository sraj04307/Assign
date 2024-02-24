import React from 'react'
import './Banner8.css'
import banner8data from '../../../../src/Constant.js'
const Banner8 = () => {
  return (
    <div className='Banner8'>
      {banner8data.map((item,index)=>(
        <img src={item.imgs} key={index} alt="" />
      ))}
    </div>
  )
}

export default Banner8
