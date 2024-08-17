import React from 'react';
import ProductsList from '@/app/components/products/ProductsList';

const Filter = ({ params }) => {
  const { category, brand, filter } = params;

  return (
    <div className='w-full h-full flex'>
      <ProductsList category={category} brand={brand} filter={filter} />
    </div>
  );
}; export default Filter;