const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL

const signup = async(formData) => {
    try {
        const res = await fetch(`${BACKEND_URL}/users/signup`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        console.log(res,"this is res alone")
        const json = await res.json()
        
        if(json.error){
            throw new Error(json.error)
        }
        localStorage.setItem('token', json.token)
    } catch (error) {
        throw new Error(error)
    }
}
export default {signup}