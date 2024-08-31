import React from 'react';
import ProductsList from './ProductsList';
import DynamicTitle from './DynamicTitle';
import Button from '../Button';
import Pagination from '../Pagination';

const Products = async ({ category = "all", brand = "all", filter = "all", page, limit, sort }) => {

  const totalItems = await fetch("http://localhost:3000/api/products/all").then(res => res.json());
  const items = await fetch(`http://localhost:3000/api/products/${category}/${brand}/${filter}?limit=${limit}&page=${page}&sort=${sort}`, {next: { revalidate: 3600, tags: ['cart', 'product', 'products'] }}).then(res => res.json());
  
  const totalPages = Math.ceil(totalItems.length / limit);
  const prevPage = page > 1 ? page - 1 : page;
  const nextPage = page <= totalPages ? page + 1 : page;

  return (
    <section className='flex flex-col w-full gap-8 p-8 justify-between items-center h-full'>
        <div className='flex flex-col gap-2 justify-between items-center w-full'>
            <DynamicTitle brand={brand} category={category} />
            <ProductsList data={items} category={category} brand={brand} filter={filter} />
        </div>
        <Pagination totalPages={totalPages} limit={limit} prevPage={prevPage} nextPage={nextPage} page={page} sort={sort}/>
    </section>
  );
}; export default Products;
