import React from 'react';
import Banner from '../../components/Banner';

const CartLayout = ({children}) => {
  return (
    <div className='bg-white h-full w-full flex flex-col justify-between items-center text-center pb-8'>
      <Banner>Por compras antes de las 12 PM, el envio se gestionara el mismo dia...</Banner>
      {children}
    </div>
  )
}; export default CartLayout;