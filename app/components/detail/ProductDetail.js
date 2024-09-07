import React from 'react';
import DetailCard from './DetailCard';

const ProductDetail = async ({ id }) => {

  const baseURL = process.env.NEXT_PUBLIC_FIREBASE_API_URL;

  try {
    const items = await fetch(`${baseURL}/product/${id}`, {next: {revalidate: 3600, tags: ['products', 'cart', 'product']}}).then(res => res.json());
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
  } catch (error) {
    console.log("ProductDetail:", error.message);
  }
}; export default ProductDetail;