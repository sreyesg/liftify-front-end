const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL

const signup = async(formData) => {
    try {
        
        const res = await fetch(`${BACKEND_URL}/users/signup`, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(formData)
        })
        
        const json = await res.json()
        
        if(json.error){
            throw new Error(json.error)
        }
        localStorage.setItem('token', json.token)
        return json
    } catch (error) {
        throw new Error(error)
    }
}
const signout = () => {
    localStorage.removeItem('token')
}
export default {signup, signout}