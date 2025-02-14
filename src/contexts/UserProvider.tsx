import { useState, ReactNode, useEffect } from "react";
import { UserContext } from "./UserContext";
import { User } from "../types";
import { apiService } from "../services/api";

export const UserProvider = ({ children }: {children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setisLoading] = useState<boolean>(true);
    useEffect(() => {
        console.log("Provider reendered:")
        apiService.me().then((response) => {
            console.log("Response:", response);
            if (response.user) {
                setUser({email: response.user.email, grade: response.user.grade, id: response.user.id});
            }
        })
        .catch(() => setUser(null))
        .finally(() => setisLoading(false));
    }, [])
    return (
        <UserContext.Provider value={{user, setUser, isLoading}}>
            {children}
        </UserContext.Provider>
    )
}