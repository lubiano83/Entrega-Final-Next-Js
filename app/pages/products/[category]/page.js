import React from 'react';
import ProductsList from '../../../components/products/ProductsList';

export function generateStaticParams () {
  return [
    {category: "all"},
    {category: "neumaticos"},
    {category: "baterias"},
    {category: "aceites"},
    {category: "filtros"},
    {category: "aromatizantes"},
  ]
} 

export const revalidate = 3600;

const Category = ({ params, searchParams }) => {

  const { category } = params;
  
  const limit = searchParams.limit ? parseInt(searchParams.limit, 10) : 20;
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const sort = searchParams.sort;

  return (
    <div className='w-full h-full flex'>
      <ProductsList category={category} limit={limit} page={page} sort={sort} />
    </div>
  )
}; export default Category;
