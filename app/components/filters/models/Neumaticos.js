import React from 'react';
import Link from 'next/link';

const Neumaticos = ({category, brand, closeDropdowns, path}) => {

  return (
    <>
        {(category === "neumaticos" && brand === "hankook") || (category === "neumaticos" && brand === "all") || (category === "all" && brand === "hankook") ?
        <Link href={`/pages/products/${category}/${brand}/r13`}>
            <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/r13` ? "underline" : "no-underline"}`} role="menuitem">
              R13
            </span>
        </Link> : "" }
        {(category === "neumaticos" && brand === "hankook") || (category === "neumaticos" && brand === "all") || (category === "all" && brand === "hankook") ?
        <Link href={`/pages/products/${category}/${brand}/r14`}>
            <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/r14` ? "underline" : "no-underline"}`} role="menuitem">
              R14
            </span>
        </Link> : ""}
        {(category === "neumaticos" && brand === "hankook") || (category === "neumaticos" && brand === "all") || (category === "all" && brand === "hankook") ?
        <Link href={`/pages/products/${category}/${brand}/r15`}>
            <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/r15` ? "underline" : "no-underline"}`} role="menuitem">
              R15
            </span>
        </Link> : ""}
    </>
  )
}; export default Neumaticos;
