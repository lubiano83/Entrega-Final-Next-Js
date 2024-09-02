import React from 'react';
import MessagesCard from './MessagesCard';

const MessagesList = async ({email}) => {

    const items = await fetch(`http:localhost:3000/api/contact/${email}`).then(res => res.json());
    const itemsArray = Array.isArray(items) ? items : [items];

  return (
    <div>
        {
            itemsArray.map(item =>{
                <MessagesCard key={item.email} {...item} />
            })
        }
    </div>
  )
}; export default MessagesList;