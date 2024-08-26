import React from 'react';
import Inicio from './components/inicio/Inicio';

export default async function Home() {

  return (
    <main className="flex flex-col w-full justify-center items-center bg-white h-full text-gray-700 p-8">
     <Inicio />
    </main>
  );
}
