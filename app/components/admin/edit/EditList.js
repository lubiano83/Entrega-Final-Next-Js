import React from 'react';
import EditForm from './EditForm';

const EditList = async ({ id }) => {
  try {
    const items = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${id}`, {next: {revalidate: 3600, tags: ['products', 'cart']}}).then(res => res.json());
    const itemsArray = Array.isArray(items) ? items : [items];
  
    return (
      <div className='flex flex-wrap justify-center items-center w-full m-8'>
        {itemsArray.map(item => (
          <EditForm key={item.id} {...item}/>
        ))}
      </div>
    )
  } catch (error) {
    console.log(error.message);
  }
}; export default EditList;