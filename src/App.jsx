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
import LandingPage from './components/Landing'
// import './App.css'

function App() {
  const initialState = localStorage.getItem('token') ? JSON.parse(atob(localStorage.getItem('token').split('.')[1])):null
  const [user, setUser] = useState(initialState)
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

  const handleUpdateRoutine = async(routineId, routineFormData) => {
    
    const updatedRoutine = await routineService.update(routineId, routineFormData)
    setRoutines(routines.map((routine) => (routineId === routine._id ? updatedRoutine: routine)))
    navigate(`/routines/${routineId}`)
  }
  const handleSignout = () => {
    authService.signout()
    setUser(null)
  }
  return (
    <>
      <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center border">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="ml-3 text-4xl text-primary">Liftify</span>
    </a> 
      <NavBar user={user} handleSignout={handleSignout}/>
      </div>  

      </header>
      
      <Routes>
      {user ? (
        <>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/routines" element={<RoutineList routines={routines}/>}></Route>
        <Route path="/routines/:routineId" element={<RoutineDetails handleDeleteRoutine={handleDeleteRoutine} />} />
        <Route path="/routines/new" element={<RoutineForm handleAddRoutine={handleAddRoutine} />} />
        <Route path="/routines/:routineId/edit" element={<RoutineForm handleUpdateRoutine={handleUpdateRoutine}/>} />
        </>
      ) : (
        <Route path="/" element={<LandingPage />}></Route>
      )}
        <Route path='/signup' element={<SignupForm setUser={setUser}/>}></Route>
        <Route path='/signin' element={<SigninForm setUser={setUser}/>}></Route>
      </Routes>

    </>
  )
}

export default App
