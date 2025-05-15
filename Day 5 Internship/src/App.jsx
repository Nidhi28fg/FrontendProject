import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Header from './component/Header'
import Recommend from './component/Recommend'
import Placement from './component/Placement'
import Certification from './component/Certification'
import Footer from './component/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login'

function App() {
 

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
    <Navbar/>
    < Header/>
    < Recommend/>
    < Placement />
    < Certification/>
    < Footer />
       </> }
        />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
