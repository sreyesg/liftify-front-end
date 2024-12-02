import { useState, useEffect } from 'react'
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'
import SignupForm from './components/SignupForm/SignupForm'
import './App.css'

function App() {
  const [user, setUser] = useState(false)

  return (
    <>
        
      <NavBar user={user}/>
      <Routes>

        <Route path='/signup' element={<SignupForm setUser={setUser}/>}></Route>
      </Routes>

    </>
  )
}

export default App
