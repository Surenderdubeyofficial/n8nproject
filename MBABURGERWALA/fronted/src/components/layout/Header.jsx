import React from 'react'
import { IoFastFoodOutline } from "react-icons/io5";
import { FiShoppingCart, FiLogin } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated = false }) => {
  return (
    <nav>
      <div>
        <IoFastFoodOutline />
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>   {/* ✅ fixed */}
        <Link to="/about">About</Link>

        <Link to="/cart">
          <FiShoppingCart />
        </Link>

        <Link to={isAuthenticated ? "/me" : "/login"}>
          {isAuthenticated ? <FaUser /> : <FiLogin />}
        </Link>
      </div>
    </nav>
  )
}

export default Header;