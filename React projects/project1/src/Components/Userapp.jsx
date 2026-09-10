import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const Userapp = () => {
    const navigate = useNavigate() 
    const {id} = useParams();
    
  return (
    <div>Userapp
    <button onClick={()=>{
        navigate("/user/1")
    }} >Surender</button>
    <button onClick={()=>{
        navigate("/user/2")
    }}>Rahul</button>
    <h1>User ID:{id}</h1>
    </div>
  )
}

export default Userapp