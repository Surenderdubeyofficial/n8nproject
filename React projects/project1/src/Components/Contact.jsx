import React, { useRef } from 'react'

const Contact = () => {
  const inputref = useRef(null);
  return (
    <div>Contact
    <input ref={inputref}></input>
    <br></br>
    <button onClick={()=>inputref.current.focus()}>Click</button>
    </div>]]
  )
}

export default Contact