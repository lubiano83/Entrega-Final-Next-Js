import React from 'react';
import Inicio from './components/Inicio';

export default async function Home() {

  const AllItems = await fetch(`http://localhost:3000/api/products`, {cache: "no-store"}).then(res => res.json());
  const lastItemsAdded = AllItems.reverse().slice(0, 5);

  return (
    <main className="flex flex-col w-full justify-center items-center bg-white h-full text-gray-700 p-8">
     <Inicio lastItemAdded={lastItemsAdded} />
    </main>
  );
}
