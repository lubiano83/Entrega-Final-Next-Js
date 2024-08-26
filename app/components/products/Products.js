import React from 'react';
import ProductsList from './ProductsList';
import DynamicTitle from './DynamicTitle';
import Button from '../Button';

const Products = async ({ category = "all", brand = "all", filter = "all", page, limit, sort }) => {

  const totalItems = await fetch("http://localhost:3000/api/products/all").then(res => res.json());
  const items = await fetch(`http://localhost:3000/api/products/${category}/${brand}/${filter}?limit=${limit}&page=${page}&sort=${sort}`, {next: { revalidate: 0, tags: ['cart'] }}).then(res => res.json());
  
  const totalPages = Math.ceil(totalItems.length / limit);
  const prevPage = page > 1 ? page - 1 : page;
  const nextPage = page <= totalPages ? page + 1 : page;

  return (
    <section className='flex flex-col w-full gap-8 p-8 justify-between items-center h-full'>
        <div className='flex flex-col gap-2 justify-between items-center w-full'>
            <DynamicTitle brand={brand} category={category} />
            <ProductsList data={items} category={category} brand={brand} filter={filter} />
        </div>
        {totalPages > 1 ?
            <div className='flex justify-center items-center gap-4'>
                {
                page > 1 ? 
                <a href={`?limit=${limit}&page=${prevPage}&sort=${sort}`}>
                    <Button>
                    Anterior
                    </Button>
                </a> : totalPages === 1 ? "" : (
                <div className='opacity-50'>
                <Button>
                    Anterior
                </Button>
                </div>)
                }
                {
                page < totalPages ? 
                <a href={`?limit=${limit}&page=${nextPage}&sort=${sort}`}>
                    <Button>
                    Siguiente
                    </Button>
                </a> : totalPages === 1 ? "" : (
                <div className='opacity-50'>
                    <Button>
                    Siguiente
                    </Button>
                </div>
                )
                }
            </div>
        : "" }
    </section>
  );
}; export default Products;
