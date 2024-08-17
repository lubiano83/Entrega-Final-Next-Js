import React from 'react';
import ProductCard from './ProductCard';
import DynamicTitle from './DynamicTitle';
import Button from '../Button';

const ProductsList = async ({ category = "todos", brand = "todos", filter = "todos", params }) => {

  let page = 1;
  let limit = 10;

  // Hacer la petición a la API del lado del servidor
  const items = await fetch(`http://localhost:3000/api/products/${category}/${brand}/${filter}?limit=${limit}&page=${page}`, {next: { revalidate: 3600, tags: ['cart'] }}).then(res => res.json());

  const prevPage = page = 1 ? page : page -1;
  const nextPage = page >= Math.ceil(items.length / limit) ? page : page + 1;
  const totalPages = Math.ceil(items.length / limit);

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
      {totalPages > 1 ? 
      <div className='flex justify-center items-center gap-4'>
        <a href={`?page=${prevPage}`}>
          <Button>
            Anterior
          </Button>
        </a>
        <a href={`?page=${nextPage}`}>
          <Button>
            Siguiente
          </Button>
        </a>
      </div> : "" }
    </section>
  );
}; export default ProductsList;
