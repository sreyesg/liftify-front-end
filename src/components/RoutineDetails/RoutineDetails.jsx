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
    
    console.log(routineId)
    return(
        <main>
            Routine Details
        </main>
    )
}   
export default RoutineDetails