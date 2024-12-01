import { useState, useEffect } from 'react'
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const [user, setUser] = useState(false)

  return (
    <>
        
    <NavBar user={user}/>
     <h1>Landing page</h1>

    </>
  )
}

export default App
