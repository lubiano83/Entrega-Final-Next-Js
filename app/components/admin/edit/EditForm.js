import React from 'react';
import EditList from './EditList';

const EditForm = async ({id}) => {

  const items = await fetch(`http://localhost:3000/api/product/${id}`, {next: {revalidate: 0, tags: ['cart']}}).then(res => res.json());
  const itemsArray = Array.isArray(items) ? items : [items];

  return (
    <div className='w-full'>
      <EditList itemsArray={itemsArray} />
    </div>
  )
}; export default EditForm;