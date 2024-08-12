import React from 'react';
import ProductCard from './ProductCard';

const LastAdded = ({ lastItemAdded }) => {

  return (
    <div className='flex flex-wrap gap-8 justify-evenly items-center w-full'>
        {
            lastItemAdded.map(item => (
                <ProductCard key={item.id} {...item} />
            ))
        }
    </div>
  )
}; export default LastAdded;
