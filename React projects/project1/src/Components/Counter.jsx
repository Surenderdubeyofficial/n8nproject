import React, { useReducer } from 'react'

const Counter = () => {
  const reducer = (state , action) =>{
    if(action.type === "INCREMENT"){
      return state+1;
    }
    else if(action.type ==="DECREMENT"){
      return state-1;
    }
    else if(action.type === "RESET"){
      return state =0;
    }
  }
  const [count , dispatch ] = useReducer(reducer,0);
  return (
    <div>
        <button className="" onClick={()=>dispatch({
      type: "INCREMENT"
    })}>+ increase </button>
    <button onClick={  ()=>  dispatch({
      type: "DECREMENT"

    })}>DEC</button>
    <button onClick={  ()=>  dispatch({
      type: "RESET"

    })}>RESET</button>
    <h1>{count}</h1>
    </div>
  )
}

export default Counter