import React from 'react';
import MessageList from '@/app/components/admin/messages/MessageList';

const Messages = () => {

  return (
    <div className='h-full w-full bg-white flex flex-col justify-start p-8 items-center gap-8 text-gray-700'>
        <MessageList />
    </div>
  )
}; export default Messages;