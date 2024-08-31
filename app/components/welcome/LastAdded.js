import React, { Suspense } from 'react';
import ProductCard from '../products/ProductCard';
import Title from '../Title';

const LastAdded = async () => {

  const items = await fetch(`http://localhost:3000/api/products/all`, {next: {revalidate: 0, tags: ['products']}}).then(res => res.json());
  const itemsArray = Array.isArray(items) ? items : [items];
  const LastAddedItems = itemsArray.reverse().slice(0, 4);

  return (
    <div className='flex flex-wrap gap-8 justify-evenly items-center w-full'>
      <Suspense fallback={<Title style="text-3xl">Loading...</Title>}>
        {
            LastAddedItems.map(item => (
                <ProductCard key={item.id} {...item} />
            ))
        }
      </Suspense>
    </div>
  )
}; export default LastAdded;