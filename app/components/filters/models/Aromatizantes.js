import React from 'react';
import Link from 'next/link';

const Aromatizantes = ({category, closeDropdowns, brand, path}) => {
  return (
    <>
        {(category === "aromatizantes" || brand === "paloma") ?
        <Link href={`/pages/products/${category}/${brand}/Happy-Bag`}>
            <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/Happy-Bag` ? "underline" : "no-underline"}`} role="menuitem">
            Happy Bag
            </span>
        </Link> : ""}
        {(category === "aromatizantes" || brand === "paloma") ?
        <Link href={`/pages/products/${category}/${brand}/Parfum`}>
            <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/Parfum` ? "underline" : "no-underline"}`} role="menuitem">
            Parfum
            </span>
        </Link> : ""}
        {(category === "aromatizantes" || brand === "paloma") ?
        <Link href={`/pages/products/${category}/${brand}/Woody`}>
            <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/Woody` ? "underline" : "no-underline"}`} role="menuitem">
            Woody
            </span>
        </Link> : ""}
    </>
  )
}; export default Aromatizantes;
