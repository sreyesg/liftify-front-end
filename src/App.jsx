import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'
import SignupForm from './components/SignupForm/SignupForm'
import SigninForm from './components/signinForm/SigninForm'
import * as authService from './services/authService'
import './App.css'

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
        <Route path="/" element={<h1>This is the Dashboard</h1>}></Route>
      ) : (
        <Route path="/" element={<h1>This is the Landing Page</h1>}></Route>
      )}
        <Route path='/signup' element={<SignupForm setUser={setUser}/>}></Route>
        <Route path='/signin' element={<SigninForm setUser={setUser}/>}></Route>
      </Routes>

    </>
  )
}

export default App
