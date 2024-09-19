import React from 'react';
import Banner from '@/app/components/Banner';

const OrderLayout = ({ children }) => {

  return (
    <div className='bg-white w-full h-full flex flex-col justify-between items-center text-center'>
        <Banner>¡Muchas gracias por confiar en nosotros!</Banner>
        {children}
    </div>
  )
}; export default OrderLayout;