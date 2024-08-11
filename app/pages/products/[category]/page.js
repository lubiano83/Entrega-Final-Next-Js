import React from 'react';
import ProductsList from '../../../components/products/ProductsList';

const Category = ({params}) => {

  const { category } = params;

  return (
    <div className='w-full h-full flex'>
      <ProductsList category={category} />
    </div>
  )
}; export default Category;
