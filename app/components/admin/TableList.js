import React from 'react';
import ProductTable from './ProductTable';

const TableList = async () => {

    const items = await fetch(`http:localhost:3000/api/products`, { cache: "no-store" }).then(res => res.json());

    console.log("estos son los items", items);
    
  return (
    <div>
        {
            items.map((item) => (
                <ProductTable key={item.id} {...item} />
            ))
        }
    </div>
  )
}; export default TableList;