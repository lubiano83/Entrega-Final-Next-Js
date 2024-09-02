import React from 'react';
import EmailList from '@/app/components/admin/messages/email/EmailList';


const Email = ({ params }) => {

  const { email } = params;

  return (
    <div className='h-full w-full bg-white flex flex-col justify-start p-8 items-center gap-8 text-gray-700'>
        <EmailList email={email}/>
    </div>
  )
}; export default Email;