import React from 'react';
import Link from 'next/link';

const Filtros = ({category, brand, closeDropdowns, path}) => {
  return (
    <>
        {(category === "filtros" && brand === "mann") || (category === "todos" && brand === "mann") || (category === "filtros" && brand === "todos") ?
        <Link href={`/pages/products/${category}/${brand}/Aire`}>
            <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/Aire` ? "underline" : "no-underline"}`} role="menuitem">
              Aire
            </span>
        </Link> : ""}
        {(category === "filtros" && brand === "mann") || (category === "todos" && brand === "mann") || (category === "filtros" && brand === "todos") ?
        <Link href={`/pages/products/${category}/${brand}/Elemento`}>
            <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/Elemento` ? "underline" : "no-underline"}`} role="menuitem">
              Elemento
            </span>
        </Link> : ""}
        {(category === "filtros" && brand === "mann") || (category === "todos" && brand === "mann") || (category === "filtros" && brand === "todos") ?
        <Link href={`/pages/products/${category}/${brand}/Aceite`}>
            <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/${brand}/Aceite` ? "underline" : "no-underline"}`} role="menuitem">
              Aceite
            </span>
        </Link> : ""}
    </>
  )
}; export default Filtros;
