import React, { useEffect } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { useTodos } from '../Context/TodoContext'

function Todo() {

  return (
    <div className='App'>
    <TodoForm/>
    <TodoList/>      
    </div>
  )
}

export default Todo
