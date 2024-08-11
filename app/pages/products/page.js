import React from 'react';
import ProductsList from '../../components/products/ProductsList';

const Shop = () => {

  return (
    <div className='w-full h-full flex'>
     <ProductsList category="todos" />
    </div>
  )
}; export default Shop;
