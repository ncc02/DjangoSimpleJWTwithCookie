import { createContext, useContext, useEffect, useState } from "react";
import { is_authenticated } from "../endpoints/api";
import {login} from "../endpoints/api";
import { useNavigate } from "react-router-dom";
import { register } from "../endpoints/api";
const AuthContext =  createContext();

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const nav = useNavigate()
    const get_authenticated = async () => {
        try{
            const success = await is_authenticated();
            setIsAuthenticated(success);
        } 
        catch{
            setIsAuthenticated(false);
        }finally{
            setLoading(false);
        }
    }

    const login_user = async(username, password) =>{
        const success = await login(username, password)
        if (success){
            setIsAuthenticated(true)
            nav('/')
        }else{
            alert("Username or password is incorrect!")
        }
    }

    const register_user = async(username, email, password, cPassword) =>{
        if (password === cPassword){
            try{
                await register(username, email, password)
                alert("Successfully registered")
                nav('/login')
            }
            catch{
                alert("Failed to register user")
            } 

        }else{
            alert("Passwords do not match")
        }

    }
    useEffect(() => {
        get_authenticated();
    }, [window.location.pathname])
    return (
        <AuthContext.Provider value={{isAuthenticated, loading, login_user, register_user}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
