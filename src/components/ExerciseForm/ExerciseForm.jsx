import { useState, useEffect } from "react";
import * as routineService from '../../services/routineService'

const ExerciseForm = (props) => {
    const initialState = {
        title: '', 
        category: '',
        sets: 0,
        repetitions: 0,
        weight: 0
    }
    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleAddExercise(formData)
        setFormData(initialState)
    }



    const { title, category, sets, repetitions, weight } = formData
    return (
        <form onSubmit={handleSubmit}>
                <label htmlFor="title">Exercise Title:</label>
                <input 
                required
                type="text" 
                name="title" 
                value={title}
                id="title"
                onChange={handleChange} />
                <label htmlFor="Category">Exercise Category:</label>
                <select 
                name="category" 
                value={category}
                id="category"
                onChange={handleChange} 
                >
                <option value="upperBody">Upper Body</option>
                <option value="lowerBody">Lower Body</option>
                <option value="core">Core</option>
                
                </select>
                <label htmlFor="sets">Sets: </label>
                <input 
                type="number" 
                name="sets" 
                value={sets}
                id="sets"
                onChange={handleChange} />
                <label htmlFor="repetitions">Repetitions:</label>
                <input 
                type="number" 
                name="repetitions" 
                value={repetitions}
                id="repetitions"
                onChange={handleChange} />
                <label htmlFor="weight">Weight: </label>
                <input 
                type="number" 
                name="weight" 
                value={weight}
                id="weight"
                onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
    )
}

export default ExerciseForm