import { useState } from 'react'
import './App.css'
import Todos from './Components/Todos'
import AddTodos from './Components/AddTodos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Redux Toolkit</h1>

      <AddTodos/>
      <Todos/>

    </>
  )
}

export default App
