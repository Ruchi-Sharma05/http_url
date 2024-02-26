import React, { useState } from 'react'

export default function Input(props) {
const [todo,setTodos]=useState("");
const inputchange=(event)=>{
      setTodos(event.target.value);
  }

const submit =(event)=>{
    event.preventDefault()
    props.addTodo(todo); 

}

  return (
 
    <form className="row" onSubmit={submit}>
    <div className="col-sm-8">
      <input type="text" className="form-control" value={todo} onChange={inputchange} placeholder="Enter To-Do"/>
     </div>
    <div className="col-sm-1">
        <button className="btn btn-primary">Add</button>
    </div>
    </form>

  )
}
