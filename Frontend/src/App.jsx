import React, { useState } from 'react';
import CreateTodo from './Component/CreateTodo';
import Todos from './Component/Todos';

const App = () => {
  const [todos,setTodos]=useState([])

  fetch("http://localhost:3000/todos")
  .then(async(res)=>{
    const json=await res.json()
    setTodos(json.todos)
  })
  return (
    <>
      <CreateTodo />
      <Todos todos={todos} />
    </>
  );
}

export default App;
