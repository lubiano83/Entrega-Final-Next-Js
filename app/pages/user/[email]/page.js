import React from 'react';
import UserList from '@/app/components/user/UserList';

const User = ({ params }) => {

  const { email } = params;

  return (
    <div className='h-full w-full bg-white flex flex-col justify-center p-8 items-center gap-8 text-gray-700'>
      <UserList email={email} />
    </div>
  )
}; export default User;