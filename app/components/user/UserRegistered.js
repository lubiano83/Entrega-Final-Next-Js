import React from 'react';

const UserRegistered = async() => {

    const baseURL = process.env.NEXT_PUBLIC_FIREBASE_API_URL;
    const items = await fetch(`${baseURL}/user/`, {cache: "no-store"}).then(res => res.json());
    const itemsArray = Array.isArray(items) ? items : [items];

  return (
    <div className='text-gray-700 text-lg'>
        Usuarios Registados: {itemsArray.length}
    </div>
  )
}; export default UserRegistered;