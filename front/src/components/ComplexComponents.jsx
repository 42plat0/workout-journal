import { NavLink } from "react-router"

export function MyNavLink({children, ...attributes}) {
    return (
        <li className="nav-link_wrapper">
            <NavLink className="nav-link" {...attributes}>{children}</NavLink>
        </li>
    )
}
