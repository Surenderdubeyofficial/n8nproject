import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
export const Home = () => {
  return (
    <div style={{background : "green"}}>
        <p1>Welcome to Home Page </p1>

        <button className="btn">Contact</button>
    </div>
  )
}
