import React from 'react'
import './searchItem.scss'
import Hotel from '../assets/hotel.jpeg'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src={Hotel} className="sImg" alt=""/>
        <div className="siDesc">
            <h1 className="siTitle">Town Street Apartments</h1>
            <span className='sDistance'>500m From Center</span>
            <span className='sTaxi'>Free Airport Taxi</span>
            <span className='sDesc'>Studio apartment with air Conditioning</span>
            <span className='sSub'>Entire Studio · 1 bathroom · 21m2 Full Bedroom </span>
            <span className='sCancel'>Free Cancellation</span>
            <span className='sCancelSub'>You can cancel Later , So Lock in This Great Price Today</span>
        </div>
        <div className="siDetails">
            <div className="ratingCont">
                <span className='sPri'>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="price">
                <span className='p'>₹ 8000</span>
                <span className='sub'>includes taxes and Fees</span>
                <button>see availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem