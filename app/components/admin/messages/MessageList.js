import React from 'react';
import MessageCard from './MessageCard';

const MessageList = async () => {

  const baseURL = process.env.NEXT_PUBLIC_FIREBASE_API_URL;

  try {
    const items = await fetch(`${baseURL}/contacts`, {cache: "no-store"}).then(res => res.json());
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
  } catch (error) {
    console.log("MessageList:", error.message);
  }
}; export default MessageList;
