import React from 'react';
import Title from '../Title';
import Button from '../Button';
import Link from 'next/link';

const UserData = ({ email, name, lastname, address, phone }) => {
  
  return (
    <div className={`px-8 p-8 gap-4 rounded-3xl flex flex-wrap flex-col justify-center items-center bg-gray-700 bg-opacity-25`}>
        <Title style="text-lg text-center">{email && decodeURIComponent(email)}</Title>
        <div className='flex flex-col gap-2 text-lg text-left'>
            <div><strong>Nombre:</strong> <span>{name ?? "sin datos"}</span></div>
            <div><strong>Apellido:</strong> <span>{lastname ?? "sin datos"}</span></div>
            <div><strong>Dirección:</strong> <span>{address ?? "sin datos"}</span></div>
            <div><strong>Telefono:</strong> <span>{phone ?? "sin datos"}</span></div>
        </div>
        <Link href={`/pages/user/${email}/edit`}>
            <Button>Editar</Button>
        </Link>
    </div>
  )
}; export default UserData;