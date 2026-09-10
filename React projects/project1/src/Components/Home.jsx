import React from 'react'
import { useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard'
import { useContext } from 'react';
import ThemeContext from "../context/ThemeContext";
const Home = () => {
    const navigate = useNavigate()
    const { theme } = useContext(ThemeContext);
  return (
    <div style={{
      backgroundColor:theme
    }}>Home
     <button onClick={
       () => navigate("/dashboard")
     }>Go to Dashboard</button>
     </div>
    
  )           
}

export default Home
