import React, { useEffect, useState } from 'react'
import UserList from '../components/UserList';
import Searchbar from '../components/Searchbar';

const Home = () => {
    const [users , setUsers] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search , setSearch] = useState("");
    useEffect(()=>{
        const response = async()=>{
            try {
                setLoading(true);
                const fetchusers = await fetch("https://dummyjson.com/users");
                const data = await fetchusers.json();
                setLoading(false);
                setUsers(data.users)
            } catch (error) {
                setError("Network Error")
            }
            finally{
                setLoading(false)
            }
        }
        response();
    },[])
    const filteredUsers =users.filter((user)=>{
       const fullname = `${user.firstName} ${user.lastName}`
      return  fullname.toLowerCase().includes(search.toLowerCase())
    })
  return (
    <div>
    <Searchbar search = {search} setSearch ={setSearch}/>
    Home
    {loading && <h2>Loading ...</h2>}
    {error && <p>{error}</p>}
    <UserList users = {filteredUsers}/>
    </div>
  )
}

export default Home