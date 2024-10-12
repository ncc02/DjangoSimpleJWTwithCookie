import {Heading} from "@chakra-ui/react"
import { useAuth } from "../contexts/useAuth"
import { useNavigate } from "react-router-dom";
const PrivateRouter = ({children}) => {
    const {isAuthenticated, loading} = useAuth();
    const nav = useNavigate()
    if (loading){
        return <Heading> Loading...</Heading>
    }
    if (isAuthenticated){
        console.log("Authenticated")
        return children
    }else{
        nav('/login')
    }
}
export default PrivateRouter