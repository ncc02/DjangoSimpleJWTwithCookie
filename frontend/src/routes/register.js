import { VStack, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";


import {useAuth} from "../contexts/useAuth"
const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const {register_user} = useAuth();
    const handleRegister = () => {
        register_user(username, email, password, cPassword)
    }

    return (
        <VStack>
            <FormControl>
                <FormLabel>Username</FormLabel>
                <Input onChange={(e) => setUsername(e.target.value)} value={username} type='text' />
            </FormControl>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input onChange={(e) => setEmail(e.target.value)} value={email} type='text' />
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input onChange={(e) => setPassword(e.target.value)} value={password} type='password' />
            </FormControl>
            <FormControl>
                <FormLabel>Confirm Password</FormLabel>
                <Input onChange={(e) => setCPassword(e.target.value)} value={cPassword} type='password' />
            </FormControl>
            <Button onClick={handleRegister}> Register </Button>
        </VStack>
    )
}

export default Register;