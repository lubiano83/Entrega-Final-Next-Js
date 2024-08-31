import React from 'react';
import EditList from '@/app/components/admin/edit/EditList';

const Product = async ({params}) => {

  const {id} = params;

  return (
    <div className='text-gray-700 flex justify-center items-center h-full w-full'>
      <EditList id={id}/>
    </div>
  )
}; export default Product;