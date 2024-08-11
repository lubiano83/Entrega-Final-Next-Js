import React from 'react';
import ProductDetail from '../../../components/products/ProductDetail';

const Detail = ({ params }) => {

  const { id } = params;

  return (
    <div className="bg-white flex justify-evenly items-center h-full w-full">
      <ProductDetail id={id} />
    </div>
  )
}; export default Detail;
