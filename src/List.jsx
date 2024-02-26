import React from 'react'

export default function List(props) {
    console.log(props);
  return (
   <div>
     <ul className="list-group">
 {
    props.todo.length > 0 ? props.todo.map((value,index) =>
    <li className="list-group-item d-flex justify-content-between" aria-current="true" key={index}><div>{value}</div>
   </li>
    ) : <li className='list-group-item'>No Todos</li>
    
}
</ul>
</div>
  )
}
