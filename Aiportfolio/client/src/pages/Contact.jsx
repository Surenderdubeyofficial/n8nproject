import React, { useState } from 'react'
const Contact = () => {
  // const [name , setName] = useState("");
  // const [email , setEmail] = useState("");
  // const [subject , setSubject] = useState("")
  // const [message , setMessage]= useState("");
  const [formdata , setFormdata] = useState({
    name = "",
    email = "",
     subject  = "", 
        phone = "".
        address = "",
        message = "",
        textarea = ""

  })

  const handlechange = ((e)=>{
   return  ...formdata ,
    setFormdata({
       [e.target.name] : e.target.value
    })
  })
  const resetsubmit = (()=>{
     name = "",
    email = "",
     subject  = "", 
        phone = "".
        address = "",
        message = "",
        textarea = ""
  })

  const submitform = async(e) =>{
    e.preventDefault();
    console.log(
        name,
        email,
       

    )
  }
  
  return (
    <div>
    <h2>Contact Me</h2>
    <form  onSubmit={submitform}>
      <label>Name : </label>
      <input
       type='text'
       name='name'
       value={formdata.name}
        onChange={(e)=>{handlechange}
          
        />
      <label>Email : </label>
      <input type='email'
      name='email'
      value ={formdata.email}
      onChange={(e)=>{setEmail(e.target.value)
      } }></input>
      <label>Subject : </label>
      <input type='text' 
      value = "subject"
      value={formdata.subject}
      onChange={(e)=>setSubject(e.target.value)}></input>
      <label>Message : </label>
      <textarea 
      value = "message"
      value={message}
      onChange={(e)=>setMessage(e.target.value)}
      ></textarea> 
      <button>Submit</button>
    </form>
    </div>
  )
}

export default Contact