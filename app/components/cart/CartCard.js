"use client";
import React from 'react';
import { usePrice } from '@/app/hooks/usePrice';
import SvgImage from '../SvgImage';
import { useDarkMode } from '@/app/hooks/useDarkMode';
import { useCart } from '@/app/hooks/useCart';
import { useCapitalize } from '@/app/hooks/useCapitalize';

const CartCard = ({ item, counter, removeItem }) => {
    const { setPrice } = usePrice();
    const { isDarkMode } = useDarkMode();
    const { cart } = useCart();
    const { capitalize } = useCapitalize();

    return (
        <>
            {cart ? (
                <div className={`flex flex-wrap justify-between items-center w-full ${isDarkMode ? "border-orange-600" : "border-blue-600"} bg-gray-700 px-4 py-1 gap-2 rounded-xl overflow-hidden text-white border-2 shadow-md shadow-gray-700`}>
                    <div className='w-56 flex justify-start'>
                        <p>Id: {item.id}</p>
                    </div>
                    <div className='w-52'>
                        <p>{capitalize(item.brand)}, {item.model}</p>
                        <p>{item.description}</p>
                    </div>
                    <div className='w-32'>
                        <p>Cantidad: {counter === 0 ? "No hay stock de este producto" : counter}</p>
                    </div>
                    <div className='w-36'>
                        <p>${item.price ? setPrice(item.price * counter) : ""}</p>
                    </div>
                    <SvgImage src={"/delete-2-svgrepo-com.svg"} handleClick={() => removeItem(item.id)} />
                </div>
            ) : ""}
        </>
    );
};

export default CartCard;
