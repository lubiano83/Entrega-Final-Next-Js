import React, { Suspense } from 'react';
import ProductCard from '../products/ProductCard';
import Title from '../Title';

const LowerPrice = async () => {

  let items = [];

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_API_URL}/products?limit=4&sort=asc`, {
      next: { revalidate: 3600, tags: ['products', 'product', 'cart'] }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    items = await response.json();
  } catch (error) {
    console.log(error.message);
    throw error;
  }

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
}; export default LowerPrice;