"use client";
import React from 'react';
import Button from '@/app/components/Button';
import { useDarkMode } from '@/app/hooks/useDarkMode';
import Link from 'next/link';
import LastAdded from './products/LastAdded';

const Inicio = ({ lastItemAdded }) => {

    const { isDarkMode } = useDarkMode();

  return (
    <div className="bg-white flex flex-col justify-center gap-8 m-8 items-center h-full w-full">
        <h2 className={`${isDarkMode ? "text-orange-600" : "text-blue-600"} text-4xl font-bold text-center`}>Bienvenidos a AutoShop!!</h2>
        <h2 className={`${isDarkMode ? "text-orange-600" : "text-blue-600"} text-2xl font-bold text-center`}>Ultimos Productos Agregados:</h2>
        <div className='w-full flex justify-evenly items-center'>
          <LastAdded lastItemAdded={lastItemAdded} />
        </div>
      <div className='flex justify-center items-center gap-2 flex-wrap mx-8'>
        <h4 className='text-xl text-gray-700'>Visita Nuestra Tienda:</h4>
        <Link href={"/pages/products"}>
            <Button>Click Aqui!</Button>
        </Link>
      </div>
    </div>
  )
}; export default Inicio;