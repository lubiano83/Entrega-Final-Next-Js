import React from 'react';
import Inicio from './components/Inicio';

export default async function Home({ params }) {

  const { category = "todos", brand = "todos", filter = "todos" } = params;
  const items = await fetch(`http://localhost:3000/api/products/${category}/${brand}/${filter}`, {cache: "no-store"}).then(res => res.json());
  const lastItemAdded = items.reverse().slice(0, 5);

  return (
    <main className="flex flex-col w-full justify-center items-center bg-white h-full text-gray-700 p-8">
     <Inicio category={category} brand={brand} filter={filter} lastItemAdded={lastItemAdded} />
    </main>
  );
}
