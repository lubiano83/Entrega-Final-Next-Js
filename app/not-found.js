import React from 'react';
import GoBack from './components/GoBack';

const NotFound = () => {
  return (
    <div className='h-full bg-white flex justify-center flex-col gap-4 items-center text-2xl text-gray-700'>
      Esta Pagina no Existe!!
      <div className='text-sm'>
        <GoBack />
      </div>
    </div>
  )
}; export default NotFound;
