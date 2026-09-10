import React from 'react'
import UserCard from './UserCard'

const UserList = ({users}) => {

  return (
    <div>UserList
    {

      users.map((user)=>{
        return <UserCard key={user.id} user = {user} />
      })
    }
    </div>
  )
}

export default UserList