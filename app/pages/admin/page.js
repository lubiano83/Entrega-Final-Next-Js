import Button from '@/app/components/Button';
import Link from 'next/link';
import React from 'react';

const Admin = () => {

  return (
    <div className='h-full bg-white flex flex-col justify-center items-center gap-8'>
      <Link href={"/pages/admin/table"}>
        <Button>Panel de Control</Button>    
      </Link>
      <Button>Ingresar Productos</Button>
    </div>
  )
}; export default Admin;
