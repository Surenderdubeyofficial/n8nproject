import React, { useCallback, useState } from 'react'
import Child from './Child';
const Parent = () => {
    const[count , setCount] = useState(0);
    const add =useCallback(()=>{
        console.log("Function called");
        setCount(prev => prev + 1);
    },[])
  return (
    <div>
    <h1>Parent Count : {count}</h1>
    <button onClick={()=>{
        setCount(prev=>prev+1)
    }}>Increase Parent</button>


    <Child add = {add}  count  = {count}/>
    </div>
  )
}

export default Parent