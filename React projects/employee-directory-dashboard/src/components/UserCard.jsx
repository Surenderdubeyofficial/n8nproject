import React, { useState } from 'react'
import UserDetails from '../pages/UserDetails'
import { useNavigate } from 'react-router-dom'
import UserList from './UserList'

const UserCard = ({user}) => {
const navigate = useNavigate()
  return (
    <div>
    <div><img src={user.image} alt='user.firstName'/></div>
    <div>
      <h2>{user.firstName}{user.lastName}</h2>
      <p>Email : {user.email}</p>
      <p>Company Name : {user.company.name}</p>
    </div>
    <button onClick={()=>{
     navigate(`/user/${user.id}`);
     
    }}>View Profile</button>
    </div>

  )
}

export default UserCard