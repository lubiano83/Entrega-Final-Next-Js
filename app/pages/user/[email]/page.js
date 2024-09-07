"use client";
import React from 'react';
import { useAuth } from '@/app/hooks/useAuth';

const User = () => {

  const { user } = useAuth();

  return (
    <div className="bg-white flex flex-col justify-center items-start h-full text-gray-700 text-xl">
      <p>Nombre: </p>
      <p>Apellido: </p>
      <p>Email: {user.email}</p>
      <p>Dirección: </p>
      <p>Telefono: </p>
    </div>
  )
}; export default User;