import React, { useState } from 'react'

const App = () => {
  const[input,setInput] = useState()
  const [notes , setNotes] = useState()
  const [search , setSearch] = useState()
  const addnote = ()=>{
    if(input=="") return  input.trrim() 
      const newnote={
    id:Date.now()
    text:input
    }
    setNotes(input )
  }
  return (
    <div>Notes App
    <input></input>
    <buttton>Add</buttton>
    <input>Search Input</input>
    {
      <ul>
        notes.map((data)=>{
        <li>

          </li>
        })
      </ul>
    }
    </div>
  )
}

export default App