import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { faBed, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './header.scss'
import { useState } from 'react'
import { DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; 
import { format } from 'date-fns'

const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false)
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const handleOption =(name, operation) => {
        setOptions(prev=>{return{
            ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] -1,
        };
    });
};
  return (
    <div className='header'>
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
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
        { type !== "list" && 
        <> <h1 className="headerTitle">A Lifetime of Discounts? It's Genius</h1>
        <p className="headerDesc">Get Rewarded for your Travels, Get a instant 10% discount when you Trave with Waveyhigh Account</p>
        <button className='headButton'>sign in/Register</button>
        <div className="headSearch">
            <div className="headSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input type="text" placeholder='Where are you going?' className='headerSearchInput'/>
            </div>
            <div className="headSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span onClick={()=> setOpenDate(!openDate)} className='headerSearchText'> {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                {openDate &&<DateRange
                onChange={item => setDate([item.selection])}
                ranges={date}
                className="date"
                />}
            </div>
            <div className="headSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                {openOptions && <div className="options">
                    <div className="optionItem">
                        <span className='optionText'>Adult</span>
                        <div className="optionCounter">
                        <button disabled={options.adult <=1} className='optionCount' onClick={()=>handleOption("adult", "d")}>-</button>
                        <span className='optionCounterNumber'>{options.adult}</span>
                        <button className='optionCount' onClick={()=>handleOption("adult", "i")}>+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className='optionText'>Children</span>
                        <div className="optionCounter">
                        <button disabled={options.children <=0 }className='optionCount' onClick={()=>handleOption("children", "d")}>-</button>
                        <span className='optionCounterNumber'>{options.children}</span>
                        <button className='optionCount' onClick={()=>handleOption("children", "i")}>+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className='optionText'>Rooms</span>
                        <div className="optionCounter">
                        <button disabled={options.room <=1} className='optionCount' onClick={()=>handleOption("room", "d")}>-</button>
                        <span className='optionCounterNumber'>{options.room}</span>
                        <button className='optionCount' onClick={()=>handleOption("room", "i")}>+</button>
                        </div>
                    </div>         
                </div>}
            </div>
            <div className="headSearchItem">
                <button className='headButton'>Search</button>

            </div>
        </div></>}
        </div>
    </div>
  )
}

export default Header