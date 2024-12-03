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
        console.log(error)        
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
        console.log(res, 'this response')
        return res.json()

    } catch (error) {
        console.log(error)
    }

}

export {
    index, show, create
}