import React, { Suspense } from 'react';
import TableList from '@/app/components/admin/table/TableList';
import Title from '@/app/components/Title';

const Brand = ({params, searchParams}) => {
    try {
      const { category, brand } = params;
      const limit = searchParams.limit ? parseInt(searchParams.limit, 10) : 20;
      const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
      const sort = searchParams.sort;
  
      return (
        <div className='h-full bg-white text-2xl p-8 w-full flex justify-center items-center'>
            <Suspense fallback={<Title style="text-3xl">Loading...</Title>}>
                <TableList category={category} brand={brand} limit={limit} page={page} sort={sort} />
            </Suspense>
        </div>
      )
    } catch (error) {
      console.log(error.message);
    }
}; export default Brand;