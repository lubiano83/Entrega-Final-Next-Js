import React from 'react';
import Link from 'next/link';
import Aceites from './models/Aceites';
import Aromatizantes from './models/Aromatizantes';
import Baterias from './models/Baterias';
import Filtros from './models/Filtros';
import Neumaticos from './models/Neumaticos';

const ModelFilters = ({toggleModelDropdown, isModelOpen, closeDropdowns, isDarkMode, path, brand = "todos", category = "todos"}) => {

  return (
    <div className="relative">
          <button
            onClick={toggleModelDropdown}
            className={`text-white hover:text-gray-700 font-bold rounded-md focus:outline-none h-auto max-h-72 scroll-my-1`}
          >
            Filtros
          </button>
          {isModelOpen && (
            <div className={`absolute mt-2 z-10 w-36 rounded-md max-h-72 overflow-y-scroll shadow-lg ${isDarkMode ? "bg-orange-400" : "bg-blue-400"} ring-1 ring-black ring-opacity-5`}>
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                {(category === "todos" || category !== "todos" || brand === "todos" || brand !== "todos") ?
                <Link href={`/pages/products/${category}/${brand}`}>
                  <span onClick={closeDropdowns} className={`${(category === "todos" && brand === "todos" ? "text-gray-700 flex justify-center items-center text-sm px-2 text-center no-underline" : "block px-4 py-2 text-sm text-white hover:bg-gray-700")} ${path === `/pages/products/${category}/${brand}` ? "underline" : "no-underline"}`} role="menuitem">
                    { (category === "todos" && brand === "todos") ? "Debes escoger una categoría o marca primero." : "Todos"}
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