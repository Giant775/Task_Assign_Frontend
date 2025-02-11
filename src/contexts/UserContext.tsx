import { createContext } from "react";
import { User } from "../types";


interface UserContextType {
    user: User | null;
    setUser: (user: User) => void;
    isLoading: boolean;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);


