import React from 'react';
import Link from 'next/link';

const Baterias = ({category, brand, closeDropdowns, path}) => {
  return (
    <>
        {(category === "baterias" && brand === "hankook") || (category === "all" && brand === "hankook") || (category === "baterias" && brand === "all") ?
        <Link href={`/pages/products/${category}/${brand}/45ah`}>
            <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/45ah` ? "underline" : "no-underline"}`} role="menuitem">
              45AH
            </span>
        </Link> : ""}
        {(category === "baterias" && brand === "hankook") || (category === "all" && brand === "hankook") || (category === "baterias" && brand === "all") ?
        <Link href={`/pages/products/${category}/${brand}/55ah`}>
            <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/55ah` ? "underline" : "no-underline"}`} role="menuitem">
              55AH
            </span>
        </Link> : ""}
        {(category === "baterias" && brand === "hankook") || (category === "all" && brand === "hankook") || (category === "baterias" && brand === "all") ?
        <Link href={`/pages/products/${category}/${brand}/60ah`}>
            <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/60ah` ? "underline" : "no-underline"}`} role="menuitem">
              60AH
            </span>
        </Link> : ""}
    </>
  )
}; export default Baterias;
