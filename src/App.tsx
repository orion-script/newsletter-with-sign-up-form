import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import './App.css'
import Home from "./components/Home"
import Success from "./components/Success"

function App() {

  return (
    <div className='bg-[#36384d] w-full md:h-screen md:pt-20'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
