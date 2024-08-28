"use client";
import React, { useState } from 'react';
import Title from '../Title';
import { useDarkMode } from '@/app/hooks/useDarkMode';
import Button from '../Button';
import { useShow } from '@/app/hooks/useShow';
import { useAuth } from '@/app/hooks/useAuth';
import Swal from 'sweetalert2';

const LoginForm = () => {

    const { registerUser } = useAuth();

    const initialValues = {
        email: "",
        password: ""
    };

    const [values, setValues] = useState(initialValues);
    const { isDarkMode } = useDarkMode();
    const { handleShow, show } = useShow();

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    const handleReset = () => {
        setValues(initialValues);
    };

    const sendMessage = (values) => {
        registerUser(values)
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Usuario registrado con éxito!!",
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {
          handleReset();
        }, 1500);
    };

  return (
    <>
        { show === false ?
            ( 
                <div className={`fixed w-screen h-screen inset-0 z-10 flex justify-center items-center ${isDarkMode ? "bg-orange-600" : "bg-blue-600"} bg-opacity-25`}>
                    <form onClick={handleSubmit} className={`flex flex-col justify-center items-center gap-4 bg-white p-8 rounded-3xl border-2 ${isDarkMode ? "border-orange-600" : "border-blue-600"} shadow-md shadow-gray-700`}>
                        <p onClick={handleShow} className='text-gray-700 cursor-pointer text-3xl relative bottom-3 left-36'>X</p>
                        <Title style="text-2xl">Login:</Title>
                        <input type="email" value={values.email} required placeholder='Coloca tu Email..' name="email" onChange={handleChange} className='w-1/2 min-w-72 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 border-gray-700 text-lg'/>
                        <input type="password" value={values.password} required placeholder='Coloca tu Password..' name="password" onChange={handleChange} className='w-1/2 min-w-72 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 border-gray-700 text-lg'/>
                        <div className='flex justify-center items-center gap-2'>
                            <Button handleClick={() => sendMessage(values)}>Registrar</Button>
                            <Button>Ingresar</Button>
                        </div>
                    </form>
                </div>
            )
        : "" }
    </>
  )
}; export default LoginForm;