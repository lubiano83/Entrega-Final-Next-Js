import React, { Suspense } from 'react';
import ProductCard from './ProductCard';
import Title from '../Title';

const LowerPrice = ({ fiveLowerPriceItems }) => {

  return (
    <div className='flex flex-wrap gap-8 justify-evenly items-center w-full'>
      <Suspense fallback={<Title style="text-3xl">Loading...</Title>}>
        {
            fiveLowerPriceItems.map(item => (
                <ProductCard key={item.id} {...item} />
            ))
        }
      </Suspense>
    </div>
  )
}; export default LowerPrice;