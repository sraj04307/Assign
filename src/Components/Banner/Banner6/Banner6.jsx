import React from 'react'
import './Banner6.css'
import rightarrow from '../../../res/right-arrow_545682.png'
const Banner6 = () => {
  return (
    <div className='Banner6'>
        <div className='Banner6-left'>
            <h1>Open Hours</h1>
            <br/>
            <h2>Monday - Friday</h2>
            <h2>10:00am - 7:00pm</h2>
            <hr/>
            <h2>Saturday</h2>
            <h2>10:00am - 5:00pm</h2>
            <hr/>
            <h2>Sunday</h2>
            <h2>closed</h2>
        </div>
        <div className='Banner6-right'>
            <div className='Banner6-right-element'>
                <div>
                <label htmlFor="#name">Name :</label>
                <input id="name" type="Name" />
                </div>
                <div>
                <label htmlFor="#email">Email :</label>
                <input id="email" type="Email" />
                </div>
                <div>
                <label htmlFor="#phone">Phone :</label>
                <input id="phone" type="Phone" />
                </div>
                <div>
                <label htmlFor="#message">Message :</label>
                <input id="Message" type="Message" />
                </div>
                    <p>Submit <img src={rightarrow} alt="" /></p>
            </div>
        </div>
      
    </div>
  )
}

export default Banner6
