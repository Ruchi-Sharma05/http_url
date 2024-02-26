
import { useEffect, useState } from 'react';
import './App.css';
import Input from './Input';
import List from './List';

function App() {
  const [todo,setTodos]=useState(['last','first','new']);
  const addTodo =async(value)=> {
    // console.log(value);
    await fetch('https://testreact-ca936-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json',{
      method:"POST",
      body:JSON.stringify(value)

    });
    getTodos();
}
const getTodos = async()=> {
  // console.log(value);
  let response= await fetch('https://testreact-ca936-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json')
   let data = await response.json();
  //  console.log(data)
  let Formatedata =[];
  for(const key in data){
    Formatedata.push(data[key]);
  }
  setTodos([...Formatedata]);
 
  }
useEffect(()=>{
  getTodos();
},[todo.length]);
  

  return (
<>
    <div className="Container my-4">
     <Input addTodo={addTodo}/>
    
    </div>
    <List todo={todo}/>
    </>
 
  );
}

export default App;
