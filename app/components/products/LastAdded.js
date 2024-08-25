import React, { Suspense } from 'react';
import ProductCard from './ProductCard';
import Title from '../Title';

const LastAdded = async () => {

  const LastAdded = await fetch(`http://localhost:3000/api/products/all`, {next: {revalidate: 0, tags: ['products']}}).then(res => res.json());
  const LastAddedItems = LastAdded.reverse().slice(0, 5);

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