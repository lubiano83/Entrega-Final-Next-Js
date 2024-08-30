import React from 'react';
import EditCard from './EditCard';

const EditList = ({ itemsArray }) => {

  return (
    <div className='flex flex-wrap justify-center items-center w-full'>
      {itemsArray.map(item => (
        <EditCard key={item.id} {...item} item={item}/>
      ))}
    </div>
  )
}; export default EditList;