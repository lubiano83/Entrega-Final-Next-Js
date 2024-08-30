import React from 'react';
import EditForm from '@/app/components/admin/edit/EditForm';

const Product = async ({params}) => {

  const {id} = params;

  return (
    <div className='text-gray-700 flex justify-center items-center h-full w-full'>
      <EditForm id={id}/>
    </div>
  )
}; export default Product;