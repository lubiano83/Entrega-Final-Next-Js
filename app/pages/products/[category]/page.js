import React from 'react';
import ProductsList from '../../../components/products/ProductsList';

const Category = ({ params, searchParams }) => {

  const { category } = params;
  
  const limit = searchParams.limit ? parseInt(searchParams.limit, 10) : 20;
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const sort = searchParams.sort;

  return (
    <div className='w-full h-full flex'>
<<<<<<< HEAD
      <Suspense fallback={ <Title style='text-3xl flex justify-center items-center w-full h-full'>Cargando...</Title> }>
        <ProductsList category={category} limit={limit} page={page} sort={sort} />
      </Suspense>
=======
      <ProductsList category={category} limit={limit} page={page} sort={sort}/>
>>>>>>> parent of a77e6e7 (agregando loading y suspense)
    </div>
  )
}; export default Category;
