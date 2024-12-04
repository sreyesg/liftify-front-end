import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as routineService from "../../services/routineService"
const RoutineForm = (props) => {
    const initialState = {
        title: '',
        category: ''
    }
    const [formData, setFormData] = useState(initialState)
    const { routineId } = useParams()
    
    useEffect(() => {
        const fetchRoutine = async() => {
            
            const routineData = await routineService.show(routineId)
            setFormData(routineData)
        }
        if(routineId) fetchRoutine()
    },[routineId])

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        if(routineId){
            props.handleUpdateRoutine(routineId, formData)
        }else{
            props.handleAddRoutine(formData)
        }
    }


    const { title, category } = formData

    return (
        <main>
            <form onSubmit={handlesubmit}>
                <h1>{routineId ? "Edit Routine":"New Routine"}</h1>
                <label htmlFor="title">Routine Title:</label>
                <input 
                required
                type="text" 
                name="title" 
                value={title}
                id="title"
                onChange={handleChange} />
                <label htmlFor="Category">Routine Category:</label>
                <select 
                required
                name="category" 
                value={category}
                id="category"
                onChange={handleChange} 
                >
                <option value="upperBody">Upper Body</option>
                <option value="lowerBody">Lower Body</option>
                <option value="core">Core</option>
                
                </select>
                <button type="submit">SUBMIT</button>
            </form>
        </main>
    )
}

export default RoutineForm