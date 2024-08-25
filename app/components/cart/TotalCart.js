"use client";
import React from 'react';
import Button from '../Button';
import { usePrice } from '@/app/hooks/usePrice';
import { useCart } from '@/app/hooks/useCart';

const TotalCart = ({totalPrice, totalQuantity}) => {

  const { setPrice } = usePrice();
  const { clearCart } = useCart();

    const handlePayment = () => {
        alert("¡Muchas Gracias por tu Compra!");
        clearCart()
    };    

  return (
    <div className='flex flex-col gap-2 justify-center items-center'>
      <div>
        <p className='text-gray-700 text-2xl text-center'>Cantidad Total: {totalQuantity ? setPrice(totalQuantity) : "0"}</p>
        <p className='text-gray-700 text-2xl text-center'>Precio Total: ${totalPrice ? setPrice(totalPrice) : "0"}</p>
      </div>
      <Button handleClick={handlePayment}>Pagar</Button>
    </div>
  )
}; export default TotalCart;
