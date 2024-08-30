import React from 'react';
import EditForm from './EditForm';

const EditList = ({ itemsArray }) => {

  return (
    <div className='flex flex-wrap justify-center items-center w-full'>
      {itemsArray.map(item => (
        <EditForm key={item.id} {...item}/>
      ))}
    </div>
  )
}; export default EditList;