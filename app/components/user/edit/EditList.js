import React from 'react';
import UserEdit from './UserEdit';

const EditList = async({ email }) => {

  const baseURL = process.env.NEXT_PUBLIC_FIREBASE_API_URL;
  const items = await fetch(`${baseURL}/user/${email}`, {cache: "no-store"}).then(res => res.json());
  const itemsArray = Array.isArray(items) ? items : [items];

  return (
    <div className='w-full flex justify-center items-center'>
      {
        itemsArray.map(item => (
          <UserEdit key={item.email} {...item} />
        ))
      }
    </div>
  )
}; export default EditList;