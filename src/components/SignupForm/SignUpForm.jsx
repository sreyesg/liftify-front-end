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
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">

                <h1 className="text-gray-900 text-lg font-medium title-font mb-5">Sign up</h1>
                <form onSubmit={handleSubmit} >
                    <label htmlFor="username" className="leading-7 text-sm text-gray-600">Username:</label>
                    <input 
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        type="text" 
                        value={username}
                        name="username" 
                        id="username" 
                        onChange={handleChange}
                    />
                    <label className="leading-7 text-sm text-gray-600" htmlFor="password">Password:</label>
                    <input
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    type="password" 
                    name="hashedPassword"
                    value={hashedPassword}
                    id="password"
                    onChange={handleChange} 
                    />
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input 
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    type="password" 
                    name="confirmPassword"
                    value={confirmPassword}
                    id="confirmPassword" 
                    onChange={handleChange}
                    />
                    <label htmlFor="email">Email:</label>
                    <input 
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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