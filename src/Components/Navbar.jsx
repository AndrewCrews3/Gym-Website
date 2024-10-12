import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../styling/Navbar.css"

function Navbar() {

  const [dropDown, setDropDown] = useState(false)

    
  return (
    <>
    <nav>
      <Link className='title' to='/'>Brews Gym</Link>
      <div onClick={() => {
        setDropDown(!dropDown)
      }} className="menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={dropDown ? "open" : ''}>
        <li>
          <NavLink to='/About'>About Us</NavLink>
          </li>
        <li>
          <NavLink to='/Memberships'>Memberships</NavLink>
          </li>
        <li>
          <NavLink to='/Personal-Training'>Personal Training</NavLink>
          </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar