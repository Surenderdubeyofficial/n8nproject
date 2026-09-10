import React from 'react'
 const App = () => {
   const [input, setInput] = useState("");
    const[todos, setTodos] = useState([]);
    const [edit , setEdit] = useState(null);
    const Addtodos =()=>{
        if(input.trim() === "") return ;
        const newtodo ={
            id: Date.now(),
            text:input,
        }  
        setTodos([...todos , newtodo]);
        setInput("");
    }
    const deleteitem = (id)=>{
     const updateitem =   todos.filter((todo)=>{
         return todo.id !==id
        
       })
       setTodos(updateitem);
    }
    const edittodo = (id)=>{
       const updatetodos = todos.map((todo)=>{
           if(todo.id === id){
            return{
                ...todo,
                text:input,
            }
        }
        return todo;
       });
       setTodos(updatetodos);
       setEdit(null)
       setInput("");
    };
    return(
      <>
        <div>
            <h1>Todos App</h1>
            <input type="text"
                value={input}
            onChange={
                (e)=>{
                setInput(e.target.value)
            }}
            ></input>
            <button onClick={Addtodos}>Add</button>
            <ul>
                {todos.map((todo)=>{
                    return(
                        <li key={todo.id}>
                        {
                           edit === todo.id? (
                            <>
                                <input
                                value={input}
                                onChange={(e)=>setInput(e.target.value)}
                                >
                                </input>
                                <button
                                onClick={()=>edittodo(todo.id)}
                                >Save</button>
                            </>
                           ):(
                            <>
                                {todo.text}
                                <button
                                onClick={()=>{
                                    setEdit(todo.id);
                                    setInput(todo.text)
                                }}
                                >Edit</button>
                            </>
                           )
                        }
                        <button onClick={()=>deleteitem(todo.id)}>Delete</button>
                        </li>
                    )
                    
                })
                }
            </ul>
        </div>
      </>
    )
}

export default App;
