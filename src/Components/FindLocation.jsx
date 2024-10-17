import React, { useState } from 'react'
import LocationCard from './LocationCard'
import "../styling/LocationCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function FindLocation() {

  const [value,setValue] = useState()

  const handleChange = (e) => {
    setValue(e.target.value);
    

  }
  
  return (
    <div className='background' style={{
        width: '100vw',
        height: 'fit-content',
        position: 'relative',
        flexDirection: 'column'
    }}>
        <div className="location-text">
          <h2 className='location-header'>Find Gym Locations Near You!</h2>
          <p className='location-paragraph'>"Explore over 100 locations to find the one that perfectly suits you and your needs."</p>
          <div className='input-container'>
          <input onChange={handleChange} className='input-search' type="text" placeholder='Search Location...'/>
          <FontAwesomeIcon className='fa-magnify' icon={faMagnifyingGlass} />
        </div>
        </div>
        <div className="cards">
          <LocationCard location = 'Brick, NJ' miles = {5} address = '123 Main Street, New Jersey'/>
          <LocationCard location = 'Toms River, NJ' miles = {4} address = '123 Main Street, New Jersey'/>
          <LocationCard location = 'Lakewood, NJ' miles = {3} address = '123 Main Street, New Jersey'/>
        </div>

    </div>
  )
}

export default FindLocation