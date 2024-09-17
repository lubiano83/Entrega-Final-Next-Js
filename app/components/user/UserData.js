import React from 'react';
import Title from '../Title';
import Button from '../Button';
import Link from 'next/link';

const UserData = ({ email }) => {

  return (
    <div className={`w-1/2 min-w-72 p-8 gap-4 rounded-3xl flex flex-wrap flex-col justify-center items-center bg-gray-700 bg-opacity-25`}>
        <Title style="text-3xl">{email && decodeURIComponent(email)}</Title>
        <div className='flex flex-col gap-2'>
            <div><strong>Nombre:</strong> <span>{"sin datos"}</span></div>
            <div><strong>Apellido:</strong> <span>{"sin datos"}</span></div>
            <div><strong>Dirección:</strong> <span>{"sin datos"}</span></div>
            <div><strong>Telefono:</strong> <span>{"sin datos"}</span></div>
        </div>
        <Link href={`/pages/user/${email}/edit`}>
            <Button>Editar</Button>
        </Link>
    </div>
  )
}; export default UserData;