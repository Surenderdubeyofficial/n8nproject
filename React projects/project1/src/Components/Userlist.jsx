import React, { useEffect, useState } from 'react'
const Userlist = () => {
  const [user , setUser] = useState([]);
  const [loading , setLoading] = useState(true)
  const [error ,setError] = useState("")
  useEffect(()=>{
    const getuser = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const users =await response.json()
      setUser(users)
      } catch (error) {
        setError(error.message)
      }finally{
        setLoading(false)
      }
    }
    getuser();
  },[])
  return (
    <div>
      <h1>User Lists</h1>
      {loading && <p>loading...</p>}
      {error && <p>error</p>}

      {
        !error && !loading &&(
         <ul>
          {
            user.map((user)=>{
              return <li key={user.id}>{user.name}</li>
            })
          }
         </ul>
        )
      }
    </div>
    
  )
}

export default Userlist