"use client";
import React from 'react';
import Banner from '../../components/Banner';
import { useAuth } from '@/app/hooks/useAuth';

const AdminLayout = ({children, login}) => {

  const { user } = useAuth();

  return (
    <div className='bg-white h-full flex flex-col justify-between items-center text-center'>
      <Banner>Bienvenido...</Banner>
      {
        user.logged
      ? children
      : login
      }
    </div>
  )
}; export default AdminLayout;