import React from 'react';
import Link from 'next/link';

const Aromatizantes = ({category, closeDropdowns, brand, path}) => {
  return (
    <>
        {(category === "aromatizantes" && brand === "paloma") || (category === "all" && brand === "paloma") || (category === "aromatizantes" && brand === "all") ?
        <Link href={`/pages/products/${category}/${brand}/happy-bag`}>
            <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/happy-bag` ? "underline" : "no-underline"}`} role="menuitem">
            Happy Bag
            </span>
        </Link> : ""}
        {(category === "aromatizantes" && brand === "paloma") || (category === "all" && brand === "paloma") || (category === "aromatizantes" && brand === "all") ?
        <Link href={`/pages/products/${category}/${brand}/parfum`}>
            <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/parfum` ? "underline" : "no-underline"}`} role="menuitem">
            Parfum
            </span>
        </Link> : ""}
        {(category === "aromatizantes" && brand === "paloma") || (category === "all" && brand === "paloma") || (category === "aromatizantes" && brand === "all") ?
        <Link href={`/pages/products/${category}/${brand}/woody`}>
            <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/woody` ? "underline" : "no-underline"}`} role="menuitem">
            Woody
            </span>
        </Link> : ""}
    </>
  )
}; export default Aromatizantes;
