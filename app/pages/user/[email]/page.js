import React from 'react';
import UserData from '@/app/components/user/UserData';

const User = ({ params }) => {

  const { email } = params;

  return (
    <div className='h-full w-full bg-white flex flex-col justify-center p-8 items-center gap-8 text-gray-700'>
      <UserData email={email} />
    </div>
  )
}; export default User;