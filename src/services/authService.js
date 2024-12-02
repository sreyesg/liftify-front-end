const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL
console.log(BACKEND_URL, "backend")
const signup = async(formData) => {
    try {
        console.log(formData, 'Form Data')
        const res = await fetch(`${BACKEND_URL}/users/signup`, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(formData)
        })
        console.log(res,"this is res alone")
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
export default {signup}