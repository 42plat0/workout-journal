import { NavLink } from "react-router";
import { MyNavLink } from "./ComplexComponents";
import { getUserContext } from "../services/userService";

export function NavBar() {
    const {user} = getUserContext();
    return (
        <nav className="bg-sky-600 p-5 flex gap-5 w-full align-end justify-between">
            <ul className="nav-links">
                <NavLink className="flex items-center space-x-3 rtl:space-x-reverse" to="/">
                    {/*<img src="null" className="h-8" alt="Logo" />*/}
                    <span className="nav-link-main__text">Workout Journal</span>
                </NavLink>
                <MyNavLink to="workout/create">Add workout</MyNavLink>
            </ul>
            <ul className="nav-links">
            {user && 
                <MyNavLink to="#">
                    <span className="font-bold text-yellow-300">{user.username}</span>
                </MyNavLink>}
                <MyNavLink to="auth/logout">Atsijungti</MyNavLink>
            </ul>
        </nav>
    );
}
