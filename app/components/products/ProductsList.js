import React from 'react';
import ProductCard from './ProductCard';
import DynamicTitle from './DynamicTitle';

const ProductsList = async ({ category = "todos", brand = "todos", filter = "todos" }) => {

  let page = 1;
  const limit = 10;
  const nextPage = page + 1;
  const prevPage = page > 1 ? page - 1 : 1;

  // Hacer la petición a la API del lado del servidor
  const items = await fetch(`http://localhost:3000/api/products/${category}/${brand}/${filter}?limit=${limit}&page=${page}`, {next: { revalidate: 3600, tags: ['cart'] }}).then(res => res.json());

  return (
    <section className='flex flex-col w-full gap-8 m-8'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <DynamicTitle />
      </div>
      <div className='flex flex-wrap gap-8 justify-evenly items-center w-full'>
        {items.map(item => (
          <ProductCard key={item.id} {...item}/>
        ))}
      </div>
      <div>
        <a href={`?page=${prevPage}`} className='text-gray-700'>
          Anterior
        </a>
        <a href={`?page=${nextPage}`} className='text-gray-700'>
          Siguiente
        </a>
      </div>
    </section>
  );
}; export default ProductsList;
