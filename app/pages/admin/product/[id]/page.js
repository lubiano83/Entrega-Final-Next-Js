import React from 'react';
import EditList from '@/app/components/admin/edit/EditList';

const Product = async ({params}) => {
  try {
    const {id} = params;
  
    return (
      <div className='text-gray-700 flex justify-center items-center h-full w-full'>
        <EditList id={id}/>
      </div>
    )
  } catch (error) {
    console.log(error.message);
  }
}; export default Product;