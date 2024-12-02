import { Link } from "react-router-dom"

const NavBar = (props) => {
    const user = props.user
    return(
        <>
            {user ? (
                <nav>
                    <ul>
                        <li>Welcome, {user.username}</li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/routines">Routines</Link></li>
                        <li><Link to="" onClick={props.handleSignout}>SIGN OUT</Link></li>
                    </ul>
                </nav>
            ):(
                <nav>
                    <ul>
                        <li><Link to="signin">Sign in</Link></li>
                        <li><Link to="signup">Sign up</Link></li>
                    </ul>
                </nav>
            )

            }
            
        </>
    )
}
export default NavBar