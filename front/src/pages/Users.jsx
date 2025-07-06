import { useState, useEffect } from "react";

import { User } from "../components/User";
import { readUsers } from "../services/userService";
import { Heading3, Para } from "../components/BaseComponents";

export function Users() {
    const exampleUser = {
        id: 'ID',
        username: 'USERNAME',
        email: 'EMAIL',
        role: 'ROLE',
    }
    const [users, setUsers] = useState(null);

    const getUsers = async () => await readUsers().then((data) => setUsers(data));

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <>
            <Heading3>Users</Heading3>

            <div className="flex flex-col flex-wrap gap-3">
                <User>{exampleUser}</User>
                {users &&
                    users.map((user, idx) => {
                        return (
                            <User key={idx}>{user}</User>
                        )
                    })
                }
            </div>
        </>
    );

}

