import React from 'react'
import Aprt from '../assets/aprt.jpeg'
import Villa from '../assets/villa.jpeg'
import Resort from '../assets/resort.jpeg'
import Bed from '../assets/bedroom.jpeg'
import './bestStays.scss'

const BestStays = () => {
  return (
    <div className='bestStays'>
        <div className="fpItem">
        <img src={Bed} alt="" />
        <span className='pName'>The Meadows</span>
        <span className='pCity'>Chamba</span>
        <span className='pPrice'>Starting from 8K Onwards</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
    </div>
        <div className="fpItem">
        <img src={Resort} alt="" />
        <span className='pName'>The Meadows</span>
        <span className='pCity'>Chamba</span>
        <span className='pPrice'>Starting from 8K Onwards</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
    </div>
        <div className="fpItem">
        <img src={Villa} alt="" />
        <span className='pName'>The Meadows</span>
        <span className='pCity'>Chamba</span>
        <span className='pPrice'>Starting from 8K Onwards</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>   
    </div>
        <div className="fpItem">
        <img src={Aprt} alt="" />
        <span className='pName'>The Meadows</span>
        <span className='pCity'>Chamba</span>
        <span className='pPrice'>Starting from 8K Onwards</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>   
    </div>
    </div>
  )
}

export default BestStays