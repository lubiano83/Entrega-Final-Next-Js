"use client";
import React from 'react';
import Title from '../Title';
import Button from '../Button';
import { useAuth } from '@/app/hooks/useAuth';
import { useDarkMode } from '@/app/hooks/useDarkMode';

const UserEdit = () => {

    const { user } = useAuth();
    const { isDarkMode } = useDarkMode();

  return (
    <div className={`w-1/2 min-w-72 p-8 gap-4 rounded-3xl flex flex-wrap flex-col justify-center items-center bg-gray-700 bg-opacity-25`}>
        <Title style="text-3xl">{user.email}</Title>
        <form className='flex flex-col justify-center items-center gap-4 w-full'>
            <input type="text" placeholder='Ingresa un Nombre..' name="name" required className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} />
            <input type="text" placeholder='Ingresa un Apellido..' name="lastname" required className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} />
            <input type="text" placeholder='Ingresa una Dirección..' name="address" required className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} />
            <input type="text" placeholder='Ingresa un Telefono..' name="phone" required className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} />
            <div className='flex justify-center items-center gap-2'>
                <Button type="reset">Limpiar</Button>
                <Button type="submit">Guardar</Button>
            </div>
        </form>
    </div>
  )
}; export default UserEdit;