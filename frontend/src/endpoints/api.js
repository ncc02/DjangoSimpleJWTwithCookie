import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/';
const LOGIN_URL = `${BASE_URL}token/`;
const LOGOUT_URL = `${BASE_URL}logout/`;
const REGISTER_URL = `${BASE_URL}register/`;
const NOTES_URL = `${BASE_URL}notes/`;
const REFRESH_URL = `${BASE_URL}token/refresh/`;
const AUTH_URL = `${BASE_URL}authenticated/`;

export const login = async (username, password) => {
    const response = await axios.post(LOGIN_URL,
        { username, password },
        { withCredentials: true }
    );
    console.log("Response:", response);
    return response.data.success;
};

export const refresh_token = async() => {
    try {
        await axios.post(REFRESH_URL,
            {},
            { withCredentials: true }
        )
        return true;
    } catch (error) {
        return false;
    }
}

export const get_notes = async () => {
    try {
        const response = await axios.get(NOTES_URL, 
            { withCredentials: true }
        ); 
        return response.data;
    } catch (error) {
        return call_refresh(error, () => axios.get(NOTES_URL, { withCredentials: true })); // Pass function reference
    }
}

const call_refresh = async (error, func) => {
    if (error.response && error.response.status === 401) {
        const tokenRefreshed = await refresh_token();

        if (tokenRefreshed) {
            const retryResponse = await func(); // Call the function reference to retry
            return retryResponse.data; // Return the data from the retry response
        }
    }
    throw error; // Throw the error if refresh fails
}

export const logout = async () => {
    try{
        await axios.post(LOGOUT_URL,
            {},
            {withCredentials: true}
        )
        return true
    }
    catch(error){
        return false
    }

}

export const is_authenticated = async () => {
    try{
        await axios.post(AUTH_URL, {}, {withCredentials: true})
        return true
    }
    catch(error){
        return false
    }
}

export const register = async (username, email, password) => {
     const response = axios.post(REGISTER_URL, 
        {username: username, email: email, password: password},
        {withCredentials:true}
    )
    return response.data
}