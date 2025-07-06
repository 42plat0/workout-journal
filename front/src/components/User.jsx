import { Button, Para } from "./BaseComponents";
import { deleteUser } from "../services/userService";
import { useNavigate } from "react-router";

const deleteUserHandler = (id) => {
    // TODO implement in backend
    deleteUser(id);

    // TODO Hack for time being
    setTimeout(() => {
        window.location.reload();
    }, 500)
}

export function User({ children }) {
    const { id, username, email, role } = children;
    const nav = useNavigate();
    
    return (
        <div className="flex gap-5 border border-black items-center px-3">
            <Para className="w-5">{id}</Para>
            <Para className="w-30">{username}</Para>
            <Para className="w-50">{email}</Para>
            <Para className="w-20">{role}</Para>
            { id !== 'ID' &&
                <div className="flex gap-3">
                    <Button onClick={() => nav(`/users/edit/${id}`)}>Edit</Button> 
                    <Button onClick={() => deleteUserHandler(id)}>Delete</Button> 
                </div>
            }
        </div>
    )
}


