import React from 'react';
import Link from 'next/link';

const Filtros = ({category, brand, closeDropdowns, path}) => {
  return (
    <>
        {(category === "filtros" && brand === "mann") || (category === "all" && brand === "mann") || (category === "filtros" && brand === "all") ?
        <Link href={`/pages/products/${category}/${brand}/aire`}>
            <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/aire` ? "underline" : "no-underline"}`} role="menuitem">
              Aire
            </span>
        </Link> : ""}
        {(category === "filtros" && brand === "mann") || (category === "all" && brand === "mann") || (category === "filtros" && brand === "all") ?
        <Link href={`/pages/products/${category}/${brand}/elemento`}>
            <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/elemento` ? "underline" : "no-underline"}`} role="menuitem">
              Elemento
            </span>
        </Link> : ""}
        {(category === "filtros" && brand === "mann") || (category === "all" && brand === "mann") || (category === "filtros" && brand === "all") ?
        <Link href={`/pages/products/${category}/${brand}/aceite`}>
            <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/aceite` ? "underline" : "no-underline"}`} role="menuitem">
              Aceite
            </span>
        </Link> : ""}
    </>
  )
}; export default Filtros;
