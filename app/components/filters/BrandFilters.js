import React from 'react';
import Link from 'next/link';

const BrandFilters = ({toggleDropdown, isOpen, closeDropdowns, isDarkMode, path, category}) => {

  return (
    <div className="relative">
          <button
            onClick={toggleDropdown}
            className={`text-white hover:text-gray-700  font-bold rounded-md focus:outline-none h-auto max-h-72 scroll-my-1`}
          >
            Marcas
          </button>
          {isOpen && (
            <div className={`absolute mt-2 z-10 w-36 max-h-72 overflow-y-scroll rounded-md shadow-lg ${isDarkMode ? "bg-orange-400" : "bg-blue-400"} ring-1 ring-black ring-opacity-5`}>
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {category !== "all" || category === "all" ?
              <Link href={`/pages/products/${category}`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}` ? "underline" : "no-underline"}`} role="menuitem">
                    Todos
                  </span>
                </Link> : ""}
                {category === "neumaticos" || category === "baterias" || category === "all" ?
                <Link href={`/pages/products/${category}/hankook`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/hankook` ? "underline" : "no-underline"}`} role="menuitem">
                    Hankook
                  </span>
                </Link> : ""}
                {category === "filtros" || category === "all" ?
                <Link href={`/pages/products/${category}/mann`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/mann` ? "underline" : "no-underline"}`} role="menuitem">
                    Mann
                  </span>
                </Link>  : ""}
                {category === "aromatizantes" || category === "all" ?
                <Link href={`/pages/products/${category}/paloma`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/paloma` ? "underline" : "no-underline"}`} role="menuitem">
                    Paloma
                  </span>
                </Link> : ""}
                {category === "aceites" || category === "all" ?
                <Link href={`/pages/products/${category}/shell`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === `/pages/products/${category}/shell` ? "underline" : "no-underline"}`} role="menuitem">
                    Shell
                  </span>
                </Link> : ""}
              </div>
            </div>
          )}
        </div>
  )
}; export default BrandFilters;
