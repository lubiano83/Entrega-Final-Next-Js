"use client";
import { auth, provider } from "../firebase/config";
import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, fetchSignInMethodsForEmail } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const initialValues = {
        logged: false,
        email: null,
        uid: null
    };

    const [ user, setUser ] = useState(initialValues);

    const registerUser = async (values) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password)
        
            setUser({
                logged: true,
                email: userCredential.user.email,
                user: userCredential.user.uid
            })
        } catch (error) {
            console.log(error.message);
        }
    };

    const checkEmailExists = async (email) => {
        try {
            const signInMethods = await fetchSignInMethodsForEmail(auth, email);
            return signInMethods.length > 0; // Devuelve true si hay métodos de inicio de sesión asociados con el email
        } catch (error) {
            console.error("Error comprobando el email:", error.message);
            return false;
        }
    };

    const loginUser = async (values) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
    
            setUser({
                logged: true,
                email: userCredential.user.email,
                user: userCredential.user.uid
            })
        } catch (error) {
            console.log(error.message);
        }
    };

    const logOut = async () => {
        try {
            await signOut(auth); // Pasa la instancia auth a signOut
            setUser({
                logged: false,
                email: null,
                uid: null
            });
        } catch (error) {
            console.log(error.message);
        }
    };    

    const googleLogin = async () => {
        try {
            await signInWithPopup(auth, provider)
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <AuthContext.Provider value={{ user, registerUser, loginUser, logOut, googleLogin, checkEmailExists }}>
            {children}
        </AuthContext.Provider>
    )
};