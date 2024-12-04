import { useState, useEffect } from 'react'
import NavBar from './components/NavBar/NavBar'
import { Routes, Route, useNavigate } from 'react-router-dom'
import SignupForm from './components/SignupForm/SignupForm'
import SigninForm from './components/signinForm/SigninForm'
import * as authService from './services/authService'
import RoutineList from './components/RoutineList/RoutineList'
import * as routineService from './services/routineService'
import RoutineDetails from './components/RoutineDetails/RoutineDetails'
import RoutineForm from './components/RoutineForm/RoutineForm'
import './App.css'

function App() {
  const [user, setUser] = useState(false)
  const [routines, setRoutines] = useState([])
  const navigate = useNavigate()

  useEffect(() => {

    const fetchAllRoutines = async() => {
      const routineData = await routineService.index()
      setRoutines(routineData)
      
    }
    if(user){fetchAllRoutines()}
  },[user])


  const handleAddRoutine = async(routineFormData) => {
    const newRoutine = await routineService.create(routineFormData)

    setRoutines([newRoutine, ...routines])
    
    navigate('/routines')
  }

  const handleDeleteRoutine = async(routineId) => {
    const deletedRoutine = await routineService.deleteRoutine(routineId)

    setRoutines(routines.filter((routine) => routine._id !== deletedRoutine._id))
    navigate('/routines')
  }
  const handleSignout = () => {
    authService.signout()
    setUser(null)
  }
  return (
    <>
        
      <NavBar user={user} handleSignout={handleSignout}/>
      <Routes>
      {user ? (
        <>
        <Route path="/" element={<h1>This is the Dashboard</h1>}></Route>
        <Route path="/routines" element={<RoutineList routines={routines}/>}></Route>
        <Route path="/routines/:routineId" element={<RoutineDetails handleDeleteRoutine={handleDeleteRoutine} />} />
        <Route path="/routines/new" element={<RoutineForm handleAddRoutine={handleAddRoutine} />} />
        </>
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
