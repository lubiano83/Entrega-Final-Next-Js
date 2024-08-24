import React from 'react';
import ProductsList from '@/app/components/products/ProductsList';

const Filter = ({ params, searchParams }) => {
  const { category, brand, filter } = params;
  const limit = searchParams.limit ? parseInt(searchParams.limit, 10) : 20;
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const sort = searchParams.sort;

  return (
    <div className='w-full h-full flex'>
      <ProductsList category={category} brand={brand} filter={filter} limit={limit} page={page} sort={sort}/>
    </div>
  );
}; export default Filter;