import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserCard from '../components/UserCard';
const UserDetails = () => {
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState("")
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        const response = async()=>{
            try {
                 setLoading(true)
            const fetchuser = await fetch(`https://dummyjson.com/users/${id}`)
            const data = await fetchuser.json();
            setLoading(false);
            setUser(data);
            } catch (error) {
                setError("")
            }
            finally{
                setLoading(false);
            }
        }
        response()
    },[id])
  return (
    <div>UserDetails
    {loading && <p>Loading ...</p>}
    {error && <p>{error}r</p>}
   <h2>{user.firstName} {user.lastName}</h2>
  <p>
    Address:{user.email}
  </p>
  <button onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  )
}

export default UserDetails