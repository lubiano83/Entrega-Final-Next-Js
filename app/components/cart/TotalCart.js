"use client";
import React from 'react';
import Button from '../Button';
import { usePrice } from '@/app/hooks/usePrice';
import { useCart } from '@/app/hooks/useCart';
import Swal from 'sweetalert2';

const TotalCart = ({totalPrice, totalQuantity}) => {

  const { setPrice } = usePrice();
  const { clearCart } = useCart();

    const handlePayment = () => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Muchas gracias por tu Compra!!",
        showConfirmButton: false,
        timer: 1500
      });
      clearCart()
    };    

  return (
    <div className='flex flex-col gap-2 justify-center items-center'>
      <div>
        <p className='text-gray-700 text-2xl text-center'>Total Productos: {totalQuantity ? setPrice(totalQuantity) : "0"}</p>
        <p className='text-gray-700 text-2xl text-center'>Precio Total: ${totalPrice ? setPrice(totalPrice) : "0"}</p>
      </div>
      {totalQuantity === 0 
        ? <div className='opacity-50'><Button>Pagar</Button></div>
        : <Button handleClick={handlePayment}>Pagar</Button>
      }
    </div>
  )
}; export default TotalCart;
