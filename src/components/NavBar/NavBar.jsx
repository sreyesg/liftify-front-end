import { Link } from "react-router-dom"

const NavBar = (props) => {
    const user = props.user
    return(
        <>
            {user ? (
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">  
                    <a className="mr-5 hover:text-gray-900">Welcome, {user.username}</a>
                    <a className="mr-5 hover:text-gray-900"><Link to="/">Home</Link></a>
                    <a className="mr-5 hover:text-gray-900"><Link to="/routines">Routines</Link></a>
                    <a className="mr-5 hover:text-gray-900"><Link to="/routines/new">New Routine</Link></a>
                    <a className="mr-5 hover:text-gray-900"><Link to="" onClick={props.handleSignout}>Sign out</Link></a>
                </nav>
            ):(
                <nav className="md:ml-auto flex flex-wrap items-center text-xl justify-center">
                    
                    <a className="mr-5 text-primary hover:text-secondary"><Link to="/">Home</Link></a>
                    <a className="mr-5 text-primary hover:text-secondary"><Link to="signin">Sign in</Link></a>
                    <a className="mr-5 text-primary hover:text-secondary"><Link to="signup">Sign up</Link></a>
                    
                </nav>
            )

            }
            
        </>
    )
}
export default NavBar