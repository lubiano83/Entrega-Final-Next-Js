"use client";
import React, { useState } from 'react';
import Button from '../Button';
import Swal from 'sweetalert2';
import { useDarkMode } from '@/app/hooks/useDarkMode';
import Title from '../Title';

const ContactForm = () => {
  const initialValues = {
    email: "",
    text: "",
  };

  const [values, setValues] = useState(initialValues);
  const { isDarkMode } = useDarkMode();

  const handleChange = (e) => {
    setValues({
      ...values, 
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:3000/api/contact`, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(values)});
    sendMessage();
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
    }, 1500);
  };

  return (
    <div className={`w-1/2 min-w-72 p-8 gap-4 rounded-3xl flex flex-col justify-center items-center bg-gray-700 bg-opacity-25`}>
      <Title style="text-3xl">Contactanos...</Title>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-4 w-full'>
        <input type="email" required placeholder='Ingresa tu Email..' name="email" value={values.email} onChange={handleChange} className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} />
        <textarea required placeholder='Dejanos tu Mensaje..' name="text" value={values.text} onChange={handleChange} className={`w-full min-w-60 h-72 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} />
        <div className='flex justify-center items-center gap-2'>
          <Button type="reset" handleClick={handleReset}>Limpiar</Button>
          <Button type="submit">Enviar</Button>
        </div>
      </form>
    </div>
  )
}; export default ContactForm;
