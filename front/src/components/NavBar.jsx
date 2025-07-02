import { NavLink } from "react-router";

export function NavBar(){
    return(
        <nav className="bg-red-600 p-5 flex gap-5">
            <NavLink className="nav-link" to="/">Add workout</NavLink>
        </nav>
    )
}
