"use client";
import React, { useState, useEffect } from 'react';
import { useDarkMode } from '@/app/hooks/useDarkMode';

const InputFilter = ({ data, category, brand, filter, setProductsFiltered }) => {

  const [keyword, setKeyword] = useState("");
  const { isDarkMode } = useDarkMode();

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    try {
      const productsPrefiltered = data.filter(product => {

        const categoryMatch = category === "all" || product.category.toLowerCase() === category.toLowerCase();
        
        const brandMatch = brand === "all" || product.brand.toLowerCase() === brand.toLowerCase();
        
        const filterMatch = filter === "all" || product.filter.toLowerCase() === filter.toLowerCase();
        
        return categoryMatch && brandMatch && filterMatch;
      });
  
      const productsFilter = productsPrefiltered.filter(product =>
        (
          product.category.toLowerCase().includes(keyword.toLowerCase().trim())
          || product.brand.toLowerCase().includes(keyword.toLowerCase().trim())
          || product.model.toLowerCase().includes(keyword.toLowerCase().trim())
          || product.description.toLowerCase().includes(keyword.toLowerCase().trim())
        )
      );

      setProductsFiltered(productsFilter);
    } catch (error) {
      console.log(error.message);
    }

  }, [keyword, category, data, setProductsFiltered]);

  return (
    <div className='flex justify-center items-center flex-col gap-4'>
      <input
        className={`bg-white rounded-xl w-72 h-10 border-2 px-2 text-gray-700 shadow-gray-700 shadow-md ${isDarkMode ? "border-orange-600" : "border-blue-600"}`}
        placeholder='Filtro Avanzado...'
        value={keyword}
        onChange={handleChange}
      />
    </div>
  );
}; export default InputFilter;