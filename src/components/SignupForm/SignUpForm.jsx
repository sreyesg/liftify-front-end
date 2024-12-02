import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import * as authService from "../../services/authService"


const SignupForm = (props) => {

    const initialState = {
        username: '',
        hashedPassword: '',
        confirmPassword: '',
        email: ''
    }

    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialState)
    const [message, setMessage] = useState([''])
    
    const updateMessage = (msg) => {
        setMessage(msg)
    }
    const handleChange = (event) => {
        setFormData({...formData,[event.target.name]: event.target.value})
    }

    const handleSubmit = async(e) => {
        try {
            
            e.preventDefault()
            const newUserResponse = await authService.signup(formData)
            props.setUser(newUserResponse.user)
            navigate('/')
        } catch (error) {
            updateMessage(error.message)
        }


    }
    
    const {username, hashedPassword, confirmPassword, email} = formData
    
    const isFormInvalid = () => {
        return !(username && hashedPassword && hashedPassword === confirmPassword && email )
    }
    return(
        <>
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit} >
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
                name="hashedPassword"
                value={hashedPassword}
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