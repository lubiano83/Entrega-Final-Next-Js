import React from 'react';
import CartsList from '@/app/components/admin/carts/CartsList';

const Carts = () => {
  return (
    <div className='h-full w-full bg-white flex flex-col justify-center p-8 items-center gap-8 text-gray-700'>
      <CartsList />
    </div>
  )
}; export default Carts;