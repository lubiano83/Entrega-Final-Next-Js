import React from 'react';
import TableCard from './TableCard';

const TableList = async () => {
  
  const items = await fetch('http://localhost:3000/api/products/all', { next: { revalidate: 0 }}).then(res => res.json());

  return (
    <div className='w-full'>
      <table className='w-full'>
        <thead className='w-full'>
          <tr className="flex gap-8 items-center text-gray-700 text-center px-8 mb-2 w-full justify-between">
            <th className="w-64 bg-red-500">Id:</th>
            <th className="w-96 overflow-hidden flex justify-center items-center text-center bg-red-500">Image:</th>
            <th className="w-52 bg-red-500">Category:</th>
            <th className="w-44 bg-red-500">Brand:</th>
            <th className="w-44 bg-red-500">Model:</th>
            <th className="w-44 bg-red-500">Description:</th>
            <th className="w-40 bg-red-500">Filter:</th>
            <th className="w-36 bg-red-500">Quantity:</th>
            <th className="w-40 bg-red-500">Price:</th>
            <th className="w-24 bg-red-500">Status:</th>
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
    </div>
  );
};

export default TableList;
