import React from 'react';
import Button from '../Button';
import Image from 'next/image';
import Link from 'next/link';
// import { usePrice } from '../../hooks/usePrice';

const ProductCard = ({ id, imageUrl, category, brand, model, quantity, price, description }) => {

  // const { setPrice } = usePrice(); 

  return (
    <article className='border-2 border-gray-800 w-72 rounded-3xl overflow-hidden bg-gray-700 shadow-lg shadow-gray-700'>
      <div className='bg-white'>
        <Image priority={false} src={imageUrl} alt={`autoshop, ${category}, ${model}, ${brand}, ${description}`} height={288} width={288} />
      </div>
      <div className='p-4 text-white'>
        <p>Categoria: {category}</p>
        <p>Marca: {brand}</p>
        <p>Modelo: {model}</p>
        <p>Descripcion: {description}</p>
        <p>Cantidad: {quantity}</p>
        <p>Precio: ${price}</p>
      </div>
      <div className='text-center pb-4'>
        <Link href={`/pages/detail/${id}`}>
          <Button styles={"border py-2 px-4 rounded-lg bg-blue-500 text-white"}>Detalle</Button>
        </Link>
      </div>
    </article>
  )
}; export default ProductCard;
