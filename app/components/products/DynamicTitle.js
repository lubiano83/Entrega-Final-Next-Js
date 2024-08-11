"use client"
import React from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';
import { useCapitalize } from '../../hooks/useCapitalize';
import { useParams } from 'next/navigation';

const DynamicTitle = () => {

    const { isDarkMode } = useDarkMode();
    const { capitalize } = useCapitalize();
    const { category = "todos" } = useParams();

  return (
    <h2 className ={`${isDarkMode ? "text-orange-600" : "text-blue-600"} text-3xl font-bold flex flex-wrap justify-center items-center text-center`}>
        Categoria: {capitalize(category)}
    </h2>
  )
}; export default DynamicTitle;
