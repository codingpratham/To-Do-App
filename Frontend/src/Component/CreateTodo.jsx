import React, { useState } from 'react'

const CreateTodo = () => {
    const [todo,setTodo]=useState([])
  return (
   <>
   <input type='text' placeholder='title' value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
   <br />
   <input type="text" placeholder='description' value={todo} onChange={(e)=>{setTodo(e.target.value)}} />
   <br />
   <button>Add a todo</button>
   </>
  )
}

export default CreateTodo