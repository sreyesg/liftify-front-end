import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import * as routineService from "../../services/routineService"

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
    
    if(!routine)return <main>Loading...</main>
    return(
        <main>
            <header>
                <h1>{routine.title}</h1>
            </header>
            <section>
                
                {routine.exercises.map((exercise) => (
                    <article key={exercise._id}>
                        <h3>{exercise.title}</h3>
                        <p>{exercise.category}</p>
                        <ul>
                            <li>Sets: {exercise.sets}</li>
                            <li>Repetitions: {exercise.repetitions}</li>
                            <li>Weight: {exercise.weight}</li>
                            
                        </ul>


                    </article>
                ))}
            </section>

        </main>
    )
}   
export default RoutineDetails