import React from 'react';
import Link from 'next/link';
import Aceites from './models/Aceites';
import Aromatizantes from './models/Aromatizantes';
import Baterias from './models/Baterias';
import Filtros from './models/Filtros';
import Neumaticos from './models/Neumaticos';

const ModelFilters = ({toggleDropdown, isOpen, closeDropdowns, isDarkMode, path, brand, category}) => {

  return (
    <div className="relative">
          <button
            onClick={toggleDropdown}
            className={`text-white hover:text-gray-700 font-bold rounded-md focus:outline-none h-auto max-h-72 scroll-my-1`}
          >
            Filtros
          </button>
          {isOpen && (
            <div className={`absolute mt-2 z-10 w-36 rounded-md max-h-72 overflow-y-scroll shadow-lg ${isDarkMode ? "bg-orange-400" : "bg-blue-400"} ring-1 ring-black ring-opacity-5`}>
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                {(category === "all" || category !== "all" || brand === "all" || brand !== "all") ?
                <Link href={`/pages/products/${category}/${brand}`}>
                  <span onClick={closeDropdowns} className={`${(category === "all" && brand === "all" ? "text-gray-700 flex justify-center items-center text-sm px-2 text-center no-underline" : "block px-4 py-2 text-sm text-white hover:bg-gray-700")} ${path === `/pages/products/${category}/${brand}` ? "underline" : "no-underline"}`} role="menuitem">
                    { (category === "all" && brand === "all") ? "Debes escoger una categoría o marca primero." : "Todos"}
                  </span>
                </Link> : ""}
                {/* Listado de categorias */}
                <Aceites category={category} brand={brand} closeDropdowns={closeDropdowns} path={path}/>
                <Aromatizantes category={category} brand={brand} closeDropdowns={closeDropdowns} path={path}/>
                <Baterias category={category} brand={brand} closeDropdowns={closeDropdowns} path={path}/>
                <Filtros category={category} brand={brand} closeDropdowns={closeDropdowns} path={path}/>
                <Neumaticos category={category} brand={brand} closeDropdowns={closeDropdowns} path={path}/>
              </div>
            </div>
          )}
        </div>
  )
}; export default ModelFilters;