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
        <section className="text-gray-600 font-body">
            <div className="container px-5 py-24 justify-center flex flex-wrap items-center">
                <div className="bg-gray-100 rounded-lg p-8 flex flex-col w-1/2 mt-10 md:mt-0">

                <h1 className="text-[#1e1e2e] text-[2rem] font-medium title-font mb-5">Sign up</h1>
                <form onSubmit={handleSubmit} >
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input 
                        className="form-input"
                        type="text" 
                        value={username}
                        name="username" 
                        id="username" 
                        onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="password">Password:</label>
                    <input
                    className="form-input"
                    type="password" 
                    name="hashedPassword"
                    value={hashedPassword}
                    id="password"
                    onChange={handleChange} 
                    />
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                    <input 
                    className="form-input"
                    type="password" 
                    name="confirmPassword"
                    value={confirmPassword}
                    id="confirmPassword" 
                    onChange={handleChange}
                    />
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input 
                    className="form-input"
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

                </div>

            </div>
        </section>
    )    
}

export default SignupForm