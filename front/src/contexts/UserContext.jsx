import { createContext, useState, useEffect } from "react";
import { myAxios } from "../utils/axiosConfig.js";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const fetchLoggedInUser = async() => {
            try {
                const data = await myAxios.get("/user/profile").then(res => res.data);
                setUser(data);
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        fetchLoggedInUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, loading }}>
            {children}
        </UserContext.Provider>
    );
}
