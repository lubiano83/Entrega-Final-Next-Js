import React from 'react';
import TableCard from './TableCard';
import Pagination from '../../Pagination';

const TableList = async ({ category = "all", brand = "all", filter = "all", limit, page, sort}) => {

  const totalItems = await fetch("http://localhost:3000/api/products/all").then(res => res.json());
  const items = await fetch(`http://localhost:3000/api/products/${category}/${brand}/${filter}?limit=${limit}&page=${page}&sort=${sort}`, {next: { revalidate: 0, tags: ['cart'] }}).then(res => res.json());

  const totalPages = Math.ceil(totalItems.length / limit);
  const prevPage = page > 1 ? page - 1 : page;
  const nextPage = page <= totalPages ? page + 1 : page;

  return (
    <div className='w-full flex flex-col justify-between h-full gap-8'>
      <table className='w-full'>
        <thead className='w-full'>
          <tr className="flex gap-4 items-center text-gray-700 text-center px-8 mb-2 w-full justify-between">
            <th className="w-64">Id:</th>
            <th className="w-20 flex justify-center items-center text-center">Image:</th>
            <th className="w-40">Category:</th>
            <th className="w-80">Product:</th>
            <th className="w-28">Quantity:</th>
            <th className="w-32">Price:</th>
            <th className="w-20">Status:</th>
            <th className="w-20">Edit:</th>
          </tr>
        </thead>
        <tbody className="text-sm flex flex-col gap-2">
          {
            items.map(item => (
              <TableCard key={item.id} {...item} />
            ))
          }
        </tbody>
      </table>
      <Pagination totalPages={totalPages} limit={limit} prevPage={prevPage} nextPage={nextPage} page={page} sort={sort} />
    </div>
  );
}; export default TableList;
