import React from 'react'
import PropTypes from 'prop-types'
import "../styling/Activity.css"
import photo from '../assets/dumbell.jpg'

function Activity(props) {
  return (
    <div className={props.classdiv}>
        <div className="activity-image">
            <img className='activity-photo' src={props.img}></img>
        </div>
        <div className="activity-text">
            <h2 className='sport-header'>
                {props.sport}
            </h2>
            <p className='sport-paragraph'>
                {props.desc}
            </p>
        </div>
    </div>
  )
}


export default Activity