"use client";
import React from 'react';
import Image from 'next/image';
import Counter from '../Counter';
import { usePrice } from '@/app/hooks/usePrice';
import { useParams } from 'next/navigation';

const DetailCard = ({id, imageUrl, category, brand, model, quantity, price, description, status, detail }) => {

    const { setPrice } = usePrice();

  return (
    <>
        <div className='flex items-center flex-wrap justify-center'>
            <div className='bg-white'>
                <Image src={imageUrl} alt={model} height={288} width={288} className='bg-white active:scale-150 cursor-pointer' />
            </div>
            <div className='p-4 text-gray-700 h-72 flex flex-col items-start justify-center gap-2 text-xl'>
                <p><strong>Id:</strong> {id}</p>
                <p><strong>Categoria:</strong> {category}</p>
                <p><strong>Marca:</strong> {brand}</p>
                <p><strong>Modelo:</strong> {model}</p>
                <p><strong>Descripcion:</strong> {description}</p>
                <p><strong>Cantidad:</strong> {quantity}</p>
                <p><strong>Estado:</strong><span className={`${status === true && quantity > 0 ? "text-gray-700" : "text-red-500"}`}> {status === true && quantity > 0 ? "Disponible" : "No Disponible"}</span></p>
                <p><strong>Precio:</strong> ${price ? setPrice(price) : ""}</p>
            </div>
        </div>
        <div className='px-7 text-gray-700 w-1/2 text-m'>
        <p><strong>Detalle:</strong> {detail}</p>
        </div>
        <div>
            { status === true && quantity > 0 ? <Counter quantity={quantity} /> : "" }
        </div>
    </>
  )
}; export default DetailCard;
