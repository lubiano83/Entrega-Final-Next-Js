"use client";
import React from 'react';
import CartCard from "./CartCard";
import TotalCart from "./TotalCart";
import Title from '../Title';
import { useCart } from '@/app/hooks/useCart';

const CartList = () => {

  const { cart, getTotalPrice, getTotalQuantity, removeItem } = useCart();

  return (
    <div className='bg-white h-full w-full flex flex-col justify-between items-center text-center px-8'>
      <div className='p-8'>
        <Title style="text-3xl">Productos en Carrito:</Title>
      </div>
      <div className='w-full h-full flex flex-col justify-start gap-3'>
        {
          cart.map(prod => (
            <CartCard key={prod.item.id} item={prod.item} counter={prod.counter} removeItem={removeItem} />
          ))
        }
      </div>
      <div>
        <TotalCart totalPrice={getTotalPrice()} totalQuantity={getTotalQuantity()}/>
      </div>
    </div>
  )
}; export default CartList;
