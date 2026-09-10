import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../App.css"
const Navbar = () => {
  return (
    <div className='Navsection'>
      <h2 > Surender Dubey</h2>
    <nav>
    <NavLink to = "/" >Home</NavLink>
    <NavLink to = "/about">About</NavLink>
    <NavLink to = "/projects">Projects</NavLink>
    <NavLink to = "/contact">Contact</NavLink>
    </nav>
    </div>

  )
}

export default Navbar