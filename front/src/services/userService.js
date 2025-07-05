import { useContext } from "react";

import { myAxios } from "../utils/axiosConfig.js";
import { UserContext } from "../contexts/UserContext";

export async function readUsers(){
    let res = await myAxios.get('/users').then((res) => res.data);
    return res;
}

export function getUserContext(){
    const userContext = useContext(UserContext);
    return userContext;
}
