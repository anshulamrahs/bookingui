import React from 'react'
import Hotel from '../assets/hotel.jpeg'
import Aprt from '../assets/aprt.jpeg'
import Villa from '../assets/villa.jpeg'
import Resort from '../assets/resort.jpeg'
import Bed from '../assets/bedroom.jpeg' 
import './propertyList.scss'

const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img className='pListImg' src={Hotel} alt="" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img className='pListImg' src={Villa} alt="" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img className='pListImg' src={Aprt} alt="" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img className='pListImg' src={Bed} alt="" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img className='pListImg' src={Resort} alt="" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>

    </div>
  )
}

export default PropertyList