import React from 'react'
import "../styling/LocationCard.css"

function LocationCard(props) {
  return (
    <div className='card-container'>
        <h2 className='location'>{props.location}</h2>
        <h3 className='miles'>{props.miles} mi</h3>
        <br/>
        <p className='address'>{props.address}</p>
        <br/>
        <button className="join-gym">Join Gym</button>
    </div>
  )
}

export default LocationCard