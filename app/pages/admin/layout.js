"use client";
import React from 'react';
import Banner from '../../components/Banner';
import { useAuth } from '@/app/hooks/useAuth';
import Title from '@/app/components/Title';

const AdminLayout = ({children}) => {

  const { user } = useAuth();

  return (
    <div className='bg-white h-full flex flex-col justify-between items-center text-center'>
      <Banner>{user.logged ? `Bienvenido ${user.email}...` : "¡Debes tener acceso para esta seccion!"}</Banner>
      <div className='hidden lg:flex justify-center items-center h-full w-full'>
        { user.logged ? children : <Title style="text-3xl">Lo siento...</Title> }
      </div>
    </div>
  )
}; export default AdminLayout;