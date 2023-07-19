import { Link, useSearchParams } from 'react-router-dom'

export const Navbar = () => {
    let [searchParams] = useSearchParams();
    let todosData = searchParams.get("todos")
    return (
        <nav>
            <Link to="/" className={todosData === null ? "active" : ""}>All</Link>
            <Link to="/?todos=active" className={todosData === "active" ? "active" : ""}>Active</Link>
            <Link to="/?todos=completed" className={todosData === "completed" ? "active" : ""}>Completed</Link>
        </nav>
    )
}
