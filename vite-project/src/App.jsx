import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Demo from './Demo.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>CODE EATER </h1>
        <Demo/>
      </div>
     
    </>
  )
}

export default App
