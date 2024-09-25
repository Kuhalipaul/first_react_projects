import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


function MyButton(){
  return <button>My Custom Button</button>
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyButton/>
    <App />
  </StrictMode>,
)
