import React from 'react';
import CartCard from "./CartCard";
import TotalCart from "./TotalCart";
import Title from '../Title';

const CartList = async () => {

  const items = await fetch("http://localhost:3000/api/cart", {next: {revalidate: 300, tags: ['products']}}).then(res => res.json());
  
  const getTotalPrice = () => {
    let totalPrice = 0;
    
    items.forEach(prod => {
        totalPrice += prod.quantity * prod.price;
    })
    
    return totalPrice;
  };

  const getTotalQuantity = () => {
    let accu = 0;
    items.forEach(prod => {
        accu += prod.quantity
    })
    return accu
  }

  return (
    <div className='bg-white h-full w-full flex flex-col justify-between items-center text-center px-8'>
      <div className='p-8'>
        <Title style="text-3xl">Productos en Carrito:</Title>
      </div>
      <div className='w-full h-full flex flex-col justify-start gap-3'>
        {
          items.map(item => (
            <CartCard key={item.id} {...item} />
          ))
        }
      </div>
      <div>
        <TotalCart totalPrice={getTotalPrice()} totalQuantity={getTotalQuantity()}/>
      </div>
    </div>
  )
}; export default CartList;
