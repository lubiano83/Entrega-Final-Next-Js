"use client";
import React from 'react';
import Banner from '../../components/Banner';
import { useAuth } from '@/app/hooks/useAuth';

const AdminLayout = ({children}) => {

  const { user } = useAuth();

  return (
    <div className='bg-white h-full flex flex-col justify-between items-center text-center'>
      <Banner>{user.email === "lubiano83@gmail.com" ? `Bienvenido ${user.email}...` : "Debes tener acceso para esta seccion..."}</Banner>
      {user.logged === "lubiano83@gmail.com" && children }
    </div>
  )
}; export default AdminLayout;