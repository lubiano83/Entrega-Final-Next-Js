"use client";
import { auth } from "../firebase/config";
import { createContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();

const registerUser = async (values) => {
    const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password)
    console.log(userCredential);

    const user = userCredential.user

    setUser({
        logged: true,
        email: user.email,
        user: user.uid
    })
};

export const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState({
        logged: false,
        email: null,
        uid: null
    });

    return (
        <AuthContext.Provider value={{user, registerUser}}>
            {children}
        </AuthContext.Provider>
    )
};