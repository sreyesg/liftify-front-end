import { Link } from "react-router-dom"

const RoutineList = (props) => {
    return(
        <main>
            <h1>Routine list</h1>
            {props.routines.map((routine) => (
                <Link key={routine._id} to={`/routines/${routine._id}`}>
                    <article>
                        <header>
                        <h2>{routine.title}</h2>
                        <p> posted on:{new Date(routine.createdAt).toLocaleDateString()}</p>
                        </header>
                        <p>Today's Workout Category: {routine.category}</p>
                    </article>
                    
                    
                    
                </Link>
            ))}
        </main>
    )
}

export default RoutineList