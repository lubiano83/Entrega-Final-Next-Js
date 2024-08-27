import React, { Suspense } from 'react';
import ProductCard from '../products/ProductCard';
import Title from '../Title';

const LowerPrice = async () => {

  const lowerPriceItems = await fetch(`http://localhost:3000/api/products?limit=5&sort=asc`, {next: {revalidate: 0, tags: ['products']}}).then(res => res.json());

  return (
    <div className='flex flex-wrap gap-8 justify-evenly items-center w-full'>
      <Suspense fallback={<Title style="text-3xl">Loading...</Title>}>
        {
            lowerPriceItems.map(item => (
                <ProductCard key={item.id} {...item} />
            ))
        }
      </Suspense>
    </div>
  )
}; export default LowerPrice;