import React from 'react';
import Link from 'next/link';

const SortFilters = ({toggleDropdown, isOpen, closeDropdowns, isDarkMode, path, category, brand, filter}) => {

  return (
    <div className="relative">
          <button
            onClick={toggleDropdown}
            className={`text-white hover:text-gray-700  font-bold rounded-md focus:outline-none h-auto max-h-72 scroll-my-1`}
          >
            Precio
          </button>
          {isOpen && (
            <div className={`absolute mt-2 z-10 w-36 max-h-72 overflow-y-scroll rounded-md shadow-lg ${isDarkMode ? "bg-orange-400" : "bg-blue-400"} ring-1 ring-black ring-opacity-5`}>
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <Link href={`/pages/products/${category}/${brand}/${filter}?sort=asc`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700`} role="menuitem">
                  Ascendente
                  </span>
                </Link>
                <Link href={`/pages/products/${category}/${brand}/${filter}?sort=desc`}>
                  <span onClick={closeDropdowns} className={`block px-4 py-2 text-sm text-white hover:bg-gray-700`} role="menuitem">
                    Descendente
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
  )
}; export default SortFilters;
