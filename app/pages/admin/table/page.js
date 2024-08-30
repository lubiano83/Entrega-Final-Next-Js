import React, { Suspense } from 'react';
import TableList from '@/app/components/admin/table/TableList';
import Title from '@/app/components/Title';

const Table = ({ searchParams }) => {

    const limit = searchParams.limit ? parseInt(searchParams.limit, 10) : 20;
    const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
    const sort = searchParams.sort;

  return (
    <div className='h-full bg-white text-2xl p-8 w-full flex justify-center items-center'>
        <Suspense fallback={<Title style="text-3xl">Loading...</Title>}>
            <TableList limit={limit} page={page} sort={sort} />
        </Suspense>
    </div>
  )
}; export default Table;