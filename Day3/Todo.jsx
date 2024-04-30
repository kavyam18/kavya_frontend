import React from "react";
import { useReducer, useState } from "react";

const initialTodos =[];

const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, { ...action.data, complete: false }];
      case "EDIT":
        return state.map(todo =>
          todo.id === action.id ? { ...todo, ...action.data } : todo
        );
      case "DELETE":
        return state.filter(todo => todo.id !== action.id);
      default:
        return state;
    }
  };
  
  const Todo = () => {
    const [input, setInput] = useState({ id: "", title: "" });
    const [state, dispatch] = useReducer(reducer, initialTodos);
  
    const handleInputChange = (key, value) => {
      setInput(prevState => ({ ...prevState, [key]: value }));
    };
  
    const handleAddTodo = () => {
      const existingTodo = state.find(todo => todo.id === input.id);
      if (!existingTodo) {
        dispatch({ type: "ADD", data: input });
        setInput({ id: "", title: "" }); 
      } else {
        alert("Todo with the same ID already exists.");
      }
    };
    const handleEditTodo = (id) => {
      dispatch({ type: "EDIT", id, data: input });
      setInput({ id: "", title: "" }); 
    };
  
    const handleDeleteTodo = (id) => {
      dispatch({ type: "DELETE", id });
    };
  
    return (
      <div>
        <h1>{JSON.stringify(state)}</h1>
        <input
          type="text"
          value={input.id}
          onChange={(e) => handleInputChange("id", e.target.value)}
          placeholder="ID"
        />
        <input
          type="text"
          value={input.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
          placeholder="Title"
        />
        <button onClick={handleAddTodo}>ADD</button>
        <button onClick={() => handleEditTodo(input.id)}>EDIT</button>
        <button onClick={() => handleDeleteTodo(input.id)}>DELETE</button>
      </div>
    );
  };
  export default Todo
  