import React from 'react';
import ProductsList from '@/app/components/products/ProductsList';
import { Suspense } from 'react';
import Title from '@/app/components/Title';

const Filter = ({ params, searchParams }) => {
  const { category, brand, filter } = params;
  const limit = searchParams.limit ? parseInt(searchParams.limit, 10) : 20;
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const sort = searchParams.sort;

  return (
    <div className='w-full h-full flex'>
      <Suspense fallback={ <Title style='text-3xl flex justify-center items-center w-full h-full'>Cargando...</Title> }>
        <ProductsList category={category} brand={brand} filter={filter} limit={limit} page={page} sort={sort}/>
      </Suspense>
    </div>
  );
}; export default Filter;