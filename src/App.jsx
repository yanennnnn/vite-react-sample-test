import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Week2 from './pages/week2'
import Week3 from './pages/week3'
import Login from './pages/login'
import Todolist from './pages/todolist'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/week2" element={<Week2 />} />
        <Route path="/week3" element={<Week3 />}>
          <Route path="login" element={<Login />} />
          <Route path="todolist" element={<Todolist />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
