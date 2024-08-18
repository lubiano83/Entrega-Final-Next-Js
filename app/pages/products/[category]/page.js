import React from 'react';
import ProductsList from '../../../components/products/ProductsList';

const Category = ({params, searchParams}) => {

  const { category } = params;
  const limit = searchParams.limit ? parseInt(searchParams.limit, 10) : 20;
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;

  return (
    <div className='w-full h-full flex'>
      <ProductsList category={category} limit={limit} page={page} />
    </div>
  )
}; export default Category;
