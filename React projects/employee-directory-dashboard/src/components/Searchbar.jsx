import React from 'react'

const Searchbar = ({search,setSearch}) => {
  return (
    <div>Searchbar
    <input
    value ={search}
    onChange={(e)=>setSearch(e.target.value) }
    placeholder='Search User...'
    ></input>
    </div>
  )
}

export default Searchbar