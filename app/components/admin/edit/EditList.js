import React from 'react';
import EditForm from './EditForm';

const EditList = async ({ id }) => {

  const items = await fetch(`http://localhost:3000/api/product/${id}`, {next: {revalidate: 3600, tags: ['products', 'cart']}}).then(res => res.json());
  const itemsArray = Array.isArray(items) ? items : [items];

  return (
    <div className='flex flex-wrap justify-center items-center w-full m-8'>
      {itemsArray.map(item => (
        <EditForm key={item.id} {...item}/>
      ))}
    </div>
  )
}; export default EditList;