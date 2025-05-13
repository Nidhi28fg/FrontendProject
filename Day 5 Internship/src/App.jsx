import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Header from './component/Header'
import Recommend from './component/Recommend'
import Placement from './component/Placement'
import Certification from './component/Certification'
import Footer from './component/Footer'

function App() {
 

  return (
    <>
    <Navbar/>
    < Header/>
    < Recommend/>
    < Placement />
    < Certification/>
    < Footer />
    </>
  )
}

export default App
