"use client";
import React from 'react';
import mockData from '../../data/mockData';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Counter from '../Counter';
import { usePrice } from '../../hooks/usePrice';

const ProductDetail = () => {

    const { id } = useParams();
    const { setPrice } = usePrice();

    const singleProduct = mockData.find(product => product.id.toString() === id.toString());

    if(!singleProduct){
      return console.log("singleProduct no existe");
    };
    
  return (
    <article className='bg-white flex justify-center items-center flex-col py-8 gap-4'>
      <div className='flex items-center flex-wrap justify-center'>
        <div className='bg-white'>
            <Image src={singleProduct.imageUrl} alt={singleProduct.model} height={288} width={288} className='bg-white' />
        </div>
        <div className='p-4 text-gray-700 h-72 flex flex-col items-start justify-center gap-3 text-xl'>
            <p><strong>Id:</strong> {singleProduct.id}</p>
            <p><strong>Categoria:</strong> {singleProduct.category}</p>
            <p><strong>Marca:</strong> {singleProduct.brand}</p>
            <p><strong>Modelo:</strong> {singleProduct.model}</p>
            <p><strong>Descripcion:</strong> {singleProduct.description}</p>
            <p><strong>Cantidad:</strong> {singleProduct.quantity}</p>
            <p><strong>Precio:</strong> ${singleProduct.price ? setPrice(singleProduct.price) : ""}</p>
        </div>
      </div>
      <div className='px-7 text-gray-700 container text-m'>
        <p><strong>Detalle:</strong> {singleProduct.detail}</p>
      </div>
      <div>
          <Counter />
      </div>
    </article>
  )
}; export default ProductDetail;
