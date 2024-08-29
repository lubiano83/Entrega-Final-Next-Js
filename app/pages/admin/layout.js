"use client";
import React from 'react';
import Banner from '../../components/Banner';
import { useAuth } from '@/app/hooks/useAuth';

const AdminLayout = ({children}) => {

  const { user } = useAuth();

  return (
    <div className='bg-white h-full flex flex-col justify-between items-center text-center'>
      <Banner>{user.logged ? `Bienvenido ${user.email}...` : "Debes ingresar para tener acceso..."}</Banner>
      {children}
    </div>
  )
}; export default AdminLayout;