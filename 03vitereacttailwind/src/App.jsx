import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"kuhali",
    age:21
  }
  let newArr=[1,2,3]

  return (
    <>
      <h1 className='bg-green-800 text-green-100 p-4 rounded-xl'>Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me"/>
      <Card username="Kuhali" />
    </>
  )
}

export default App
