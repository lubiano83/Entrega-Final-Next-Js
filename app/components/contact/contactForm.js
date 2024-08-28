"use client";
import React, { useState } from 'react'
import Button from '../Button';
import Swal from 'sweetalert2';

const ContactForm = () => {
  const initialValues = {
    email: "",
    text: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    setValues({
      ...values, 
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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
    <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-4 w-full'>
      <input type="email" required placeholder='Ingresa tu Email..' name="email" value={values.email} onChange={handleChange} className='w-1/2 min-w-72 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 border-gray-700 text-lg' />
      <textarea required placeholder='Dejanos tu Mensaje..' name="text" value={values.text} onChange={handleChange} className='w-1/2 min-w-72 h-72 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 border-gray-700 text-lg' />
      <div className='flex justify-center items-center gap-2'>
        <Button type="reset" handleClick={handleReset}>Limpiar</Button>
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  )
}; export default ContactForm;
