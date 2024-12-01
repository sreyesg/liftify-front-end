import { Link } from "react-router-dom"

const NavBar = (props) => {
    const user = props.user
    return(
        <>
            {user ? (
                <nav>
                    <ul>
                        <li>Welcome, {user.username}</li>
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="">Sign Out</Link></li>
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