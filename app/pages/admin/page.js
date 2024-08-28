import TableList from '@/app/components/admin/TableList';
import React from 'react';

const Admin = ({params, searchParams}) => {

  const { category, brand, filter } = params;
  const limit = searchParams.limit ? parseInt(searchParams.limit, 10) : 20;
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const sort = searchParams.sort;

  return (
    <h1 className='h-full text-gray-700 bg-white text-2xl p-8 w-full'>
      <TableList category={category} brand={brand} filter={filter} limit={limit} page={page} sort={sort} />
    </h1>
  )
}; export default Admin;
