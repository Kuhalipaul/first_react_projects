import { useState } from 'react'


function TodoItem({task}) {
  
  return (
   
      <li className="bg-aquamarine py-2 px-5 rounded-lg mt-2">{task}</li>
    
  )
}

export default TodoItem;
