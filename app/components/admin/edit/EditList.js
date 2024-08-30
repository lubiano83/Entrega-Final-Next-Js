import React from 'react';
import EditCard from './EditCard';

const EditList = async ({ id }) => {

  const items = await fetch(`http://localhost:3000/api/product/${id}`, {next: {revalidate: 0, tags: ['products']}}).then(res => res.json());
  const itemsArray = Array.isArray(items) ? items : [items];

  return (
    <div className='flex flex-wrap gap-8 justify-evenly items-center w-full'>
      {itemsArray.map(item => (
        <EditCard key={item.id} {...item} item={item} />
      ))}
    </div>
  )
}; export default EditList;