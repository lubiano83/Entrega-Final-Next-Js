import React from 'react';
import CartList from '@/app/components/cart/CartList';
import { Suspense } from 'react';
import Title from '@/app/components/Title';

const Cart = () => {

  return (
    <div className='bg-white flex flex-col justify-between items-center h-full w-full'>
      <Suspense fallback={ <Title style='text-3xl flex justify-center items-center w-full h-full'>Cargando...</Title> }>
        <CartList />
      </Suspense>
    </div>
  )
}; export default Cart;
