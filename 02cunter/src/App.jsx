// import { useState } from 'react'
// import './App.css'

// function App() {
  
//   const [counter,setCounter] = useState(0);

//   const addValue=()=>{
//     if(counter<20){
//       setCounter(counter+1);
//       // setCounter((prevCounter)=>prevCounter+1)
//       setCounter(counter=>counter+1)
//       // setCounter(counter+1);
//       // setCounter(counter+1);
//       // setCounter(counter+1);
//       // setCounter(counter+1);
//     }else{
//     console.log("Counter cannot exceed 20");
//     }
//     console.log("clicked",counter);
//   }
//   const removeValue=()=>{
//     if(counter>0){
//       setCounter(counter-1);
//     }else{
//     console.log("Counter cannot below 20");
//     }
//     console.log("clicked",counter);
//   }
//   return (
//    <>
//    <h1>Add Count and Remove Count</h1>
//    <h2>Counter value: {counter}</h2>

//    <button onClick={addValue}>Add value {counter}</button>
//    <button onClick={removeValue}>remove value {counter}</button>
//    <p>footer:{counter}</p>
//    </>
//   )
// }

// export default App;


import React, { useState } from "react";
import './App.css'


function App(){
  const [counter,setCounter]=useState(0);

  const AddValue=()=>{
      setCounter(counter+1);
  }
  const RemoveValue=()=>{
    setCounter(counter-5);
  }
  
  return(
  <>
  <h2>Counter Value: {counter}</h2>
  <button onClick={AddValue}>+: {counter}</button>
  <button onClick={RemoveValue}>-: {counter}</button>
  </>
)
}
export default App