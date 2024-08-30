"use client";
import React, { useState } from 'react';
import Title from '../Title';
import { useDarkMode } from '@/app/hooks/useDarkMode';
import Button from '../Button';
import { useAuth } from '@/app/hooks/useAuth';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

const LoginForm = () => {

    const { registerUser, loginUser, checkEmailExists } = useAuth();
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

    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isFormValid = isEmailValid(values.email) && values.password !== "";

    const handleSubmit = async (e, action) => {
        e.preventDefault();
        try {
            const exists = await checkEmailExists(values.email);
            console.log(`Email existe: ${exists}`);
            
            if (action === 'register') {
                if (exists) {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "El correo electrónico ya está en uso.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    await registerUser(values);
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Registro exitoso.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    handleReset();
                }
            } else if (action === 'login') {
                if (!exists) {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Correo electrónico no registrado.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    await loginUser(values);
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Inicio de sesión exitoso.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    handleReset();
                }
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    const handleReset = () => {
        setValues(initialValues);
    };

    return (
        <div className={`w-1/2 min-w-72 p-8 gap-4 rounded-3xl flex flex-col justify-center items-center bg-gray-700 bg-opacity-25`}>
            <form className={`flex flex-col justify-center items-center gap-4 w-full`}>
                <Title style="text-2xl">Login:</Title>
                <input type="email" value={values.email} required placeholder='Coloca tu Email..' name="email" onChange={handleChange} className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`}/>
                <input type="password" value={values.password} required placeholder='Coloca tu Password..' name="password" onChange={handleChange} className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`}/>
                {isFormValid
                ? <div className='flex justify-center items-center gap-2'>
                <Button type="submit" handleClick={(e) => handleSubmit(e, "register")}>Registrar</Button>
                <Button type="submit" handleClick={(e) => handleSubmit(e, "login")}>Ingresar</Button>
                </div>
                : <div className='flex justify-center items-center gap-2 opacity-50'>
                <Button type="submit" >Registrar</Button>
                <Button type="submit" >Ingresar</Button>
                </div> }
            </form>
        </div>
    );
}; export default LoginForm;
