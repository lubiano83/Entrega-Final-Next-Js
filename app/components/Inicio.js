import React from 'react';
import Button from '@/app/components/Button';
import Link from 'next/link';
import HigherPrice from './products/HigherPrice';
import Title from './Title';
import LowerPrice from './products/LowerPrice';
import LastAdded from './products/LastAdded';

const Inicio = () => {

  return (
    <div className="bg-white flex flex-col justify-center gap-8 items-center h-full w-full">
        <Title style="text-4xl">Bienvenidos a AutoShop!!</Title>
        <Title style="text-2xl">Ultimos Productos Agregados:</Title>
        <div className='w-full flex justify-evenly items-center'>
          <LastAdded />
        </div>
        <Title style="text-2xl">Productos Mas Baratos:</Title>
        <div className='w-full flex justify-evenly items-center'>
          <LowerPrice />
        </div>
        <Title style="text-2xl">Productos Mas Caros:</Title>
        <div className='w-full flex justify-evenly items-center'>
          <HigherPrice />
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