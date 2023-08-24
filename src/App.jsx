import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Week2 from './pages/week2'
function App() {
  return (
    <>
      <Routes>
        <Route path={process.env.NODE_ENV === 'production' ? '/vite-react-sample-test/' : '/'} element={<Home />} /> 
        <Route path='week2' element={<Week2 />} />
      </Routes>
    </>
  )
}

export default App
