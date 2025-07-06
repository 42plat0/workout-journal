import { useState } from "react";
import { NavLink } from "react-router"
import { Button } from "./BaseComponents";

export function MyNavLink({ children, ...attributes }) {
    return (
        <li className="nav-link_wrapper">
            <NavLink className="nav-link" {...attributes}>{children}</NavLink>
        </li>
    )
}

export function Dropdown({ children, label = "Dropdown" }) {
    const [open, setOpen] = useState(false);

    return (
        <div >
            <a className="nav-link cursor-pointer" onMouseOver={() => setOpen(!open)}>
                {label}
                <span className="ml-2">&#9662;</span>
            </a>

            {open && (
                <div className="absolute mt-2 px-3 pb-3 bg-gray-300 border border-gray-200 rounded-sm shadow-lg z-10">
                    <ul className="py-1">{children}</ul>
                </div>
            )}
        </div>
    );
}

