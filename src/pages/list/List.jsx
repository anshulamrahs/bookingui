import { format } from 'date-fns'
import React from 'react'
import { useState } from 'react'
import { DateRange } from 'react-date-range'
import { useLocation} from 'react-router-dom'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import SearchItem from '../../components/searchItem/SearchItem'
import './list.scss'

const List = () => {

    const location = useLocation()
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [openDate, setOpenDate] = useState(false)
    const [options, setOptions] = useState(location.state.options)

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text"/>
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={()=> setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
               )}`}</span>
               { openDate && <DateRange onChange={item=>setDate([item.selection])}
                minDate={new Date()} ranges={date}
                />}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOpenText">Min Price
                <small>Per Night</small>
                </span>
                <input className='lsOptionInput' type="number"/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOpenText">Max Price
                <small>Per Night</small>
                </span>
                <input className='lsOptionInput' type="number"/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOpenText">Adult
                </span>
                <input min={1}className='lsOptionInput' type="number" placeholder={options.adult}/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOpenText">Children
                </span>
                <input min={0} className='lsOptionInput' type="number" placeholder={options.children} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOpenText">Rooms
                </span>
                <input min={1} className='lsOptionInput' type="number" placeholder={options.room} />
              </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List