import React from 'react';
import Title from '../Title';
import Button from '../Button';
import Link from 'next/link';
import Image from 'next/image';

const UserData = ({ email, imageUrl, name, lastname, city, address, phone, item }) => {
  
  return (
    <div className={`w-1/2 min-w-72 p-8 gap-4 rounded-3xl flex flex-wrap flex-col justify-center items-center bg-gray-700 bg-opacity-25`}>
        <Title style="text-lg text-center">{email && decodeURIComponent(email)}</Title>
        <div className='flex justify-center items-center gap-4 flex-wrap'>
          <Image priority={false} src={imageUrl ? imageUrl : "/no-image.webp"} alt={"imagen profile autoshop"} width={230} height={230}/>
          <div className='flex flex-col gap-2 text-lg text-left'>
              <div><strong>Nombre:</strong> <span>{name}</span></div>
              <div><strong>Apellido:</strong> <span>{lastname}</span></div>
              <div><strong>Ciudad:</strong> <span>{city}</span></div>
              <div><strong>Dirección:</strong> <span>{address}</span></div>
              <div><strong>Telefono:</strong> <span>{phone}</span></div>
          </div>
        </div>
        <Link href={`/pages/user/${email}/edit`}>
            <Button>Editar</Button>
        </Link>
    </div>
  )
}; export default UserData;