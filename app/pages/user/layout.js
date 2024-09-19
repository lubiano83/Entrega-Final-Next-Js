"use client";
import React from 'react';
import { useAuth } from '@/app/hooks/useAuth';
import Banner from '@/app/components/Banner';

const UserLayout = ({ children }) => {

    const { user } = useAuth();

  return (
    <div className='bg-white w-full h-full flex flex-col justify-between items-center text-center'>
        <Banner>Recuerda mantener tus datos actualizados..</Banner>
        {children}
    </div>
  )
}; export default UserLayout;