import { useContext } from "react";

import { myAxios } from "../utils/axiosConfig.js";
import { UserContext } from "../contexts/UserContext";

// TODO move
export function getUserContext(){
    const userContext = useContext(UserContext);
    return userContext;
}

export async function readUsers(){
    const res = await myAxios.get('/user').then((res) => res.data);
    return res;
}

// TODO implement
export async function deleteUser(id){
    const res = await myAxios.delete(`/user/${id}`).then((res) => res.data);
    return res;
}

// TODO implement
export async function updateUser(id, new_user){
    const res = await myAxios.update(`/user/${id}`, {...new_user}).then((res) => res.data);
    return res;
}
