import React from 'react';
import ProductDetail from '../../../components/products/ProductDetail';
import { Suspense } from 'react';
import Title from '@/app/components/Title';

export async function generateMetadata ({params, searchParams}, parent) {
  const { id } = params;
  const items = await fetch(`http://localhost:3000/api/detail/${id}`);

  return {
    title: `${items.brand} - ${items.model}`,
    description: items.description,
  };
};

const Detail = ({ params }) => {

  const { id } = params;

  return (
    <div className="bg-white flex justify-evenly items-center h-full w-full">
      <Suspense fallback={ <Title style='text-3xl flex justify-center items-center w-full h-full'>Cargando...</Title> }>
        <ProductDetail id={id}/>
      </Suspense>
    </div>
  )
}; export default Detail;
