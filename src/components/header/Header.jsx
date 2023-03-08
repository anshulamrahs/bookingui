import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './header.scss'

const Header = () => {
  return (
    <div className='header'>
        <div className="headerContainer">
        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>stay</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi for Hire</span>
            </div>
        </div>
        <h1 className="headerTitle">A Lifetime of Discounts? It's Genius</h1>
        <p className="headerDesc">Get Rewarded for your Travels, Get a instant 10% discount when you Trave with Waveyhigh Account</p>
        <button className='headButton'>sign in/Register</button>
        </div>
    </div>
  )
}

export default Header