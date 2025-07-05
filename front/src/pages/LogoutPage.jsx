import { useContext, useEffect } from "react";
import { Navigate } from "react-router";

import { UserContext } from "../contexts/UserContext.jsx";
import { myAxios } from "../utils/axiosConfig.js";

export function Logout() {
    const { setUser } = useContext(UserContext);

    useEffect(() => {
        const logoutUser = async () => {
            try {
                await myAxios.post("logout");
                setUser(null);
            } catch (error) {
            } finally {
            }
        }
        logoutUser();
    }, []);
    

    return <Navigate to="/auth/login"/>
}
