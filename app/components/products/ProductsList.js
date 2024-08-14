import React from 'react';
import ProductCard from './ProductCard';
import DynamicTitle from './DynamicTitle';

const ProductsList = async ({ category = "todos", brand = "todos", filter = "todos" }) => {

  const items = await fetch(`http://localhost:3000/api/products/${category}/${brand}/${filter}`, {cache: "no-store"}).then(res => res.json());

  return (
    <section className='flex flex-col w-full gap-8 m-8'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <DynamicTitle />
      </div>
      <div className='flex flex-wrap gap-8 justify-evenly items-center w-full'>
        {
          items.map(item => (
            <ProductCard key={item.id} {...item}/>
          ))
        }
      </div>
    </section>
  );
}; export default ProductsList;