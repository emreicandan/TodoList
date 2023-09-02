import React, { useContext, useState ,useEffect } from "react";
import axios from "axios";

const TodoContext = React.createContext();

export const TodoProvider = ({children}) =>{
    const [todo , setTodo] = useState([])

    const fetchtodo = async ()=>{
        const res = await axios.get("http://localhost:3000/todo")
        setTodo(res.data)
    }

    useEffect(()=>{
        fetchtodo();
    },[])

    const data = {todo , setTodo}
    return <TodoContext.Provider value={data}>
        {children}
    </TodoContext.Provider>
}

export const useTodos =()=> useContext(TodoContext);