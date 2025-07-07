import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './component/Sidebar'
import Toggledark from './component/Toggledark'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar className=""/>
      <Toggledark/>
    </>
  )
}

export default App
