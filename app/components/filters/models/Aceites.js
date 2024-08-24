import React from 'react';
import Link from 'next/link';

const Aceites = ({category, brand, closeDropdowns, path}) => {

  return (
    <>
        {(category === "aceites" && brand === "shell") || (category === "all" && brand === "shell") || (category === "aceites" && brand === "all") ?
        <Link href={`/pages/products/${category}/${brand}/5w-30`}>
            <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/5w-30` ? "underline" : "no-underline"}`} role="menuitem">
            5W-30
            </span>
        </Link> : ""}
        {(category === "aceites" && brand === "shell") || (category === "all" && brand === "shell") || (category === "aceites" && brand === "all") ?
        <Link href={`/pages/products/${category}/${brand}/10w-40`}>
            <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/10w-40` ? "underline" : "no-underline"}`} role="menuitem">
            10W-40
            </span>
        </Link> : ""}
        {(category === "aceites" && brand === "shell") || (category === "all" && brand === "shell") || (category === "aceites" && brand === "all") ?
        <Link href={`/pages/products/${category}/${brand}/15w-40`}>
            <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/15w-40` ? "underline" : "no-underline"}`} role="menuitem">
            15W-40
            </span>
        </Link> : ""}
    </>
  )
}; export default Aceites;
