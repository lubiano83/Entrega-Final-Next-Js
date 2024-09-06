import React from 'react';
import DetailCard from './DetailCard';

const ProductDetail = async ({ id }) => {
  
  let items = [];

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_API_URL}/product/${id}`, {next: {revalidate: 3600, tags: ['products', 'cart', 'product']}})
    
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
    <article className='bg-white flex justify-center items-center flex-col py-8 gap-4'>
      {
        itemsArray.map(item => (
          <DetailCard key={item.id} item={item} {...item} />
        ))
      }
    </article>
  )
}; export default ProductDetail;