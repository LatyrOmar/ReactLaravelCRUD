import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ImmoIndex} from './pages/ImmoIndex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ImmoIndex/>
    </>
  )
}

export default App
