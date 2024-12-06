const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL


const create = async(routineFormData) => {
    try {
        const res = await fetch(`${BACKEND_URL}/routines`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(routineFormData)
        })
        return res.json()
        
    } catch (error) {
        throw new Error(error)     
    }

}
const index = async() => {
    try {
        const res = await fetch(`${BACKEND_URL}/routines`, {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        return res.json()
        
    } catch (error) {
        throw new Error(error)
    }
}

const show = async(routineId) => {
    try {
        const res = await fetch(`${BACKEND_URL}/routines/${routineId}`, {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        
        return res.json()

    } catch (error) {
        throw new Error(error)
    }

}


const createExercise = async(routineId, exerciseFormData) => {
    try {
        
        const res = await fetch(`${BACKEND_URL}/routines/${routineId}/exercises`,{
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(exerciseFormData)
        })
        return res.json()
        
    } catch (error) {
        throw new Error(error)
    }
}

const deleteRoutine = async(routineId) => {
    try {
        const res = await fetch(`${BACKEND_URL}/routines/${routineId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        return res.json()
    } catch (error) {
        throw new Error(error)
    }
}

const update = async(routineId, routineFormData) => {
    try {
        const res = await fetch(`${BACKEND_URL}/routines/${routineId}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(routineFormData)
        })
        return res.json()
        
    } catch (error) {
        throw new Error(error)
    }
}



export {
    index, show, create, createExercise, deleteRoutine, update
}