import React from 'react'
import MessagesList from '@/app/components/admin/messages/MessagesList';

const Messages = ({params}) => {

    const { email } = params; 

  return (
    <div className='h-full w-full bg-white flex flex-col justify-start p-8 items-center gap-8 text-gray-700'>
        <MessagesList email={email} />
    </div>
  )
}; export default Messages;