import React from 'react';
import UserData from './UserData';

const UserList = async({ email }) => {

    const baseURL = process.env.NEXT_PUBLIC_FIREBASE_API_URL;
    const items = await fetch(`${baseURL}/user/${email}`, {cache: "no-store"}).then(res => res.json());
    const itemsArray = Array.isArray(items) ? items : [items];

  return (
    <div className='w-full flex justify-center items-center'>
        {
            itemsArray.map(item => (
                <UserData key={item.email} {...item} item={item} />
            ))
        }
    </div>
  )
}; export default UserList;