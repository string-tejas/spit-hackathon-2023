import { createContext, useContext, useState } from "react";
import { api } from "./queries";

const auth = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const logOut = async () => {
        await api.get("/auth/logout");
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <auth.Provider
            value={{
                user,
                setUser,
                logOut,
            }}
        >
            {children}
        </auth.Provider>
    );
};

export const useAuth = () => {
    return useContext(auth);
};
