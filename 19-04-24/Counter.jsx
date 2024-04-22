import React, { useState } from "react";

//Function based component creating state using Hooks(use state)
const Counter = () =>{
    const[count, setCount] = useState(0)
    return(
        <div>
         <h1>{count}</h1>
         <button onClick={()=> setCount(count+1)}>Incrementby1</button>
         <button onClick={()=> setCount(count+10)}>Incrementby10</button>
         <button onClick={()=> setCount(count-1)}>Decrementby10</button>
         <button onClick={()=> setCount(0)}>Reset</button>
        </div>
        
    )
}

export default Counter