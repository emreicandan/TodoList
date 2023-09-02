import React, { useEffect, useState } from 'react'
import { useTodos } from '../Context/TodoContext'
import axios from 'axios';

function TodoList() {
    const [value , setValue] = useState("")
    const [ID , setID] = useState(1)
    const{todo , setTodo} = useTodos();

    const handleDelete = async ()=>{
      const response = await axios.delete(`http://localhost:3000/todo/${ID}`)
      return response
    }

    useEffect(()=>{
        handleDelete();
    })
    
    const handleChange=(e)=>{
        setValue(e.target.value)
    };
    const filtered = todo.filter((item)=>{
        return Object.keys(item).some((key)=>{
            return item[key].toString().toLowerCase().includes(value.toLowerCase());
        })
    })  
    console.log(ID)
  return (
    <div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="text-light col-sm-8 border border-primary-subtle rounded mt-3 p-3">
                <div className="mb-3 ">
                <label className="form-label">Filter To-do</label>
                <input className="form-control" value={value} onChange={handleChange}/>
         </div>
            <ul className='list-group p-3'>
                {
                    filtered.map((todos)=>{
        return <li key={todos.id} className='list-group-item'>{todos.todo} <button className='btn btn-outline-danger btn-sm' onClick={()=>{setID(todos.id) ; handleDelete;}}>Delete</button></li>
                    })
                }
            </ul> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default TodoList
