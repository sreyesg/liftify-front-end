import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import * as authService from "../../services/authService"

const signinForm = (props) => {
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
    const handleSubmit = async(e) => {
        try {
            
            e.preventDefault()
            const user = await authService.signin(formData)
            props.setUser(user)
            navigate('/')
            
        } catch (error) {
            updateMessage(error)
        }
    }
    
    const {username, hashedPassword} = formData
    
    
    return (
        <section className="text-gray-600 font-body">
            <div className="container px-5 py-24 justify-center flex flex-wrap items-center">
                <div className="bg-gray-100 rounded-lg p-8 flex flex-col w-1/2 mt-10 md:mt-0">
                    <h1 className="text-gray-900 text-lg font-medium title-font mb-5">Log In</h1>
                    
                    <form onSubmit={handleSubmit}>

                        <div>
                            <label htmlFor="username" className="form-label">Username: </label>
                            <input 
                            className="form-input"
                            type="text" 
                            name="username" 
                            value={username}
                            id="username"
                            onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="hashedPassword" className="form-label">Password: </label>
                            <input 
                            className="form-input"
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

                </div>

            </div>
        </section>
    )
}

export default signinForm