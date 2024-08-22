import React from 'react';
import ProductsList from '../../components/products/ProductsList';
import { Suspense } from 'react';
import Title from '@/app/components/Title';

const Products = ({ searchParams }) => {
  
  const limit = searchParams.limit ? parseInt(searchParams.limit, 10) : 20;
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const sort = searchParams.sort;

  return (
    <div className='w-full h-full flex'>
      <Suspense fallback={ <Title style='text-3xl flex justify-center items-center w-full h-full'>Cargando...</Title> }>
        <ProductsList limit={limit} page={page} sort={sort} />
      </Suspense>
    </div>
  );
}; export default Products;
