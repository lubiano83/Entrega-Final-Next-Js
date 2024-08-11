import React from 'react';
import Link from 'next/link';

const Baterias = ({category, brand, closeDropdowns, path}) => {
  return (
    <>
        {((category === "baterias" || category === "todos") && (brand === "hankook" || brand === "todos")) ?
        <Link href={`/pages/products/${category}/${brand}/45AH`}>
            <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/45AH` ? "underline" : "no-underline"}`} role="menuitem">
              45AH
            </span>
        </Link> : ""}
        {((category === "baterias" || category === "todos") && (brand === "hankook" || brand === "todos")) ?
        <Link href={`/pages/products/${category}/${brand}/55AH`}>
            <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/55AH` ? "underline" : "no-underline"}`} role="menuitem">
              55AH
            </span>
        </Link> : ""}
        {((category === "baterias" || category === "todos") && (brand === "hankook" || brand === "todos")) ?
        <Link href={`/pages/products/${category}/${brand}/60AH`}>
            <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/60AH` ? "underline" : "no-underline"}`} role="menuitem">
              60AH
            </span>
        </Link> : ""}
    </>
  )
}; export default Baterias;
