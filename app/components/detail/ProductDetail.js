import React from 'react';
import DetailCard from './DetailCard';

const ProductDetail = async ({ id }) => {
  
  const items = await fetch(`http://localhost:3000/api/product/${id}`, {next: {revalidate: 3600, tags: ['products', 'cart', 'product']}}).then(res => res.json());
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