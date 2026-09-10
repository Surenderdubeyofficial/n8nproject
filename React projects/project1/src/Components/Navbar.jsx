import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import ThemeContext from "../context/ThemeContext";
const Navbar = () => {
  const{theme , toggleTheme} = useContext(ThemeContext);
  return (
    <div>
    <div>
      <button  onClick={toggleTheme} style={{
        backgroundColor:theme
      }}>Theme</button >
    </div>
       <Link to = "/">Home</Link>
       <Link to = '/about'>About</Link>
       <Link to = '/contact'>Contact</Link>
       <Link to = '/userlist'>Userlist</Link>
       <Link to = '/user/:id'>Userapp</Link>
       <Link to = '/counter'>Counter</Link>
       <Link to = '/login'>Login</Link>
       <Link to = '/memohook'>Memohok</Link>
       <Link to = '/parent'>Parent</Link>
       <Link to = '/child'></Link>
    </div>
  )
}

export default Navbar