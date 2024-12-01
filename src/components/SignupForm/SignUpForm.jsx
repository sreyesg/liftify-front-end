import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const initialUser = {
    username: '',
    password: '',
    confirmPassword: '',
    email: ''
}
const SignupForm = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialUser)
    
    const handleChange = (event) => {
        setFormData({...formData,[event.target.name]: event.target.value})
    }

    const handleSubmit = () => {

    }
    
    const {username, password, confirmPassword, email} = formData
    
    const isFormInvalid = () => {
        return !(username && password && password === confirmPassword && email )
    }
    return(
        <>
            <h1>Sign up</h1>
            <form >
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    value={username}
                    name="username" 
                    id="username" 
                    onChange={handleChange}
                />
                <label htmlFor="password">Password:</label>
                <input 
                type="password" 
                name="password"
                value={password}
                id="password"
                onChange={handleChange} 
                />
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input 
                type="password" 
                name="confirmPassword"
                value={confirmPassword}
                id="confirmPassword" 
                onChange={handleChange}
                />
                <label htmlFor="email">Email:</label>
                <input 
                type="email" 
                name="email"
                value={email}
                id="email" 
                onChange={handleChange}
                />
                <div>
                <button disabled={isFormInvalid()}>Sign up</button>
                <Link to="/">
                    <button>Cancel</button>
                </Link>
                </div>
            </form>
        </>
    )    
}

export default SignupForm