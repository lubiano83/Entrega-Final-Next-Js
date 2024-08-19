import React from 'react';
import Link from 'next/link';

const CategoryFilters = ({toggleDropdown, closeDropdowns, isDarkMode, path, isOpen}) => {

  return (
    <div className="relative">
          <button
            onClick={toggleDropdown}
            className={`text-white hover:text-gray-700 font-bold rounded-md focus:outline-none h-auto max-h-72 scroll-my-1`}
          >
            Categorías
          </button>
          {isOpen && (
            <div className={`absolute mt-2 w-36 z-10 max-h-72 overflow-y-scroll rounded-md shadow-lg ${isDarkMode ? "bg-orange-400" : "bg-blue-400"} ring-1 ring-black ring-opacity-5`}>
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <Link href="/pages/products">
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === "/pages/products" ? "underline" : "no-underline"}`} role="menuitem">
                    Todos
                  </span>
                </Link>
                <Link href="/pages/products/aceites">
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === "/pages/products/aceites" ? "underline" : "no-underline"}`} role="menuitem">
                    Aceites
                  </span>
                </Link>
                <Link href="/pages/products/aromatizantes">
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === "/pages/products/aromatizantes" ? "underline" : "no-underline"}`} role="menuitem">
                    Aromatizantes
                  </span>
                </Link>
                <Link href="/pages/products/baterias">
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === "/pages/products/baterias" ? "underline" : "no-underline"}`} role="menuitem">
                    Baterias
                  </span>
                </Link>
                <Link href="/pages/products/filtros">
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === "/pages/products/filtros" ? "underline" : "no-underline"}`} role="menuitem">
                    Filtros
                  </span>
                </Link>
                <Link href="/pages/products/neumaticos">
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${path === "/pages/products/neumaticos" ? "underline" : "no-underline"}`} role="menuitem">
                    Neumáticos
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
  )
}; export default CategoryFilters;
