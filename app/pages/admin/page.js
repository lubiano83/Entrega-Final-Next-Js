import Button from '@/app/components/Button';
import Title from '@/app/components/Title';
import Link from 'next/link';
import React from 'react';

const Admin = () => {

  return (
    <div className='h-full w-full bg-white flex flex-col justify-start p-8 items-center gap-8'>
      <Title style="text-2xl">¿Que necesitas hacer?</Title>
      <div className='flex justify-center items-start gap-4 w-full h-full'>
        <Link href={"/pages/admin/table"}>
          <Button>Panel de Control</Button>  
        </Link>
        <Link href={"/pages/admin/create"}>
          <Button>Ingresar Productos</Button>
        </Link>
      </div>
    </div>
  )
}; export default Admin;
