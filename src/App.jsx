import { useState, useEffect } from 'react'
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'
import SignupForm from './components/SignupForm/SignupForm'
import './App.css'
import authService from './services/authService'

function App() {
  const [user, setUser] = useState(false)

  const handleSignout = () => {
    authService.signout()
    setUser(null)
  }
  return (
    <>
        
      <NavBar user={user} handleSignout={handleSignout}/>
      <Routes>
      {user ? (
        <Route path="/" element={<h1>This is the Dahsboard</h1>}></Route>
      ) : (
        <Route path="/" element={<h1>This is the Landing Page</h1>}></Route>
      )}
        <Route path='/signup' element={<SignupForm setUser={setUser}/>}></Route>
      </Routes>

    </>
  )
}

export default App
