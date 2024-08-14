import React from 'react';
import ProductDetail from '../../../components/products/ProductDetail';

export async function generateMetadata ({params, searchParams}, parent) {
  const { id } = params;
  const items = await fetch(`http://localhost:3000/api/detail/${id}`, {cache: "no-store"}).then(res => res.json());

  return {
    title: `${items.brand} - ${items.model}`,
    description: items.description,
  };
};

const Detail = ({ params }) => {

  const { id } = params;

  return (
    <div className="bg-white flex justify-evenly items-center h-full w-full">
      <ProductDetail id={id}/>
    </div>
  )
}; export default Detail;
