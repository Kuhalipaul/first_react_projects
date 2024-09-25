import { useState } from 'react'
import TodoApp from './components/Todo/TodoApp'


function App() {
  const times=[1,2,3,4,5]
  return (
    <div>
      {/* <TodoApp/> */}
      {/* Dynamically render TodoApp four times using .map() */}
      {times.map((_, index) => (
                <TodoApp key={index} />
            ))}
    </div>
  )
}

export default App
