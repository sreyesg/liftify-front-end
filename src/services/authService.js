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

const signin = async(formData) => {
    try {
        console.log('from ayaua')
        const res = await fetch(`${BACKEND_URL}/users/signin`, {
            method: 'POST',
            headers: { "Content-Type":"application/json" },
            body: JSON.stringify(formData)
        })
        const json = await res.json()
        if(json.error){
            throw new Error(json.error)
        }
        if(json.token){
            localStorage.setItem('token', json.token)
            const user = JSON.parse(atob(json.token.split('.')[1]))
            console.log(user)
            return user

        }
    } catch (error) {
        console.log(error)
        throw error
    }
}

const signout = () => {
    localStorage.removeItem('token')
}
export default {signup, signin, signout}