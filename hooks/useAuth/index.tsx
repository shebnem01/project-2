import { jwtVerifyToken } from "@/lib/jwt";
import React from "react";
import { getAPI } from "@/services/fetchApi";
const fromServer = async () => {
    const cookies = require('next/headers').cookies;
    const cookieList = cookies();
    const { value: token } = cookieList.get('token') ?? { value: null };
    const verifiedToken = token && await jwtVerifyToken(token);
    return verifiedToken;
}


export interface User {
    name: string;
    email: string;
    role: string;
}

export function useAuth() {
    const [auth, setAuth] = React.useState<User|null>(null);

    const fetchToken = async () => {
        const {data}=await getAPI('/get-token');

       setAuth(data);
    }
    React.useEffect(() => {
        fetchToken();
    }, []);
    return auth
}

useAuth.fromServer = fromServer;