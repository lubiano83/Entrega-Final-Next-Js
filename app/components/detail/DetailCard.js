"use client";
import React from 'react';
import Image from 'next/image';
import Counter from '../Counter';
import { usePrice } from '@/app/hooks/usePrice';
import { useCapitalize } from '@/app/hooks/useCapitalize';

const DetailCard = ({id, imageUrl, category, brand, model, quantity, price, description, status, detail, item }) => {

    const { setPrice } = usePrice();
    const { capitalize } = useCapitalize();

    try {
        return (
          <>
              <div className='flex items-center flex-wrap justify-center'>
                  <div className='bg-white'>
                      <Image src={imageUrl} alt={model} height={288} width={288} className='bg-white active:scale-150 cursor-pointer' />
                  </div>
                  <div className='p-4 text-gray-700 h-72 flex flex-col items-start justify-center gap-2 text-xl'>
                      <p><strong>Id:</strong> {id}</p>
                      <p><strong>Categoria:</strong> {capitalize(category)}</p>
                      <p><strong>Marca:</strong> {capitalize(brand)}</p>
                      <p><strong>Modelo:</strong> {model}</p>
                      <p><strong>Descripcion:</strong> {description}</p>
                      <p><strong>Cantidad:</strong> {quantity}</p>
                      <p><strong>Estado:</strong><span className={`${status === true && quantity > 0 ? "text-gray-700" : "text-red-500"}`}> {status === true && quantity > 0 ? "Disponible" : "No Disponible"}</span></p>
                      <p><strong>Precio:</strong> ${price ? setPrice(price) : ""}</p>
                  </div>
              </div>
              <div className='px-7 text-gray-700 w-1/2 min-w-80 text-m'>
              <p><strong>Detalle:</strong> {detail}</p>
              </div>
              <div>
                  { status === true && quantity > 0 ? <Counter item={item} /> : "" }
              </div>
          </>
        )
    } catch (error) {
        console.log("DetailCard:", error.message);
    }

}; export default DetailCard;
