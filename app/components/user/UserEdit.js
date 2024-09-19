"use client";
import React, { useState } from 'react';
import Title from '../Title';
import Button from '../Button';
import { useDarkMode } from '@/app/hooks/useDarkMode';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

const UserEdit = ({ email }) => {

  console.log(email);

  const initialValues = {
    name: "",
    lastname: "",
    address: "",
    phone: "",
  };

  const [values, setValues] = useState(initialValues);
  const { isDarkMode } = useDarkMode();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email) {
        return console.log("El dato del email no llega");
      }

      const response = await fetch(`/api/user/${email}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el usuario.");
      }

      const result = await response.json();
      sendMessage(result.message);
    } catch (error) {
      console.error("Error updating user: ", error);
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al actualizar el usuario.",
        icon: "error",
      });
    }
  };

  const sendMessage = (message) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
    router.refresh();
    setTimeout(() => {
      router.back();
    }, 1500);
  };

  return (
    <div className={`w-1/2 min-w-72 p-8 gap-4 rounded-3xl flex flex-wrap flex-col justify-center items-center bg-gray-700 bg-opacity-25`}>
      <Title style="text-lg">{email && decodeURIComponent(email)}</Title>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-4 w-full">
      <input 
          type="file" 
          placeholder='Ingresa un Nombre..' 
          name="image" 
          value={values.image}
          onChange={handleChange}
          required 
          className={`w-full min-w-60 h-10 rounded-xl px-2 text-gray-700 text-lg overflow-hidden`} 
        />
        <input 
          type="text" 
          placeholder='Ingresa un Nombre..' 
          name="name" 
          value={values.name}
          onChange={handleChange}
          required 
          className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} 
        />
        <input 
          type="text" 
          placeholder='Ingresa un Apellido..' 
          name="lastname" 
          value={values.lastname}
          onChange={handleChange}
          required 
          className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} 
        />
        <input 
          type="text" 
          placeholder='Ingresa una Ciudad..' 
          name="city" 
          value={values.city}
          onChange={handleChange}
          required 
          className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} 
        />
        <input 
          type="text" 
          placeholder='Ingresa una Dirección..' 
          name="address" 
          value={values.address}
          onChange={handleChange}
          required 
          className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} 
        />
        <input 
          type="number" 
          placeholder='Ingresa un Telefono..' 
          name="phone" 
          value={values.phone}
          onChange={handleChange}
          required 
          className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} 
        />
        <div className='flex justify-center items-center gap-2'>
          <Button type="reset">Limpiar</Button>
          <Button type="submit">Guardar</Button>
        </div>
      </form>
    </div>
  );
};

export default UserEdit;