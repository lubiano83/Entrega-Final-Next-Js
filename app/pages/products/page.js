import React from 'react';
import ProductsList from '../../components/products/ProductsList';

const Products = ({ searchParams }) => {
  
  const limit = searchParams.limit ? parseInt(searchParams.limit, 10) : 20;
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const sort = searchParams.sort;

  return (
    <div className='w-full h-full flex'>
     <ProductsList limit={limit} page={page} sort={sort} />
    </div>
  );
}; export default Products;
