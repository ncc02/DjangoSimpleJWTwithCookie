import { VStack, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";

import {login} from "../endpoints/api";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        login(username, password)
    }

    return (
        <VStack>
            <FormControl>
                <FormLabel>Username</FormLabel>
                <Input onChange={(e) => setUsername(e.target.value)} value={username} type='text' />
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input onChange={(e) => setPassword(e.target.value)} value={password} type='password' />
            </FormControl>
            <Button onClick={handleLogin}> Login </Button>
        </VStack>
    )
}

export default Login;