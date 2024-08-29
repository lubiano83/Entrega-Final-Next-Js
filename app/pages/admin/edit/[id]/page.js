import React from 'react';
import EditForm from '@/app/components/admin/EditForm';

const EditPage = ({parmas}) => {

  const { id } = parmas;

  return (
    <div className='text-gray-700 flex justify-center items-center h-full'>
      <EditForm id={id} />
    </div>
  )
}; export default EditPage;