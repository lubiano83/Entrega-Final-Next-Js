import React from 'react';
import MessageCard from './MessageCard';

const MessageList = async () => {

  const items = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contacts`, {cache: "no-store"}).then(res => res.json());
  const itemsArray = Array.isArray(items) ? items : [items];

  return (
    <div className='flex flex-col gap-2 w-full'>
      {
        itemsArray.map(item => (
          <MessageCard key={item.email} {...item} />
        ))
      }
    </div>
  );
}; export default MessageList;
