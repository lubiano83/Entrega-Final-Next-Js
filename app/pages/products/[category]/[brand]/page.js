import React from 'react';
import ProductsList from '@/app/components/products/ProductsList';

const Brand = ({ params }) => {

  const { category, brand } = params;

  return (
    <div className='w-full h-full flex'>
     <ProductsList category={category} brand={brand} />
    </div>
  )
}; export default Brand;
