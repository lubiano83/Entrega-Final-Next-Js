"use client";
import React, { useState, useEffect } from 'react';
import Button from '../Button';
import Swal from 'sweetalert2';
import { useDarkMode } from '@/app/hooks/useDarkMode';
import Title from '../Title';
import { useAuth } from '@/app/hooks/useAuth';
import { useRouter } from 'next/navigation';

const ContactForm = () => {

  const baseURL = process.env.NEXT_PUBLIC_FIREBASE_API_URL;

  const initialValues = {
    email: "",
    text: "",
  };

  const [values, setValues] = useState(initialValues);
  const { isDarkMode } = useDarkMode();
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && user.email) {
      setValues(prevValues => ({
        ...prevValues,
        email: user.email
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    setValues({
      ...values, 
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseURL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });
  
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
  
      sendMessage();
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Hubo un problema al enviar el mensaje.",
        showConfirmButton: true,
      });
    }
  };

  const handleReset = () => {
    setValues(initialValues);
  };

  const sendMessage = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Mensaje enviado con éxito!!",
      showConfirmButton: false,
      timer: 1500
    });
    setTimeout(() => {
      handleReset();
      router.refresh();
    }, 1500);
  };

  return (
    <div className={`w-1/2 min-w-72 p-8 gap-4 rounded-3xl flex flex-col justify-center items-center bg-gray-700 bg-opacity-25`}>
      <Title style="text-3xl">Contáctanos...</Title>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-4 w-full'>
        {user.logged ?
        <input type="email" required placeholder='Ingresa tu Email..' name="email" value={values.email} onChange={handleChange} disabled={!!user} className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} />
        : <input type="email" required placeholder='Ingresa tu Email..' name="email" value={values.email} onChange={handleChange} className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} /> }
        <textarea required placeholder='Déjanos tu Mensaje..' name="text" value={values.text} onChange={handleChange} className={`w-full min-w-60 h-72 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} />
        <div className='flex justify-center items-center gap-2'>
          <Button type="reset" handleClick={handleReset}>Limpiar</Button>
          <Button type="submit">Enviar</Button>
        </div>
      </form>
    </div>
  );
}; export default ContactForm;
