import React, { Suspense } from 'react';
import ProductCard from '../products/ProductCard';
import Title from '../Title';

const LowerPrice = async () => {
  try {
    const items = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_API_URL}/products?limit=4&sort=asc`, {next: {revalidate: 3600, tags: ['products', 'product', 'cart']}}).then(res => res.json());
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
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}; export default LowerPrice;