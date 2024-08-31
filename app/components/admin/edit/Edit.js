import React from 'react';
import EditList from './EditList';

const Edit = async ({id}) => {

  const items = await fetch(`http://localhost:3000/api/product/${id}`, {next: {revalidate: 3600, tags: ['products', 'cart']}}).then(res => res.json());
  const itemsArray = Array.isArray(items) ? items : [items];

  return (
    <div className='w-full m-8'>
      <EditList itemsArray={itemsArray} />
    </div>
  )
}; export default Edit;