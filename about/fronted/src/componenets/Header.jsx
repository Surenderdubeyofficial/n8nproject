import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <nav className='navbar'>
        <Link to = {"/"}>Home</Link>
        <Link to = {"/About"}>About</Link>
        <Link to = {"/Contact"}>Contact</Link>
    </nav>
  )
}
