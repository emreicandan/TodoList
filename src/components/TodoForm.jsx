import React, { useState ,useEffect } from 'react'
import { useTodos } from '../Context/TodoContext'
import axios from 'axios';

function TodoForm() {
    const [value , setValue] = useState("")
    const {todo , setTodo} = useTodos();

    const handleChange = (e) =>{
        setValue(e.target.value)
    }

    const handleSubmit =(e)=>{
        const response = axios.post("http://localhost:3000/todo" , {
            todo : todo
        })
        setValue("")
        setTodo([value])
    }
  return (
    <div>
        <div className="container ">
            <div className="row justify-content-center">
                <div className="col-sm-8 text-light border border-primary-subtle rounded mt-3 p-3">
                <form>
                <div className="mb-3">
                <label className="form-label">Add To-do</label>
                <input className="form-control" value={value} onChange={handleChange} placeholder='Type the to-do you want to add..'/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TodoForm
