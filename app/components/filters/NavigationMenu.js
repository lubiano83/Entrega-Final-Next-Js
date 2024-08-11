"use client";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Banner from '../Banner';
import { useParams } from 'next/navigation';
import { useDarkMode } from '../../hooks/useDarkMode';
import BrandFilters from './BrandFilters';
import CategoryFilters from './CategoryFilters';
import ModelFilters from './ModelFilters';

const NavigationMenu = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const path = usePathname();
  const { category = "todos", brand = "todos" } = useParams();
  const { isDarkMode } = useDarkMode();

  const toggleCategoryDropdown = () => {
    setIsCategoryOpen(!isCategoryOpen);
    setIsBrandOpen(false); // Cierra el dropdown de marcas cuando se abre el de categorías
    setIsModelOpen(false);
  };

  const toggleBrandDropdown = () => {
    setIsBrandOpen(!isBrandOpen);
    setIsCategoryOpen(false); // Cierra el dropdown de categorías cuando se abre el de marcas
    setIsModelOpen(false);
  };

  const toggleModelDropdown = () => {
    setIsModelOpen(!isModelOpen);
    setIsCategoryOpen(false);
    setIsBrandOpen(false); // Cierra el dropdown de categorías cuando se abre el de marcas
  };

  const closeDropdowns = () => {
    setIsCategoryOpen(false);
    setIsBrandOpen(false);
    setIsModelOpen(false);
  };

  return (
    <Banner>
      <div className="flex w-full justify-evenly flex-wrap gap-4">
        <CategoryFilters toggleCategoryDropdown={toggleCategoryDropdown} closeDropdowns={closeDropdowns} isDarkMode={isDarkMode} path={path} isCategoryOpen={isCategoryOpen} />
        <BrandFilters toggleBrandDropdown={toggleBrandDropdown} isBrandOpen={isBrandOpen} closeDropdowns={closeDropdowns} isDarkMode={isDarkMode} path={path} category={category} />
        <ModelFilters toggleModelDropdown={toggleModelDropdown} isModelOpen={isModelOpen} closeDropdowns={closeDropdowns} isDarkMode={isDarkMode} path={path} category={category} brand={brand} />
      </div>
    </Banner>
  );
}; export default NavigationMenu;
