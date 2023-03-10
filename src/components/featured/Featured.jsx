import React from 'react'
import './featured.scss'
import Dublin from '../assets/dublin.jpeg'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
           <img className="featuredImg" src={Dublin} alt="city" />
           <div className="featuredTitles">
            <h1>Dublin</h1>
            <h3>123 properties</h3>
           </div>
        </div>
        <div className="featuredItem">
           <img className="featuredImg" src={Dublin} alt="city" />
           <div className="featuredTitles">
            <h1>Dublin</h1>
            <h3>123 properties</h3>
           </div>
        </div>
        <div className="featuredItem">
           <img className="featuredImg" src={Dublin} alt="city" />
           <div className="featuredTitles">
            <h1>Dublin</h1>
            <h3>123 properties</h3>
           </div>
        </div>
        <div className="featuredItem">
           <img className="featuredImg" src={Dublin} alt="city" />
           <div className="featuredTitles">
            <h1>Dublin</h1>
            <h3>123 properties</h3>
           </div>
        </div>
        
    </div>
  )
}

export default Featured