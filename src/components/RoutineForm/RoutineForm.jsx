import { useState } from "react";
const RoutineForm = (props) => {
    const initialState = {
        title: '',
        category: ''
    }
    const [formData, setFormData] = useState(initialState)
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        props.handleAddRoutine(formData)
    }


    const { title, category } = formData

    return (
        <main>
            <form onSubmit={handlesubmit}>
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