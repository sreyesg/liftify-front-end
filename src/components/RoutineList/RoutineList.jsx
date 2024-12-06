import { Link } from "react-router-dom"

const RoutineList = (props) => {
    return(
        <section className="text-gray-600 font-body">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb20">
            <h2 className="text-2xl text-primary tracking-widest font-medium mb-1">Liftify</h2>
            <h1 className="text-5xl font-medium mb-4 text-gray-900">Routines list</h1>
                </div>
                <div className="flex flex-wrap">

            {props.routines.map((routine) => (
                <Link key={routine._id} to={`/routines/${routine._id}`}>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                        <header>
                        
                        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{routine.title}</h2>
                        <p className="text-secondary">{routine.author.username}</p>
                        <p className="leading-relaxed text-base mb-4"> posted on:{new Date(routine.createdAt).toLocaleDateString()}</p>
                        </header>
                        <p className="leading-relaxed text-base mb-4">Workout Category: {routine.category}</p>
                        <button>Checkout</button>
                    </div>
                    
                    
                    
                </Link>
            ))}

                </div>
            </div>
        </section>
    )
}

export default RoutineList