"use client";
import { auth } from "../firebase/config";
import { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const initialValues = {
        logged: false,
        email: null,
        uid: null,
        name: null,
        lastname: null,
        address: null,
        phone: null
    };

    const [user, setUser] = useState(initialValues);
    const router = useRouter();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    useEffect(() => {
        if (user.logged) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    const registerUser = async (values) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        
            const newUser = {
                logged: true,
                email: userCredential.user.email,
                uid: userCredential.user.uid
            };

            setUser(newUser);
            
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Registro exitoso",
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(() => {
                router.refresh();
                router.push("/");
            }, 1500);

        } catch (error) {
            // Maneja los errores de registro
            if (error.code === 'auth/email-already-in-use') {
                console.log('El correo electrónico ya está registrado');
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "El correo electrónico ya está registrado",
                    showConfirmButton: false,
                    timer: 1500
                });
                // Puedes actualizar el estado para reflejar el error o mostrar un mensaje al usuario
                // setError('El correo electrónico ya está registrado');
            } else if (error.code === 'auth/weak-password') {
                console.log('La contraseña es demasiado débil');
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "La contraseña debe tener al menos 6 caracteres",
                    showConfirmButton: false,
                    timer: 1500
                });
                // setError('La contraseña debe tener al menos 6 caracteres');
            } else {
                console.log('Error al registrar el usuario:', error.message);
                // setError('Hubo un problema al registrar el usuario');
            }
        }
    };

    const loginUser = async (values) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
    
            const newUser = {
                logged: true,
                email: userCredential.user.email,
                uid: userCredential.user.uid
            };

            setUser(newUser);

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Ingreso exitoso",
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(() => {
                router.refresh();
                router.push("/");
            }, 1500);

        } catch (error) {
            if (error.code === 'auth/invalid-credential') {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "El email o password son incorrectos..",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                console.log(error.message);
            }
        }
    };

    const editUser = async (newUserData) => {
        try {
            const userRef = doc(db, "users", user.uid);
            await updateDoc(userRef, newUserData);

            setUser(prevUser => ({
                ...prevUser,
                ...newUserData
            }));

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Datos actualizados con éxito.",
                showConfirmButton: false,
                timer: 1500
            });

        } catch (error) {
            console.log('Error al actualizar los datos del usuario:', error);
        }
    };

    const logOut = async () => {
        try {
            await signOut(auth);
            const newUser = {
                logged: false,
                email: null,
                uid: null
            };

            setUser(newUser);
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Te has desconectado...",
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(() => {
                router.push("/");
            }, 1500);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <AuthContext.Provider value={{ user, registerUser, loginUser, logOut, editUser }}>
            {children}
        </AuthContext.Provider>
    )
};
