import React from 'react';
import CartCard from './CartCard';

const LastCarts = async () => {
  const baseURL = process.env.NEXT_PUBLIC_FIREBASE_API_URL;
  const items = await fetch(`${baseURL}/carts`, { cache: "no-store" }).then(res => res.json());
  const itemsArray = Array.isArray(items) ? items : [items];

  return (
    <div className='bg-white flex justify-start items-center flex-col gap-8 w-full h-full'>
      {itemsArray.map(cart => (
        <div key={cart.id} className="w-full">
          <div className='flex justify-center items-center gap-8 pb-2 text-xl'>
            <p><strong>Fecha:</strong> {cart.lastUpdated}</p>
            <p><strong>Orden:</strong> {cart.id}</p>
            <p><strong>Email:</strong> {cart.email}</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            {
              cart.products.map(prod => (
                <CartCard key={prod.id} item={prod} counter={prod.quantity} />
              ))
            }
          </div>
        </div>
      ))}
    </div>
  );
}; export default LastCarts;
