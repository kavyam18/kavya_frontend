import { useReducer, useState } from "react";


const initialTodos = [];


const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state,{...action.data,complete:false}];
    case "EDIT":
      return 
    case "DELETE":
      return state.filter(item => item.id !==action.id);
      default:
        return state
  }
};
const Todos = ()=>{
  const[input, setInput] = useState({})
  const[state, disptach] = useReducer(reducer, initialTodos)

  return(
    <div>
      <h1>{JSON.stringify(state)}</h1>
      <input type="text" onChange={(e)=>{setInput({...input,id: e.target.value})}}/>
      <input type="text" onChange={(e)=>{setInput({...input,title: e.target.value})}}/>
      <button onClick={()=> disptach({type:"ADD", data:input})}>ADD</button>
      <button onClick={()=> disptach({type:"EDIT", data:input})}>EDIT</button>
      <button onClick={()=> disptach({type:"DELETE", data:input})}>DELETE</button>
    </div>
  )
}

export default Todos