import React from 'react'
import { useState } from 'react'

const TodoList = () => {

  const [todos , setTodos] = useState([]);

  const [inputValue , setInputValue] = useState("");

  const handleSubmit = e =>{
    e.preventDefault()

    if(inputValue.trim()){
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  }

  const handleChange = e =>{
    setInputValue(e.target.value)
  }

  return (
    <div>
      <h1>Todo List</h1>
       <form onSubmit={handleSubmit}>
       <input type="text" name="" id="" value={inputValue} placeholder='Add a new Todo' onChange={ handleChange}/>
       <button type='submit'>Add Todo</button>
       </form>

       <ul>
           {todos.map((todo, index)=>(
            <li>{todo}</li>
           ))}
       </ul>


      
    </div>
  )
}

export default TodoList
