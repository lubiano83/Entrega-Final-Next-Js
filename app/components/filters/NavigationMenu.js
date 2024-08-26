"use client";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Banner from '../Banner';
import { useParams } from 'next/navigation';
import { useDarkMode } from '../../hooks/useDarkMode';
import BrandFilters from './BrandFilters';
import CategoryFilters from './CategoryFilters';
import ModelFilters from './ModelFilters';
import SortFilters from './SortFilters';

const NavigationMenu = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const path = usePathname();
  const { category = "all", brand = "all", filter = "all" } = useParams();
  const { isDarkMode } = useDarkMode();

  const toggleCategoryDropdown = () => {
    setIsCategoryOpen(!isCategoryOpen);
    setIsBrandOpen(false); // Cierra el dropdown de marcas cuando se abre el de categorías
    setIsModelOpen(false);
    setIsSortOpen(false);
  };

  const toggleBrandDropdown = () => {
    setIsBrandOpen(!isBrandOpen);
    setIsCategoryOpen(false); // Cierra el dropdown de categorías cuando se abre el de marcas
    setIsModelOpen(false);
    setIsSortOpen(false);
  };

  const toggleModelDropdown = () => {
    setIsModelOpen(!isModelOpen);
    setIsCategoryOpen(false);
    setIsBrandOpen(false); // Cierra el dropdown de categorías cuando se abre el de marcas
    setIsSortOpen(false);
  };

  const toggleSortDropdown = () => {
    setIsSortOpen(!isSortOpen);
    setIsModelOpen(false);
    setIsCategoryOpen(false);
    setIsBrandOpen(false); // Cierra el dropdown de categorías cuando se abre el de marcas
  };

  const closeDropdowns = () => {
    setIsCategoryOpen(false);
    setIsBrandOpen(false);
    setIsModelOpen(false);
    setIsSortOpen(false);
  };

  return (
    <Banner>
      <div className="flex w-full justify-evenly flex-wrap gap-4">
        <CategoryFilters toggleDropdown={toggleCategoryDropdown} isOpen={isCategoryOpen}  closeDropdowns={closeDropdowns} isDarkMode={isDarkMode} path={path} />
        <BrandFilters toggleDropdown={toggleBrandDropdown} isOpen={isBrandOpen} closeDropdowns={closeDropdowns} isDarkMode={isDarkMode} path={path} category={category} />
        <ModelFilters toggleDropdown={toggleModelDropdown} isOpen={isModelOpen} closeDropdowns={closeDropdowns} isDarkMode={isDarkMode} path={path} category={category} brand={brand} />
        <SortFilters toggleDropdown={toggleSortDropdown} isOpen={isSortOpen} closeDropdowns={closeDropdowns} isDarkMode={isDarkMode} path={path} category={category} brand={brand} filter={filter} />
      </div>
    </Banner>
  );
}; export default NavigationMenu;