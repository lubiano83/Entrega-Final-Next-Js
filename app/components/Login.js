"use client";
import React from 'react'
import Button from '@/app/components/Button';
import { useDarkMode } from '@/app/hooks/useDarkMode';
import Link from 'next/link';

const Login = () => {

    const { isDarkMode } = useDarkMode();

  return (
    <div className="bg-white flex flex-col justify-center gap-8 m-8 items-center h-full w-full">
        <div>
            <h1 className={`${isDarkMode ? "text-orange-600" : "text-blue-600"} text-4xl font-bold text-center`}>Bienvenidos a AutoShop!!</h1>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 border-2 p-8 rounded-2xl border-gray-700 shadow-md shadow-gray-700 min-w-72 w-1/5'>
            <h2 className={`${isDarkMode ? "text-orange-600" : "text-blue-600"} text-2xl font-bold`}>Login:</h2>
            <input type="text" name="text" placeholder='Ingrese su eMail..' className='w-full h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 border-gray-700'/>
            <input type="text" name="text" placeholder='Ingrese su Password..' className='w-full h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 border-gray-700'/>
            <div className='flex justify-center items-center gap-2'>
                <Button>Registrar</Button>
                <Button>Ingresar</Button>
            </div>
        </div>
      <div className='flex justify-center items-center gap-2 flex-wrap mx-8'>
        <h2 className='text-xl text-gray-700'>Visita Nuestra Tienda:</h2>
        <Link href={"/pages/products"}>
            <Button>Click Aqui!</Button>
        </Link>
      </div>
    </div>
  )
}; export default Login;