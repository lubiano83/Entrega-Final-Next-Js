import React from 'react';
import ProductCard from './ProductCard';
import DynamicTitle from './DynamicTitle';
import Pagination from '../Pagination';

const ProductsList = async ({ category = "all", brand = "all", filter = "all", page, limit, sort }) => {

  let totalItems = [];
  let items = [];

  try {
    const totalResponse = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_API_URL}/products/all`);
    
    if (!totalResponse.ok) {
      throw new Error(`Error fetching total items: ${totalResponse.status}`);
    }
    
    totalItems = await totalResponse.json();
  } catch (error) {
    console.error('Error fetching total items:', error);
    throw error;
  }

  try {
    const itemsResponse = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_API_URL}/products/${category}/${brand}/${filter}?limit=${limit}&page=${page}&sort=${sort}`, {
      next: { revalidate: 3600, tags: ['cart', 'product', 'products'] }
    });
    
    if (!itemsResponse.ok) {
      throw new Error(`Error fetching items: ${itemsResponse.status}`);
    }
    
    items = await itemsResponse.json();
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }

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
