import React from 'react'

const Todos = ({todos}) => {
  return (
    <>
    {todos.map((todo,index)=>{
        return(
            <div key={index}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed == true? "completed" : "Mark as completed"} </button>
            </div>
        )
    })}
    </>
  )
}

export default Todos