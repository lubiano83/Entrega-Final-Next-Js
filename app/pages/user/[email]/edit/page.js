import React from 'react';
import UserEdit from '@/app/components/user/UserEdit';

const Edit = ({ params }) => {

  const { email } = params;

  return (
    <div className='h-full w-full bg-white flex flex-col justify-center p-8 items-center gap-8 text-gray-700'>
        <UserEdit email={email} />
    </div>
  )
}; export default Edit;