"use client";
import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Title = ({children}) => {

  const { isDarkMode } = useDarkMode();

  return (
    <h2 className={`${isDarkMode ? "text-orange-600" : "text-blue-600"} text-2xl font-bold text-center`}>
      {children}
    </h2>
  )
}; export default Title;
