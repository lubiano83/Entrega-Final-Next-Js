import React from 'react';
import ProductCard from './ProductCard';

const LowerPrice = ({ fiveLowerPriceItems }) => {

  return (
    <div className='flex flex-wrap gap-8 justify-evenly items-center w-full'>
        {
            fiveLowerPriceItems.map(item => (
                <ProductCard key={item.id} {...item} />
            ))
        }
    </div>
  )
}; export default LowerPrice;