import React, { useEffect, useState } from 'react';
import CreateTodo from './Component/CreateTodo';
import Todos from './Component/Todos';

const App = () => {
  const [todos,setTodos]=useState([])

  useEffect(()=>{

    fetch("http://localhost:3000/todos")
    .then(async(res)=>{
      const json=await res.json()
      setTodos(json.todos)
    })
  },[todos])
  return (
    <>
      <CreateTodo />
      <Todos todos={todos} />
    </>
  );
}

export default App;
