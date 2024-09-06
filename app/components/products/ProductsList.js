import React from 'react';
import ProductCard from './ProductCard';
import DynamicTitle from './DynamicTitle';
import Pagination from '../Pagination';

const ProductsList = async ({ category = "all", brand = "all", filter = "all", page, limit, sort }) => {

  const totalItems = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}/products/all`).then(res => res.json());
  const items = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}/products/${category}/${brand}/${filter}?limit=${limit}&page=${page}&sort=${sort}`, {next: { revalidate: 3600, tags: ['cart', 'product', 'products'] }}).then(res => res.json());

  const totalPages = Math.ceil(totalItems.length / limit);
  const prevPage = page > 1 ? page - 1 : page;
  const nextPage = page <= totalPages ? page + 1 : page;

  return (
    <section className='flex flex-col w-full h-full gap-8 justify-center items-center m-8'>
      <DynamicTitle brand={brand} category={category} />
      <div className='flex flex-wrap gap-8 justify-evenly items-center w-full'>
        {items.map(item => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
      <Pagination totalPages={totalPages} limit={limit} prevPage={prevPage} nextPage={nextPage} page={page} sort={sort}/>
    </section>
  );
}; export default ProductsList;
