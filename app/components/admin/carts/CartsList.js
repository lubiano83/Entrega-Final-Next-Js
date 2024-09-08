import React from 'react';
import CartsCard from './CartsCard';

const CartsList = async () => {

    const baseURL = process.env.NEXT_PUBLIC_FIREBASE_API_URL;

    const items = await fetch(`${baseURL}/carts`, {cache: "no-store"}).then(res => res.json());
    const itemsArray = Array.isArray(items) ? items : [items];

  return (
    <div className='bg-white flex justify-center items-center flex-col py-8 gap-4'>
        {
            itemsArray.map(item => (
                <CartsCard key={item.id} item={item.products}/>
            ))
        }
    </div>
  )
}; export default CartsList;