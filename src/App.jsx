import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { TodoProvider } from './Context/TodoContext'
import Todo from './components/Todo'

function App() {
  return (
    <TodoProvider>
      <Todo/>
    </TodoProvider>
  )
}

export default App
