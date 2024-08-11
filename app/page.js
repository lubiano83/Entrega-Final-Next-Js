import React from 'react';
import Login from './components/Login';

export default function Home() {
  return (
    <main className="flex flex-col w-full justify-center items-center bg-white h-full text-gray-700 py-8">
     <Login />
    </main>
  );
}
