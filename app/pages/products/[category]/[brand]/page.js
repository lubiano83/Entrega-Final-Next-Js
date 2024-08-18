import React from 'react';
import ProductsList from '@/app/components/products/ProductsList';

const Brand = ({ params, searchParams }) => {

  const { category, brand } = params;
  const limit = searchParams.limit ? parseInt(searchParams.limit, 10) : 20;
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;

  return (
    <div className='w-full h-full flex'>
     <ProductsList category={category} brand={brand} limit={limit} page={page} />
    </div>
  )
}; export default Brand;
