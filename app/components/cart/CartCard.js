"use client";
import React from 'react';
import { usePrice } from '@/app/hooks/usePrice';
import SvgImage from '../SvgImage';
import { useDarkMode } from '@/app/hooks/useDarkMode';

const CartCard = ({id, brand, model, price, quantity, description}) => {

  const { setPrice } = usePrice();
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`flex flex-wrap justify-between items-center w-full ${isDarkMode ? "border-orange-600" : "border-blue-600"} bg-gray-700 px-4 py-1 gap-2 rounded-xl overflow-hidden text-white border-2 shadow-md shadow-gray-700`}>
      <div className='w-14'>
        <p>Id:</p>
        <p>{id}</p>
      </div>
      <div className='w-64'>
        <p>{brand} - {model}</p>
        <p>{description}</p>
      </div>
      <div className='w-32'>
        <p>Cantidad:</p>
        <p>{quantity}</p>
      </div>
      <div className='w-36'>
        <p>${setPrice(price)}</p>
      </div>
      <SvgImage src={"/delete-2-svgrepo-com.svg"} />
    </div>
  )
}; export default CartCard;
