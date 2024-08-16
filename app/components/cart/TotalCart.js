"use client";
import React from 'react';
import Button from '../Button';
import { usePrice } from '@/app/hooks/usePrice';

const TotalCart = ({totalPrice}) => {

  const { setPrice } = usePrice();

    const handlePayment = () => {
        alert("¡Muchas Gracias por tu Compra!");
    };    

  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
      <p className='text-gray-700 text-2xl text-center'>Precio Total: ${setPrice(totalPrice)}</p>
      <Button handleClick={handlePayment}>Pagar</Button>
    </div>
  )
}; export default TotalCart;
