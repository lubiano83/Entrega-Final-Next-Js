import React from 'react';
import DropdownMenu from './DropdownMenu';

const DropdownList = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_API_URL}/user`, { cache: "no-store" });
    const users = await response.json();

    return (
        <div className='h-full flex justify-center items-start'>
            {users.length === 0 ? (
                <p>No hay usuarios disponibles.</p>
            ) : (
                <DropdownMenu users={users} /> 
            )}
        </div>
    );
}; export default DropdownList;
