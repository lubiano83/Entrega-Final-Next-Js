"use client";
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import InputFilter from '../filters/InputFilters';

const ProductsList = ({ data, category, brand, filter }) => {

  const [productsFiltered, setProductsFiltered] = useState(data);

  return (
    <section className='flex flex-col w-full h-full gap-8 justify-between items-center'>
      <InputFilter data={data} category={category} brand={brand} filter={filter} setProductsFiltered={setProductsFiltered} />
      <div className='flex flex-wrap gap-8 justify-evenly items-center w-full'>
        {productsFiltered.map(item => (
          <ProductCard key={item.id} {...item} item={item}/>
        ))}
      </div>
    </section>
  );
}; export default ProductsList;
