import React from 'react';
import LastCarts from '@/app/components/cart/LastCarts';

const Carts = () => {
  return (
    <div className='h-full w-full bg-white flex flex-col justify-center p-8 items-center gap-8 text-gray-700'>
      <LastCarts />
    </div>
  )
}; export default Carts;