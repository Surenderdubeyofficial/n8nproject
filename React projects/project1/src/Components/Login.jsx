import React, { useReducer } from 'react'
const intialstate ={
    isLoggedIn: false,
    username:""
}
const reducer = (state , action)=>{
   if(action.type==="LOGIN"){
    return {
        ...state,
        isLoggedIn:true,
        username: "Surender"
    };
   }
   if(action.type==="LOGOUT"){
    return {
        ...state,
        isLoggedIn:false,
        username:""
    }
   }
   return state
}
const Login = () => {
    const [state, dispatch] = useReducer(reducer , intialstate)
  return (
    <div>Login System 
    <h2>
    {state.isLoggedIn?`Welcone ${state.username}`:"Please Login"}
    </h2>
    <button onClick={()=>{
        dispatch({
            type:"LOGIN"
        })
    }}>LOGIN</button>
    
    <button onClick={()=>{
        dispatch({
            type:"LOGOUT"
        })
    }}>LOGOUT</button>

    </div>
  )
}

export default Login