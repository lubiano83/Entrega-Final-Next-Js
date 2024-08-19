import React from 'react';
import Inicio from './components/Inicio';

export default async function Home() {

  const AllItems = await fetch(`http://localhost:3000/api/products`, {next: {revalidate: 86400, tags: ['products']}}).then(res => res.json()); // esto es para que se actualice el cache cada 24 hrs.
  const lastItemsAdded = AllItems.reverse().slice(0, 5);

  const lowerPriceItems = await fetch(`http://localhost:3000/api/products?sort=asc`, {next: {revalidate: 86400, tags: ['products']}}).then(res => res.json());
  const fiveLowerPriceItems = lowerPriceItems.slice(0, 5);

  return (
    <main className="flex flex-col w-full justify-center items-center bg-white h-full text-gray-700 p-8">
     <Inicio lastItemAdded={lastItemsAdded} fiveLowerPriceItems={fiveLowerPriceItems}/>
    </main>
  );
}
