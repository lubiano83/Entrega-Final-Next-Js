"use client";
import React from 'react';
import Button from '../Button';
import Image from 'next/image';
import Link from 'next/link';
import { usePrice } from '@/app/hooks/usePrice';
import { useDarkMode } from '@/app/hooks/useDarkMode';
import { useCapitalize } from '@/app/hooks/useCapitalize';

const ProductCard = ({ id, imageUrl, category, brand, model, quantity, price, description }) => {

  console.log(id);
  

  const { setPrice } = usePrice();
  const { isDarkMode } = useDarkMode();
  const { capitalize } = useCapitalize()

  return (
    <article className={`border-2 ${isDarkMode ? "border-orange-600" : "border-blue-600"} w-72 rounded-3xl overflow-hidden bg-gray-700 shadow-md shadow-gray-700`}>
      <div className='bg-white'>
        <Image priority={false} src={imageUrl} alt={`autoshop, ${category}, ${model}, ${brand}, ${description}`} height={288} width={288} />
      </div>
      <div className='p-4 text-white'>
        <p>Categoria: {category ? capitalize(category) : ""}</p>
        <p>Marca: {brand ? capitalize(brand) : ""}</p>
        <p>Modelo: {model}</p>
        <p>Descripcion: {description}</p>
        <p>Cantidad: {quantity}</p>
        <p>Precio: ${price ? setPrice(price) : ""}</p>
      </div>
      <div className='text-center pb-4'>
        <Link href={`/pages/product/${id}`}>
          <Button>Detalle</Button>
        </Link>
      </div>
    </article>
  )
}; export default ProductCard;
