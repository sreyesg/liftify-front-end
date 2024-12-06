import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import * as routineService from "../../services/routineService"
import ExerciseForm from "../ExerciseForm/ExerciseForm"

const RoutineDetails = (props) => {
    const { routineId } = useParams()
    const [routine, setRoutine] = useState(null)
    
    useEffect(()=> {
        const fetchRoutine = async() => {
            const routineData = await routineService.show(routineId)
            setRoutine(routineData)
        }
        fetchRoutine()
    },[routineId])
    
    const handleAddExercise = async(exerciseFormData) => {
        const newExercise = await routineService.createExercise(routineId, exerciseFormData)
        setRoutine({...routine, exercises: [...routine.exercises, newExercise]})

    }

    if(!routine)return <main>Loading...</main>
    return(
        <section className="text-gray-600 font-body">
            <div className="container text-center px-5 py-24 mx-auto">
                <header className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{routine.title} | <span className="text-xl text-primary tracking-widest font-medium mb-1">{routine.category}</span></h1>
            
                    {routine.author._id === props.user._id && (
                        <>
                
                        <Link to={`/routines/${routineId}/edit`}>Edit</Link>
                        <button onClick={()=> props.handleDeleteRoutine(routineId)}>Delete</button>
                        </>
                    )
                    }
                </header>
                <div className="flex flex-wrap border-b-2">
                    {routine.exercises.map((exercise) => (
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-primary border-opacity-60" key={exercise._id}>
                            <h2>{exercise.title}</h2>
                            <p>{exercise.category}</p>
                            <ul>
                                <li>Sets: {exercise.sets}</li>
                                <li>Repetitions: {exercise.repetitions}</li>
                                <li>Weight: {exercise.weight}</li>
                            </ul>
                        </div>
                    ))}
                </div>
                
                {routine.author._id === props.user._id && (
                    <>
                        <div className="py-24">
                        <h2>Add Exercise</h2>
                        <ExerciseForm handleAddExercise= {handleAddExercise}/>  
                        </div>
                    </>
                )
                }


            </div>

        </section>
    )
}   
export default RoutineDetails