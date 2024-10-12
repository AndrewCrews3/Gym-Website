import React from 'react'
import LocationCard from './LocationCard'
import "../styling/LocationCard.css"

function FindLocation() {
  
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