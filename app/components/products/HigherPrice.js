import React, { Suspense } from 'react';
import ProductCard from './ProductCard';
import Title from '../Title';

const HigherPrice = async () => {

  const HigherPriceItems = await fetch(`http://localhost:3000/api/products?limit=4&sort=desc`, {next: {revalidate: 0, tags: ['products']}}).then(res => res.json());

  return (
    <div className='flex flex-wrap gap-8 justify-evenly items-center w-full'>
      <Suspense fallback={<Title style="text-3xl">Loading...</Title>}>
        {
            HigherPriceItems.map(item => (
                <ProductCard key={item.id} {...item} />
            ))
        }
      </Suspense>
    </div>
  )
}; export default HigherPrice;
