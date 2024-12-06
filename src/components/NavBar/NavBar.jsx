import { Link } from "react-router-dom"

const NavBar = (props) => {
    const user = props.user
    return(
        <>
            {user ? (
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">  
                    <a className="mr-5 hover:text-gray-900">Welcome, {user.username}</a>
                    <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
                    <Link to="/routines" className="mr-5 hover:text-gray-900">Routines</Link>
                    <Link to="/routines/new" className="mr-5 hover:text-gray-900">New Routine</Link>
                    <Link to="" onClick={props.handleSignout} className="mr-5 hover:text-gray-900">Sign out</Link>
                </nav>
            ):(
                <nav className="md:ml-auto flex flex-wrap items-center text-xl justify-center">
                    
                    <Link to="/" className="mr-5 text-primary hover:text-secondary">Home</Link>
                    <Link to="signin" className="mr-5 text-primary hover:text-secondary">Sign in</Link>
                    <Link to="signup" className="mr-5 text-primary hover:text-secondary">Sign up</Link>
                    
                </nav>
            )

            }
            
        </>
    )
}
export default NavBar