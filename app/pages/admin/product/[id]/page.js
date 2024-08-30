import React from 'react';
import Edit from '@/app/components/admin/edit/Edit';

const Product = async ({params}) => {

  const {id} = params;

  return (
    <div className='text-gray-700 flex justify-center items-center h-full w-full'>
      <Edit id={id}/>
    </div>
  )
}; export default Product;