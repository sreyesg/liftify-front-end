import { useState } from "react"
import * as authService from '../../services/authService'
import { Link, useNavigate } from "react-router-dom"

const signinForm = () => {
    const initialState = {
        username: '',
        hashedPassword: ''
    }
    const navigate = useNavigate()
    const [message, setMessage] = useState([''])
    const [formData, setFormData] = useState(initialState)

    const updateMessage = (msg) => {
        setMessage(msg)
    }
    const handleChange = (e) => {
        updateMessage('')
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {

    }
    
    const {username, hashedPassword} = formData
    
    
    return (
        <main>
            <h1>Log In</h1>
            <p>{message}</p>
            <form action="">

                <div>
                    <label htmlFor="username">Username: </label>
                    <input 
                    type="text" 
                    name="username" 
                    value={username}
                    id="username"
                    onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="hashedPassword">Password: </label>
                    <input 
                    type="password" 
                    name="hashedPassword" 
                    value={hashedPassword}
                    id="hashedPassword"
                    onChange={handleChange} />
                </div>
                <button>Log in</button>
                <Link to="/">
                    <button>Cancel</button>
                </Link>
            </form>
        </main>
    )
}

export default signinForm