import React, { Suspense } from 'react';
import ProductCard from '../products/ProductCard';
import Title from '../Title';

const HigherPrice = async () => {

  const items = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}/products?limit=4&sort=desc`, {next: {revalidate: 3600, tags: ['products', 'product', 'cart']}}).then(res => res.json());
  const itemsArray = Array.isArray(items) ? items : [items];

  return (
    <div className='flex flex-wrap gap-8 justify-evenly items-center w-full'>
      <Suspense fallback={<Title style="text-3xl">Loading...</Title>}>
        {
            itemsArray.map(item => (
                <ProductCard key={item.id} {...item} />
            ))
        }
      </Suspense>
    </div>
  )
}; export default HigherPrice;
