"use client";
import React, { useState } from 'react';
import Title from '../Title';
import { useDarkMode } from '@/app/hooks/useDarkMode';
import Button from '../Button';
import { useAuth } from '@/app/hooks/useAuth';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

const LoginForm = () => {

    const { registerUser, loginUser, logOut, googleLogin, checkEmailExists } = useAuth();
    const router = useRouter();

    const initialValues = {
        email: "",
        password: ""
    };

    const [values, setValues] = useState(initialValues);
    const { isDarkMode } = useDarkMode();

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    console.log(values.email);
    

    const handleSubmit = async (e, action) => {
        e.preventDefault();
        try {
            if (action === "register") {
                if(checkEmailExists(values.email)){
                    return (
                        Swal.fire({
                            position: "center",
                            icon: "warning",
                            title: "Este email ya esta registrado..",
                            showConfirmButton: false,
                            timer: 1500
                        }),
                        setTimeout(() => {
                            handleReset();
                        }, 1500)
                    )
                } 
                await registerUser(values);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Registro exitoso!!",
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(() => {
                    handleReset();
                    router.back()
                }, 1500);
            } else if (action === "login") {
                await loginUser(values);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Ingreso exitoso!!",
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(() => {
                    handleReset();
                    router.back()
                }, 1500);
            }
        } catch (error) {
            console.error("Error:", error.message);
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Operación Fallida!!",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    const handleReset = () => {
        setValues(initialValues);
    };

    return (
        // <div className={`fixed w-screen h-screen inset-0 z-10 flex justify-center items-center ${isDarkMode ? "bg-orange-600" : "bg-blue-600"} bg-opacity-25`}>
            <form onSubmit={handleSubmit} className={`flex flex-col justify-center items-center gap-4 w-full`}>
                <Title style="text-2xl">Login:</Title>
                <input type="email" value={values.email} required placeholder='Coloca tu Email..' name="email" onChange={handleChange} className={`w-1/2 min-w-72 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`}/>
                <input type="password" value={values.password} required placeholder='Coloca tu Password..' name="password" onChange={handleChange} className={`w-1/2 min-w-72 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`}/>
                <div className='flex justify-center items-center gap-2'>
                    <Button handleClick={(e) => handleSubmit(e, "register")}>Registrar</Button>
                    <Button handleClick={(e) => handleSubmit(e, "login")}>Ingresar</Button>
                </div>
                <Button handleClick={googleLogin}>Ingresar con Google</Button>
            </form>
        // </div>
    );
}; export default LoginForm;
