"use client";
import React from 'react';
import CartCard from "./CartCard";
import TotalCart from "./TotalCart";
import Title from '../Title';
import { useCart } from '@/app/hooks/useCart';

const CartList = () => {

  const { cart, getTotalPrice, getTotalQuantity, removeItem, totalQuantity } = useCart();

  return (
    <div className='bg-white h-full w-full flex flex-col justify-between items-center text-center px-8 gap-8'>
      <div className='pt-8'>
        <Title style="text-3xl">Carro de Compras:</Title>
      </div>
      <div className='w-full h-full flex flex-col justify-center gap-3 text-gray-700'>
        {totalQuantity === 0 ? <p className="text-xl">No hay productos en el carrito...</p> : 
          (
            cart.map(prod => (
              <CartCard key={prod.item.id} item={prod.item} counter={prod.counter} removeItem={removeItem} />
            ))
          )
        }
      </div>
      <div>
        <TotalCart totalPrice={getTotalPrice()} totalQuantity={getTotalQuantity()}/>
      </div>
    </div>
  )
}; export default CartList;
