import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const SignupForm = () => {
    const navigate = useNavigate()
    const [formData, setFormdata] = useState(false)
    
    const handleChange = () => {

    }

    const handleSubmit = () => {

    }
    
    
    
    return(
        <>
            <h1>Sign up</h1>
            <form onSubmit="">
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    value={username}
                    name="username" 
                    id="username" 
                    onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                name="password"
                value={password}
                id="password"
                onChange={handleChange} 
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input 
                type="password" 
                name="confirmPassword"
                value={confirmPassword}
                id="confirmPassword" 
                onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                name="email"
                value={email}
                id="email" 
                onChange={handleChange}
                />
                <div>
                <button disabled={isFormValid()}>Sign up</button>
                <Link to="/">
                    <button>Cancel</button>
                </Link>
                </div>
            </form>
        </>
    )    
}
