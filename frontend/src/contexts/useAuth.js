import { createContext, useContext, useEffect, useState } from "react";

const AuthContext =  createContext();

const AuthProvider = ({children}) => {
    const get_authenticated = async () => {
        
    }
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
