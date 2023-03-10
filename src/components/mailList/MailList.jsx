import React from 'react'
import './mailList.scss';

const MailList = () => {
  return (
    <div className='mail'>
        <h1 className='mailTitle'>Save time , Save Money</h1>
        <span className="desc">Sign up and we'll send the best deals for you</span>
        <div className="inputMail">
            <input type="text" placeholder='Your Email?'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList